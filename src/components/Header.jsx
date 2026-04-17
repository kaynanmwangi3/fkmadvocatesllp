import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        padding: isScrolled ? '0.6rem 0' : '1rem 0',
        background: isScrolled ? 'linear-gradient(120deg, rgba(255, 255, 255, 0.56), rgba(255, 255, 255, 0.24))' : 'transparent',
        backdropFilter: isScrolled ? 'blur(18px) saturate(180%)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(18px) saturate(180%)' : 'none',
        boxShadow: isScrolled ? '0 10px 30px rgba(31, 41, 55, 0.12)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.6)' : '1px solid transparent'
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

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/consultation" className="btn-premium">
            Consultation
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
