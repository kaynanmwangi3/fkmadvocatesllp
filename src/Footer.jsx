import { Link } from 'react-router-dom';

const Footer = () => {
  const isMobile = window.innerWidth < 992;

  const practiceAreas = [
    'Business Law',
    'Estate Law',
    'Litigation',
    'Corporate Advisory',
    'Real Estate',
    'Employment Law'
  ];

  return (
    <footer data-cursor-theme="dark" style={{
      padding: isMobile ? '3.5rem 1rem 1.4rem' : '4.2rem 2rem 1.6rem',
      backgroundColor: '#041536',
      backgroundImage: `
        linear-gradient(rgba(96, 165, 250, 0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(96, 165, 250, 0.08) 1px, transparent 1px),
        radial-gradient(circle at 18% 18%, rgba(59, 130, 246, 0.18), transparent 40%),
        radial-gradient(circle at 84% 76%, rgba(147, 51, 234, 0.16), transparent 34%)
      `,
      backgroundSize: '52px 52px, 52px 52px, auto, auto',
      borderTop: '1px solid rgba(167, 139, 250, 0.2)',
      position: 'relative',
      zIndex: 2
    }}>
      <div style={{ maxWidth: '1460px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.65fr 0.8fr 1.2fr 1.2fr',
          gap: isMobile ? '2rem' : '2.2rem',
          marginBottom: isMobile ? '2rem' : '3rem'
        }}>
          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <Link to="/" style={{
              textDecoration: 'none',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: isMobile ? 'center' : 'flex-start',
              gap: '0.75rem',
              marginBottom: '1.4rem'
            }}>
              <span style={{
                width: '2.6rem',
                height: '2.6rem',
                borderRadius: '10px',
                background: 'linear-gradient(145deg, #a855f7, #7e22ce)',
                color: '#ffffff',
                display: 'grid',
                placeItems: 'center',
                fontSize: '1.3rem',
                fontWeight: 700
              }}>
                ⚖
              </span>

              <span style={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start' }}>
                <span style={{ fontWeight: 700, letterSpacing: '0.02em', fontSize: '1.45rem', lineHeight: 1 }}>FKM ADVOCATES LLP</span>
                <span style={{ letterSpacing: '0.18em', fontSize: '0.8rem', color: '#93c5fd', marginTop: '0.2rem' }}>LEGAL EXCELLENCE</span>
              </span>
            </Link>

            <p style={{ color: '#dbeafe', lineHeight: '1.6', maxWidth: isMobile ? '100%' : '460px', fontSize: isMobile ? '0.95rem' : '1.15rem' }}>
              Defining excellence in the Kenyan legal landscape through precision, integrity, and authoritative counsel.
            </p>

            <div style={{ display: 'flex', gap: '0.7rem', marginTop: '1.2rem', justifyContent: isMobile ? 'center' : 'flex-start' }}>
              <a href="#" style={{ width: '2.3rem', height: '2.3rem', borderRadius: '10px', background: 'rgba(30, 41, 59, 0.75)', color: '#e2e8f0', textDecoration: 'none', display: 'grid', placeItems: 'center' }}>in</a>
              <a href="#" style={{ width: '2.3rem', height: '2.3rem', borderRadius: '10px', background: 'rgba(30, 41, 59, 0.75)', color: '#e2e8f0', textDecoration: 'none', display: 'grid', placeItems: 'center' }}>𝕏</a>
              <a href="#" style={{ width: '2.3rem', height: '2.3rem', borderRadius: '10px', background: 'rgba(30, 41, 59, 0.75)', color: '#e2e8f0', textDecoration: 'none', display: 'grid', placeItems: 'center' }}>f</a>
            </div>
          </div>

          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: '#e879f9' }}>FIRM</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li>
                <Link to="/consultation" style={{ textDecoration: 'none', color: '#ffffff', fontSize: isMobile ? '1rem' : '1.1rem' }}>
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: '#e879f9' }}>PRACTICE AREAS</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {practiceAreas.map((area) => (
                <li key={area} style={{ color: '#ffffff', fontSize: isMobile ? '1rem' : '1.1rem' }}>{area}</li>
              ))}
            </ul>
          </div>

          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: '#e879f9' }}>INQUIRIES</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>
                <div style={{ color: '#ffffff', fontWeight: 700, fontSize: isMobile ? '1rem' : '1rem' }}>⌖ &nbsp; Times Tower, Nairobi</div>
                <div style={{ color: '#93c5fd', marginLeft: isMobile ? 0 : '1.6rem', marginTop: '0.2rem', fontSize: isMobile ? '0.95rem' : '1rem' }}>12th Floor, Haile Selassie Avenue</div>
              </li>
              <li>
                <div style={{ color: '#ffffff', fontWeight: 700, fontSize: isMobile ? '1rem' : '1rem' }}>⌕ &nbsp; +254 700 000 000</div>
                <div style={{ color: '#93c5fd', marginLeft: isMobile ? 0 : '1.6rem', marginTop: '0.2rem', fontSize: isMobile ? '0.95rem' : '1rem' }}>Available 24/7</div>
              </li>
              <li>
                <div style={{ color: '#ffffff', fontWeight: 700, fontSize: isMobile ? '1rem' : '1rem' }}>✉ &nbsp; info@fkmadvocates.co.ke</div>
                <div style={{ color: '#93c5fd', marginLeft: isMobile ? 0 : '1.6rem', marginTop: '0.2rem', fontSize: isMobile ? '0.95rem' : '1rem' }}>Quick Response</div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          paddingTop: '1.4rem',
          borderTop: '1px solid rgba(148, 163, 184, 0.28)',
          color: '#93c5fd',
          fontSize: '0.9rem',
          textAlign: 'center'
        }}>
          <div>© {new Date().getFullYear()} FKM Advocates LLP. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#93c5fd' }}>Privacy Policy</a>
            <a href="#" style={{ textDecoration: 'none', color: '#93c5fd' }}>Terms of Service</a>
            <a href="#" style={{ textDecoration: 'none', color: '#93c5fd' }}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
