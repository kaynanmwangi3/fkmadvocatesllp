import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '8rem 2rem 4rem', 
      background: 'var(--bg-primary)', 
      borderTop: '1px solid var(--glass-border)',
      position: 'relative',
      zIndex: 2
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '4rem', marginBottom: '6rem' }}>
          <div>
            <Link to="/" style={{ 
              textDecoration: 'none', 
              color: 'var(--text-primary)',
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '2rem'
            }}>
              <span style={{ fontWeight: 700, letterSpacing: '0.1em', fontSize: '1.5rem' }}>FKM</span>
              <span style={{ fontWeight: 300, letterSpacing: '0.3em', fontSize: '0.8rem' }}>ADVOCATES LLP</span>
            </Link>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '300px' }}>
              Defining excellence in the Kenyan legal landscape through precision, integrity, and authoritative counsel.
            </p>
          </div>
          
          <div>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem', color: 'var(--accent-purple)' }}>Firm</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link to="/team" className="link-underlined">Our Team</Link></li>
              <li><Link to="/blog" className="link-underlined">Insights</Link></li>
              <li><Link to="/consultation" className="link-underlined">Consultation</Link></li>
              <li><a href="#cases" className="link-underlined">Practice Areas</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem', color: 'var(--accent-purple)' }}>Inquiries</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
              <li>Times Tower, Nairobi</li>
              <li>+254 700 000 000</li>
              <li>info@fkmadvocates.co.ke</li>
            </ul>
          </div>
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          paddingTop: '4rem', 
          borderTop: '1px solid var(--glass-border)',
          color: 'rgba(255,255,255,0.3)',
          fontSize: '0.85rem'
        }}>
          <div>
            &copy; {new Date().getFullYear()} FKM Advocates LLP. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span style={{ fontStyle: 'italic' }}>Attorney Advertising</span>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#" className="link-underlined">LinkedIn</a>
              <a href="#" className="link-underlined">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
