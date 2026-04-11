import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const TrustSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

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
    <section ref={containerRef} style={{ 
      position: 'relative', 
      padding: '15rem 2rem', 
      overflow: 'hidden',
      background: '#050508' 
    }}>
      {/* Parallax Background Visual */}
      <motion.div style={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 0,
        y,
        opacity: 0.3
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, #050508, transparent 20%, transparent 80%, #050508)',
          zIndex: 1
        }} />
        <img 
          src="/src/assets/1000155572.jpg" 
          alt="Legal background" 
          style={{ width: '100%', height: '120%', objectFit: 'cover', opacity: 0.8 }}
        />
      </motion.div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 style={{ fontSize: '4rem', fontWeight: 400, lineHeight: '1.1', marginBottom: '2rem' }}>
              Built on <span style={{ color: 'var(--accent-purple)' }}>Trust</span>,<br />
              Driven by <span className="serif" style={{ fontStyle: 'italic' }}>Results</span>.
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '500px' }}>
              For over 30 years, FKM Advocates LLP has been the cornerstone of legal excellence in Kenya, 
              providing sophisticated counsel for complex challenges.
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card"
                style={{ padding: '2.5rem' }}
              >
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem', fontWeight: 500 }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
