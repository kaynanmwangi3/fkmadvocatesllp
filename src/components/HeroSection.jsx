import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import heroImg from '../assets/legal-sign-design-with-scales-of-justice-symbol.webp';

const HeroSection = () => {
  const containerRef = useRef(null);
  const isMobile = window.innerWidth < 992;

  return (
    <section ref={containerRef} className="hero" style={{
      minHeight: isMobile ? 'auto' : '100vh',
      position: 'relative',
      overflow: 'hidden',
      padding: isMobile ? '8.6rem 0.6rem 2.3rem' : '7.5rem 0.35rem 1.5rem',
      background: '#f3f4f6'
    }}>
      <div className="hero-container" style={{
        maxWidth: '1720px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1.02fr 0.98fr',
        gap: isMobile ? '1.6rem' : '2rem',
        alignItems: 'stretch',
        zIndex: 2,
        width: isMobile ? '100%' : 'calc(100% - 0.5rem)'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hero-content"
          style={{
            order: 1,
            padding: isMobile ? '0.4rem' : '0.9rem 0.4rem 0.9rem 0',
            alignSelf: 'center'
          }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: '#f5f3ff',
            color: '#6b21a8',
            border: '1px solid #e9d5ff',
            borderRadius: '999px',
            padding: '0.5rem 0.9rem',
            fontWeight: 600,
            fontSize: '0.9rem',
            marginBottom: '1.8rem'
          }}>
            <span style={{ fontSize: '0.8rem' }}>●</span>
            Trusted Legal Partners
          </div>

          <h1 className="hero-title" style={{
            lineHeight: '1.06',
            marginBottom: '1.5rem',
            fontWeight: 700,
            color: '#0f172a',
            fontSize: isMobile ? '2.1rem' : '3.7rem',
            letterSpacing: '-0.03em'
          }}>
            Protecting Your Legal
            <br />
            Interests in{' '}
            <span style={{
              color: '#7e22ce',
              textDecoration: 'underline',
              textDecorationColor: '#e9d5ff',
              textUnderlineOffset: '5px',
              textDecorationThickness: '6px'
            }}>
              Kenya
            </span>{' '}
            &
            <br />
            Beyond
          </h1>

          <p className="hero-subtitle" style={{
            fontSize: isMobile ? '1rem' : '1.2rem',
            color: '#475569',
            maxWidth: '760px',
            marginBottom: '2rem',
            lineHeight: '1.5'
          }}>
            With over three decades of combined experience, FKM Advocates LLP provides
            comprehensive legal services with unwavering dedication and exceptional results.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '1.8rem'
          }}>
            <span style={{ padding: '0.56rem 0.95rem', border: '1px solid #dbe2ea', borderRadius: '10px', color: '#334155', fontWeight: 600, background: '#f8fafc', fontSize: '0.9rem' }}>Business Law</span>
            <span style={{ padding: '0.56rem 0.95rem', border: '1px solid #dbe2ea', borderRadius: '10px', color: '#334155', fontWeight: 600, background: '#f8fafc', fontSize: '0.9rem' }}>Estate Law</span>
            <span style={{ padding: '0.56rem 0.95rem', border: '1px solid #dbe2ea', borderRadius: '10px', color: '#334155', fontWeight: 600, background: '#f8fafc', fontSize: '0.9rem' }}>Litigation</span>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.8rem',
            marginBottom: '2rem'
          }}>
            <Link to="/consultation" style={{
              textDecoration: 'none',
              background: 'linear-gradient(90deg, #7e22ce, #a855f7)',
              color: '#ffffff',
              borderRadius: '12px',
              padding: '0.8rem 1.05rem',
              fontWeight: 700,
              fontSize: '0.92rem',
              boxShadow: '0 10px 25px rgba(126, 34, 206, 0.35)'
            }}>
              Schedule Free Consultation &nbsp; →
            </Link>

            <a href="tel:+254700000000" style={{
              textDecoration: 'none',
              color: '#334155',
              border: '1px solid #cbd5e1',
              borderRadius: '12px',
              padding: '0.8rem 1.05rem',
              fontWeight: 700,
              fontSize: '0.92rem',
              background: '#ffffff'
            }}>
              ☎ &nbsp; +254 (0) 20 123 4567
            </a>
          </div>

          <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1.8rem', display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '2.1rem', fontWeight: 700, color: '#0f172a', lineHeight: 1 }}>7+</div>
              <div style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.2rem' }}>years</div>
            </div>
            <div>
              <div style={{ fontSize: '2.1rem', fontWeight: 700, color: '#0f172a', lineHeight: 1 }}>95%</div>
              <div style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.2rem' }}>Success Rate</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="hero-image"
          style={{
            position: 'relative',
            height: isMobile ? '340px' : '100%',
            minHeight: isMobile ? '340px' : '580px',
            overflow: 'visible',
            borderRadius: '24px',
            order: 2,
            border: '14px solid #ede9fe'
          }}
        >
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 20px 45px rgba(15, 23, 42, 0.2)'
          }}>
            <motion.img
              src={heroImg}
              alt="Scales of justice"
              className="statue-image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
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
          </div>

          <div style={{
            position: 'absolute',
            left: isMobile ? '0.7rem' : '-1.2rem',
            bottom: isMobile ? '0.7rem' : '-1.2rem',
            background: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '14px',
            padding: isMobile ? '0.8rem' : '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            boxShadow: '0 12px 30px rgba(15, 23, 42, 0.12)',
            zIndex: 30
          }}>
            <div style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '10px',
              background: '#f3e8ff',
              color: '#7e22ce',
              display: 'grid',
              placeItems: 'center',
              fontSize: '1.2rem',
              fontWeight: 700
            }}>
              ✉
            </div>
            <div>
              <div style={{ color: '#334155', fontWeight: 700, fontSize: '1rem' }}>Available 24/7</div>
              <div style={{ color: '#64748b', fontSize: '0.88rem' }}>info@fkmadvocates.co.ke</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
