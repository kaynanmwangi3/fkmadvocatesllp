import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section style={{ padding: '10rem 2rem', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth < 991 ? '1fr' : '1.2fr 0.8fr', 
          gap: window.innerWidth < 991 ? '3rem' : '6rem' 
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span style={{ 
              color: 'var(--accent-purple)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.3em',
              fontSize: '0.8rem',
              fontWeight: 600,
              display: 'block',
              marginBottom: '1rem'
            }}>Contact Us</span>
            <h2 style={{ fontSize: window.innerWidth < 768 ? '2.5rem' : '3.5rem', fontWeight: 400, marginBottom: '2rem' }}>Define Your Future</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Legal challenges are the defining moments of your life. Do not navigate them without the precision and authority of FKM Advocates LLP.
            </p>
            
            <div className="glass-card" style={{ padding: window.innerWidth < 768 ? '2rem' : '3rem', marginTop: '3rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 500 }}>Global Headquarters</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Times Tower, 12th Floor<br />
                Haile Selassie Avenue<br />
                Nairobi, Kenya
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="mailto:info@fkmadvocates.co.ke" className="link-underlined" style={{ color: 'var(--accent-purple)' }}>info@fkmadvocates.co.ke</a>
                <a href="tel:+254700000000" className="link-underlined" style={{ color: 'var(--accent-purple)' }}>+254 700 000 000</a>
              </div>
              <div style={{ marginTop: '2.5rem' }}>
                <Link to="/consultation" className="btn-premium" style={{ width: '100%' }}>
                  Schedule Private Consultation
                </Link>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: '1.5rem', fontStyle: 'italic' }}>
                * Communication through our website does not establish an attorney-client relationship.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ height: '700px', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8198006835716!2d36.82194731475394!3d-1.2841633990637842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22ac83be7%3A0x5006d0de47b5c8b0!2sTimes%20Tower%2C%20Nairobi!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) contrast(1.2) brightness(0.9)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FKM Advocates LLP - Times Tower, Nairobi"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
