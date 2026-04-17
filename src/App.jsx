import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import gsap from 'gsap';
import HomePage from './HomePage';
import ConsultationPage from './ConsultationPage';
import Cursor from './components/Cursor';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Wrapper to handle Lenis and Transitions
const AppContent = () => {
  const location = useLocation();
  const streakRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP Background Light Streaks
    const ctx = gsap.context(() => {
      gsap.to(".light-streak", {
        x: '100vw',
        duration: 15,
        repeat: -1,
        ease: "none",
        stagger: {
          each: 5,
          from: "random"
        }
      });
    }, streakRef);

    return () => {
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="app-wrapper" ref={streakRef} style={{ position: 'relative' }}>
      <ScrollToTop />
      {/* Cinematic Background */}
      <div className="cinematic-bg" style={{ zIndex: -1 }}>
        <div className="bg-glow-1" />
        <div className="bg-glow-2" />
        <div className="bg-noise" />
        
        {/* GSAP Light Streaks */}
        <div className="light-streak" style={{ position: 'absolute', top: '20%', left: '-20%', width: '300px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--accent-purple-glow), transparent)', filter: 'blur(5px)' }} />
        <div className="light-streak" style={{ position: 'absolute', top: '40%', left: '-20%', width: '400px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)', filter: 'blur(3px)' }} />
        <div className="light-streak" style={{ position: 'absolute', top: '60%', left: '-20%', width: '500px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(65, 105, 225, 0.3), transparent)', filter: 'blur(8px)' }} />
        <div className="light-streak" style={{ position: 'absolute', top: '80%', left: '-20%', width: '200px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--accent-purple-glow), transparent)', filter: 'blur(4px)' }} />
      </div>
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={{ duration: 0.3, ease: "easeOut" }}>
              <HomePage />
            </motion.div>
          } />
          <Route path="/consultation" element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={{ duration: 0.3, ease: "easeOut" }}>
              <ConsultationPage />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>

      {/* Cursor at the very end to ensure top stacking */}
      <Cursor />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
