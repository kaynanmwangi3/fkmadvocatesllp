import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('business');

  const services = {
    business: {
      title: 'Business Law',
      icon: '⚖️',
      description: 'Comprehensive legal solutions for businesses of all sizes, from startups to multinational corporations. We provide strategic counsel to navigate the complexities of corporate law.',
      features: [
        'Corporate Formation & Governance',
        'Contract Negotiation & Drafting',
        'Mergers & Acquisitions',
        'Regulatory Compliance',
        'Employment Law',
        'Intellectual Property Protection'
      ]
    },
    estate: {
      title: 'Estate & Probate',
      icon: '📜',
      description: 'Protecting your legacy and ensuring your wishes are carried out with precision and care. We handle sensitive matters with the utmost professionalism and discretion.',
      features: [
        'Will & Testament Drafting',
        'Trust Administration',
        'Probate Court Proceedings',
        'Estate Tax Planning',
        'Guardianship Matters',
        'Asset Protection Strategies'
      ]
    },
    litigation: {
      title: 'Civil Litigation',
      icon: '🏛️',
      description: 'Aggressive representation in court with a track record of successful outcomes for our clients. We stand as your firm advocate in complex legal disputes.',
      features: [
        'Commercial Disputes',
        'Contract Litigation',
        'Personal Injury Claims',
        'Property Disputes',
        'Employment Litigation',
        'Alternative Dispute Resolution'
      ]
    },
    realestate: {
      title: 'Real Estate Law',
      icon: '🏢',
      description: 'Navigate complex property transactions and real estate matters with confidence and expertise. From acquisition to development, we cover all legal aspects.',
      features: [
        'Property Acquisitions & Sales',
        'Commercial Leasing',
        'Zoning & Land Use',
        'Construction Law',
        'Property Development',
        'Real Estate Financing'
      ]
    }
  };

  return (
    <section id="services" style={{ padding: window.innerWidth < 768 ? '4rem 1rem' : '6rem 2rem', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ marginBottom: '6rem', textAlign: 'center' }}
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1.5 }}
            style={{ 
              color: 'var(--accent-purple)', 
              textTransform: 'uppercase', 
              fontSize: '0.8rem',
              fontWeight: 600,
              display: 'block',
              marginBottom: '1rem'
            }}
          >
            Our Expertise
          </motion.span>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 400, marginBottom: '1.5rem' }}>Precision in Practice</h2>
          <p style={{ color: '#374151', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', fontWeight: 500 }}>
            Tailored legal strategies delivered with the authority and depth of experience your case demands.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '3rem',
          minHeight: '500px'
        }}>
          {/* Sidebar Nav */}
          <div style={{ 
            display: 'flex', 
            flexDirection: window.innerWidth < 768 ? 'row' : 'column', 
            gap: '1rem',
            overflowX: 'auto',
            paddingBottom: '1rem'
          }}>
            {Object.entries(services).map(([key, service], index) => (
              <motion.button
                key={key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveService(key)}
                className="clickable"
                style={{
                  background: activeService === key ? 'rgba(106, 13, 173, 0.1)' : 'transparent',
                  border: 'none',
                  borderLeft: window.innerWidth < 768 ? 'none' : (activeService === key ? '2px solid var(--accent-purple)' : '2px solid var(--glass-border)'),
                  borderBottom: window.innerWidth < 768 ? (activeService === key ? '2px solid var(--accent-purple)' : '2px solid var(--glass-border)') : 'none',
                  color: activeService === key ? 'var(--text-primary)' : '#4b5563',
                  padding: '1.2rem 1.5rem',
                  textAlign: 'left',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {service.title}
              </motion.button>
            ))}
          </div>

          {/* Content Area */}
          <div className="glass-card" style={{ padding: window.innerWidth < 768 ? '1.5rem' : '4rem', position: 'relative', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: '100%' }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{services[activeService].icon}</div>
                <h3 style={{ fontSize: window.innerWidth < 768 ? '1.8rem' : '2.5rem', marginBottom: '1.5rem', fontWeight: 500 }}>{services[activeService].title}</h3>
                <p style={{ color: '#374151', fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem', maxWidth: '800px', fontWeight: 500 }}>
                  {services[activeService].description}
                </p>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: window.innerWidth < 600 ? '1fr' : '1fr 1fr', 
                  gap: '1.2rem' 
                }}>
                  {services[activeService].features.map((feature, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.8rem',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem'
                      }}
                    >
                      <span style={{ color: 'var(--accent-purple)', fontSize: '1rem' }}>✓</span>
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Background Accent for Card */}
            <div style={{
              position: 'absolute',
              top: '50%',
              right: '-10%',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(106, 13, 173, 0.05) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
