import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import officeImg from './assets/Photo-2-1.webp';

const ContactSection = () => {
  const isMobile = window.innerWidth < 992;

  const infoRows = [
    {
      label: 'ADDRESS',
      value: 'Times Tower, 12th Floor',
      sub: 'Haile Selassie Avenue, Nairobi, Kenya',
      icon: '⌖'
    },
    {
      label: 'PHONE',
      value: '+254 700 000 000',
      sub: 'Available 24/7',
      icon: '⌕'
    },
    {
      label: 'EMAIL',
      value: 'info@fkmadvocates.co.ke',
      sub: 'Response within 2 hours',
      icon: '✉'
    }
  ];

  return (
    <section style={{ padding: isMobile ? '5rem 1rem' : '7rem 2rem', background: '#f3f4f6' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '3rem' }}
        >
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            background: '#ede9fe',
            color: '#7e22ce',
            border: '1px solid #ddd6fe',
            borderRadius: '999px',
            padding: '0.55rem 1rem',
            fontWeight: 700,
            fontSize: '0.9rem',
            marginBottom: '1.1rem'
          }}>
            ◌ CONTACT US
          </span>

          <h2 style={{ fontSize: isMobile ? '2.2rem' : '3.4rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.08, marginBottom: '0.9rem', letterSpacing: '-0.02em' }}>
            Define Your{' '}
            <span style={{ color: '#9333ea', fontStyle: 'italic' }}>Future</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: isMobile ? '0.98rem' : '1.15rem', maxWidth: '900px', lineHeight: 1.6, margin: '0 auto' }}>
            Legal challenges are the defining moments of your life. Do not navigate them without the precision and authority of FKM Advocates LLP.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.42fr 1fr',
          gap: isMobile ? '1.1rem' : '2rem',
          alignItems: 'stretch'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '1rem' : '1.2rem' }}
          >
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '18px',
              padding: isMobile ? '1.1rem' : '2rem',
              boxShadow: '0 12px 35px rgba(15, 23, 42, 0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.4rem' }}>
                <div style={{
                  width: '2.8rem',
                  height: '2.8rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(145deg, #a855f7, #7e22ce)',
                  color: '#ffffff',
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: '1.3rem',
                  boxShadow: '0 8px 20px rgba(126, 34, 206, 0.35)'
                }}>
                  ⌂
                </div>
                <div>
                  <h3 style={{ fontSize: isMobile ? '1.35rem' : '1.6rem', color: '#0f172a', fontWeight: 700, lineHeight: 1.1 }}>Global Headquarters</h3>
                  <p style={{ color: '#64748b', fontSize: isMobile ? '0.9rem' : '1.05rem' }}>East Africa&apos;s Premier Legal Center</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {infoRows.map((row) => (
                  <div key={row.label} style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '2.2rem',
                      height: '2.2rem',
                      borderRadius: '9px',
                      background: '#f1f5f9',
                      color: '#9333ea',
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0,
                      fontWeight: 700
                    }}>
                      {row.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', letterSpacing: '0.08em', color: '#64748b', fontWeight: 700 }}>{row.label}</div>
                      <div style={{ fontSize: isMobile ? '1.03rem' : '1.08rem', color: '#0f172a', fontWeight: 700, lineHeight: 1.25 }}>{row.value}</div>
                      <div style={{ color: '#64748b', fontSize: isMobile ? '0.95rem' : '1.05rem' }}>{row.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/consultation"
                style={{
                  marginTop: '1.5rem',
                  display: 'block',
                  textAlign: 'center',
                  textDecoration: 'none',
                  background: 'linear-gradient(90deg, #a855f7, #7e22ce)',
                  color: '#ffffff',
                  borderRadius: '13px',
                  padding: isMobile ? '0.9rem 1rem' : '1.05rem 1.2rem',
                  fontWeight: 700,
                  fontSize: isMobile ? '0.95rem' : '0.95rem',
                  letterSpacing: '0.02em',
                  boxShadow: '0 10px 25px rgba(126, 34, 206, 0.35)'
                }}
              >
                SCHEDULE PRIVATE CONSULTATION &nbsp; →
              </Link>
            </div>

            <div style={{
              background: 'linear-gradient(120deg, #a855f7, #7e22ce)',
              borderRadius: '14px',
              color: '#ffffff',
              padding: isMobile ? '1rem' : '1.2rem 1.3rem',
              display: 'flex',
              gap: '0.85rem',
              alignItems: 'center',
              boxShadow: '0 12px 28px rgba(126, 34, 206, 0.25)'
            }}>
              <div style={{
                width: '2.2rem',
                height: '2.2rem',
                borderRadius: '999px',
                border: '2px solid rgba(255,255,255,0.72)',
                display: 'grid',
                placeItems: 'center'
              }}>
                ◷
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: isMobile ? '0.95rem' : '1rem' }}>Available 24/7 for Emergencies</div>
                <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: isMobile ? '0.86rem' : '1.02rem' }}>Immediate legal support when you need it most</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.08 }}
            style={{
              position: 'relative',
              borderRadius: '18px',
              overflow: 'hidden',
              minHeight: isMobile ? '400px' : '590px',
              boxShadow: '0 20px 50px rgba(15, 23, 42, 0.22)'
            }}
          >
            <img
              src={officeImg}
              alt="Office building"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(2, 6, 23, 0.38), rgba(2, 6, 23, 0.08) 35%, rgba(2, 6, 23, 0.0) 60%)'
            }} />

            <div style={{
              position: 'absolute',
              left: isMobile ? '0.8rem' : '1.2rem',
              right: isMobile ? '0.8rem' : '1.2rem',
              bottom: isMobile ? '0.8rem' : '1.2rem',
              background: 'rgba(255,255,255,0.94)',
              border: '1px solid #e2e8f0',
              borderRadius: '14px',
              padding: isMobile ? '0.75rem' : '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              boxShadow: '0 10px 28px rgba(15, 23, 42, 0.15)'
            }}>
              <div style={{
                width: '2.4rem',
                height: '2.4rem',
                borderRadius: '10px',
                background: 'linear-gradient(145deg, #a855f7, #7e22ce)',
                color: '#ffffff',
                display: 'grid',
                placeItems: 'center',
                fontWeight: 700
              }}>
                ⌖
              </div>
              <div>
                <div style={{ color: '#0f172a', fontWeight: 700, fontSize: isMobile ? '0.95rem' : '1rem' }}>Visit Our Office</div>
                <div style={{ color: '#64748b', fontSize: isMobile ? '0.85rem' : '0.9rem' }}>Times Tower, Heart of Nairobi CBD</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
