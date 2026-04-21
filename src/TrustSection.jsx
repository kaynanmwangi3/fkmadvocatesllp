import { motion } from 'framer-motion';

const TrustSection = () => {
  const isMobile = window.innerWidth < 992;

  const features = [
    {
      title: "Experienced",
      description: "A team of lawyers with extensive experience and a proven track record of success in high-stakes litigation."
    },
    {
      title: "Strategic", 
      description: "A focus on results, with a precise and analytical approach to getting clients the best possible outcome."
    },
    {
      title: "Integrity",
      description: "Unwavering commitment to ethical standards and transparent communication throughout your legal journey."
    }
  ];

  return (
    <section data-cursor-theme="dark" style={{ 
      position: 'relative',
      padding: isMobile ? '5rem 1rem' : '7rem 2rem',
      overflow: 'hidden',
      backgroundColor: '#041536',
      backgroundImage: `
        linear-gradient(rgba(96, 165, 250, 0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(96, 165, 250, 0.08) 1px, transparent 1px),
        radial-gradient(circle at 20% 15%, rgba(59, 130, 246, 0.2), transparent 40%),
        radial-gradient(circle at 85% 70%, rgba(147, 51, 234, 0.18), transparent 34%)
      `,
      backgroundSize: '56px 56px, 56px 56px, auto, auto'
    }}>
      <div style={{ maxWidth: '1460px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2.2rem' : '5rem', alignItems: 'start' }}>
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              borderRadius: '999px',
              padding: '0.65rem 1.1rem',
              marginBottom: '1.8rem',
              color: '#e9d5ff',
              fontWeight: 600,
              fontSize: '1rem',
              background: 'rgba(22, 31, 58, 0.5)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(167, 139, 250, 0.35)'
            }}>
              <span style={{ fontSize: '0.9rem' }}>◌</span>
              Our Foundation
            </div>

            <h2 style={{ fontSize: isMobile ? '2.3rem' : '3.6rem', fontWeight: 700, lineHeight: '1.08', marginBottom: '1.4rem', color: '#f8fafc', letterSpacing: '-0.02em' }}>
              Built on <span style={{ color: 'var(--accent-purple)' }}>Trust</span>,<br />
              Driven by <span className="serif" style={{ fontStyle: 'italic', color: '#c084fc' }}>Results.</span>
            </h2>

            <p style={{ color: '#e2e8f0', fontSize: isMobile ? '1.05rem' : '1.2rem', lineHeight: '1.45', maxWidth: '820px', marginBottom: '1rem' }}>
              For over <strong style={{ color: '#ffffff' }}>10 years</strong>, FKM Advocates LLP has been the cornerstone of legal excellence in Kenya,
              providing sophisticated counsel for complex challenges.
            </p>
            <p style={{ color: '#93c5fd', fontSize: isMobile ? '0.95rem' : '1rem', lineHeight: '1.6', maxWidth: '860px' }}>
              Our unwavering commitment to client success, combined with deep legal expertise and strategic innovation,
              has established us as trusted advisors to businesses and individuals alike.
            </p>

            <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(148, 163, 184, 0.35)', paddingTop: '1.8rem', display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, minmax(0, 1fr))', gap: '1.4rem' }}>
              <div>
                <div style={{ fontSize: isMobile ? '1.8rem' : '2.35rem', color: '#ffffff', fontWeight: 700, lineHeight: 1 }}>10</div>
                <div style={{ color: '#a5b4fc', fontWeight: 700, marginLeft: '2.1rem', marginTop: '-1.35rem' }}>+</div>
                <div style={{ color: '#bfdbfe', marginTop: '0.2rem', fontSize: '0.95rem' }}>Years of Excellence</div>
              </div>

              <div>
                <div style={{ fontSize: isMobile ? '1.8rem' : '2.35rem', color: '#ffffff', fontWeight: 700, lineHeight: 1 }}>95</div>
                <div style={{ color: '#a5b4fc', fontWeight: 700, marginLeft: '2.35rem', marginTop: '-1.35rem' }}>%</div>
                <div style={{ color: '#bfdbfe', marginTop: '0.2rem', fontSize: '0.95rem' }}>Success Rate</div>
              </div>

              <div>
                <div style={{ fontSize: isMobile ? '1.8rem' : '2.35rem', color: '#ffffff', fontWeight: 700, lineHeight: 1 }}>100%</div>
                <div style={{ color: '#bfdbfe', marginTop: '0.2rem', fontSize: '0.95rem' }}>Integrity</div>
              </div>
            </div>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                style={{
                  padding: isMobile ? '1.2rem' : '2rem',
                  width: '100%',
                  background: 'rgba(15, 27, 56, 0.62)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(96, 165, 250, 0.22)',
                  borderRadius: '20px',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.1rem' }}>
                  <div style={{
                    width: isMobile ? '3.3rem' : '3.8rem',
                    height: isMobile ? '3.3rem' : '3.8rem',
                    borderRadius: '14px',
                    background: 'linear-gradient(145deg, #a855f7, #7e22ce)',
                    color: '#ffffff',
                    display: 'grid',
                    placeItems: 'center',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    boxShadow: '0 8px 20px rgba(168, 85, 247, 0.35)'
                  }}>
                    {index === 0 ? '⚶' : index === 1 ? '◎' : '⚖'}
                  </div>

                  <div>
                    <h3 style={{ fontSize: isMobile ? '1.35rem' : '1.4rem', marginBottom: '0.45rem', fontWeight: 700, color: '#ffffff' }}>{feature.title}</h3>
                    <p style={{ color: '#cbd5e1', lineHeight: '1.55', fontSize: isMobile ? '0.95rem' : '1rem' }}>{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
