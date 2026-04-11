import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={`header ${isScrolled ? 'header-scrolled glass' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background 0.3s ease, padding 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease',
        padding: isScrolled ? '0.6rem 0' : '1.2rem 0',
        background: isScrolled ? 'rgba(5, 5, 8, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(15px)' : 'none',
        boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.3)' : 'none'
      }}
    >
      <div className="header-container" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Link to="/" className="logo clickable" style={{
          textDecoration: 'none',
          color: 'var(--text-primary)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
          <motion.div
            initial={{ filter: 'blur(5px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span style={{ fontWeight: 700, letterSpacing: '0.1em', fontSize: '1.2rem' }}>FKM</span>
            <span style={{ fontWeight: 300, letterSpacing: '0.2em', fontSize: '0.7rem', display: 'block' }}>ADVOCATES LLP</span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="nav desktop-only" style={{
          display: 'flex',
          gap: '2.5rem'
        }}>
          <Link to="/" className="nav-item link-underlined">Home</Link>
          <a href="#services" className="nav-item link-underlined">Services</a>
          <Link to="/team" className="nav-item link-underlined">Our Team</Link>
          <Link to="/blog" className="nav-item link-underlined">Blog</Link>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link to="/consultation" className="btn-premium desktop-only">
            Consultation
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle clickable"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              background: 'none',
              border: 'none',
              padding: '10px',
              zIndex: 1001
            }}
          >
            <motion.span animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }} style={{ width: '25px', height: '2px', background: 'white' }} />
            <motion.span animate={{ opacity: isMenuOpen ? 0 : 1 }} style={{ width: '25px', height: '2px', background: 'white' }} />
            <motion.span animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }} style={{ width: '25px', height: '2px', background: 'white' }} />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  position: 'fixed',
                  inset: 0,
                  background: 'rgba(0,0,0,0.8)',
                  backdropFilter: 'blur(5px)',
                  zIndex: 999
                }}
              />
              {/* Menu */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: 'fixed',
                  top: 0,
                  right: 0,
                  height: '100dvh', /* Use dynamic viewport height */
                  width: '100%',
                  maxWidth: '300px',
                  background: 'var(--bg-secondary)',
                  zIndex: 1000,
                  padding: '6rem 2rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
                  overflowY: 'auto'
                }}
              >
                <Link to="/" className="nav-item" style={{ fontSize: '1.2rem', padding: '0.5rem 0' }} onClick={() => setIsMenuOpen(false)}>Home</Link>
                <a href="#services" className="nav-item" style={{ fontSize: '1.2rem', padding: '0.5rem 0' }} onClick={() => setIsMenuOpen(false)}>Services</a>
                <Link to="/team" className="nav-item" style={{ fontSize: '1.2rem', padding: '0.5rem 0' }} onClick={() => setIsMenuOpen(false)}>Our Team</Link>
                <Link to="/blog" className="nav-item" style={{ fontSize: '1.2rem', padding: '0.5rem 0' }} onClick={() => setIsMenuOpen(false)}>Blog</Link>
                <Link to="/consultation" className="btn-premium" onClick={() => setIsMenuOpen(false)} style={{ marginTop: '1rem', width: '100%' }}>
                  Consultation
                </Link>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;