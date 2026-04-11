import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroImg from '../assets/scales-of-justice-stockcake.jpg';

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const tagline = "Protecting Your Legal Interests in Kenya & Beyond";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section ref={containerRef} className="hero" style={{
      minHeight: window.innerWidth < 991 ? 'auto' : '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: window.innerWidth < 991 ? '8rem 1.5rem 3rem' : '4rem 2rem 0'
    }}>
      <motion.div style={{ y, opacity }} className="hero-background-parallax">
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, transparent 0%, var(--bg-primary) 100%)',
          zIndex: 1
        }} />
      </motion.div>

      <div className="hero-container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '4rem',
        alignItems: 'center',
        zIndex: 2,
        width: '100%'
      }}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content"
          style={{ order: window.innerWidth < 991 ? 2 : 1, position: 'relative', zIndex: 10 }}
        >
          <motion.h1 variants={itemVariants} className="hero-title" style={{
            lineHeight: '1.1',
            marginBottom: '2rem',
            fontWeight: 400,
            color: '#ffffff',
            textShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            {tagline.split(" ").map((word, i) => (
              <span key={i} style={{ display: 'inline-block', marginRight: '0.3em' }}>
                {word.split("").map((char, j) => (
                  <motion.span
                    key={j}
                    variants={letterVariants}
                    style={{ 
                      display: 'inline-block',
                      background: 'linear-gradient(to bottom, #ffffff, #d1d1d6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-subtitle" style={{
            fontSize: '1.2rem', /* Slightly larger */
            color: '#e2e2e7', /* Brighter */
            maxWidth: '600px',
            marginBottom: '2.5rem',
            lineHeight: '1.8',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            With over three decades of combined experience, FKM Advocates LLP provides 
            comprehensive legal services with unwavering dedication.
          </motion.p>

          <motion.div variants={itemVariants} style={{ marginBottom: '3rem' }}>
            <ul className="practice-list" style={{
              listStyle: 'none',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              color: 'var(--text-primary)',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              <li><span style={{ color: 'var(--accent-purple)', marginRight: '8px' }}>•</span>Business Law</li>
              <li><span style={{ color: 'var(--accent-purple)', marginRight: '8px' }}>•</span>Estate Law</li>
              <li><span style={{ color: 'var(--accent-purple)', marginRight: '8px' }}>•</span>Litigation</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link to="/consultation" className="btn-premium">
              Free Consultation
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="hero-image" 
          style={{
            position: 'relative',
            height: window.innerWidth < 991 ? '400px' : '600px',
            overflow: 'hidden',
            borderRadius: '2px',
            order: window.innerWidth < 991 ? 1 : 2
          }}
        >
          <div className="image-overlay" style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, var(--bg-primary), transparent 40%)',
            zIndex: 1
          }} />
          <motion.img 
            src={heroImg} 
            alt="Scales of justice"
            className="statue-image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              brightness: '0.8'
            }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
      
      {/* Cinematic bottom bar */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 2.5 }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '2rem',
          right: '2rem',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--glass-border), transparent)',
          zIndex: 2
        }}
      />
    </section>
  );
};

export default HeroSection;