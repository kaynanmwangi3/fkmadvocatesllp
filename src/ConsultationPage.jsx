import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './Footer';

const ConsultationPage = () => {
  const maintenanceErrorMessage = 'We are currently having a server maintenance, Call our customer care form now. Sorry for the inconvinience.';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    legalIssue: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitError, setSubmitError] = useState('');

  const legalIssueOptions = [
    'Select a legal issue type...',
    'Civil Defense',
    'Litigation Strategy',
    'Contract Disputes',
    'Business Law',
    'Estate Planning & Probate',
    'Real Estate Law',
    'Criminal Matters',
    'Family Matters',
    'Employment Law',
    'Intellectual Property',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitStatus(null);

    setIsSubmitting(true);

    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      legalIssue: formData.legalIssue,
      message: formData.message,
      time: new Date().toISOString()
    };

    try {
      const timeoutMs = 12000;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

      const apiBase = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
      const endpointCandidates = apiBase
        ? [`${apiBase}/api/send-consultation`, `${apiBase}/api/send-consultation.js`]
        : import.meta.env.DEV
          ? [
              'http://localhost:3000/api/send-consultation',
              'http://localhost:3000/api/send-consultation.js',
              '/api/send-consultation',
              '/api/send-consultation.js'
            ]
          : ['/api/send-consultation', '/api/send-consultation.js'];
      let response;
      let data = {};

      for (const endpoint of endpointCandidates) {
        response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          signal: controller.signal
        });

        const contentType = response.headers.get('content-type') || '';
        data = await response.json().catch(() => ({}));

        // Keep trying if this endpoint is missing or if a rewrite returned HTML instead of JSON.
        if (response.status === 404 || !contentType.includes('application/json')) {
          continue;
        }

        break;
      }

      clearTimeout(timeoutId);
      if (!response || !response.ok || !data?.success) {
        throw new Error(data?.error || `Request failed with status ${response.status}`);
      }

      console.info('Resend success:', data);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        legalIssue: '',
        message: ''
      });
      setSubmitStatus('success');
    } catch (error) {
      console.error('Resend send failed:', error);
      setSubmitStatus('error');
      setSubmitError(maintenanceErrorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '1.2rem',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid var(--glass-border)',
    borderRadius: '2px',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.8rem',
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--text-secondary)'
  };

  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Header />
      
      <section style={{ 
        padding: '12rem 2rem 6rem', 
        textAlign: 'center',
        background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <span style={{ color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.8rem', marginBottom: '1rem', display: 'block' }}>Consultation</span>
          <h1 style={{ fontSize: '4rem', fontWeight: 400, marginBottom: '1.5rem' }}>Secure Your Future</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Schedule a confidential dialogue with our lead counsel. Precision starts with the first conversation.
          </p>
        </motion.div>
      </section>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem 10rem' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="glass-card" 
          style={{ padding: window.innerWidth < 768 ? '1.5rem' : '4rem' }}
        >
          {submitStatus === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', padding: '4rem 0' }}
            >
              <div style={{ fontSize: '4rem', color: 'var(--accent-purple)', marginBottom: '2rem' }}>✓</div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Request Received</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Our team will contact you within 24 hours to finalize your consultation.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr', gap: '2rem' }}>
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required style={inputStyle} onFocus={(e) => e.target.style.borderColor = 'var(--accent-purple)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'} />
                </div>
                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} onFocus={(e) => e.target.style.borderColor = 'var(--accent-purple)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'} />
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr', gap: '2rem' }}>
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={inputStyle} onFocus={(e) => e.target.style.borderColor = 'var(--accent-purple)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'} />
                </div>
                <div>
                  <label style={labelStyle}>Legal Matter</label>
                  <select 
                    name="legalIssue" 
                    value={formData.legalIssue}
                    onChange={handleChange}
                    required 
                    style={{
                      ...inputStyle,
                      appearance: 'auto', /* Ensure native dropdown arrow for reliability */
                    }} 
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-purple)'} 
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                  >
                    {legalIssueOptions.map(opt => (
                      <option 
                        key={opt} 
                        value={opt === 'Select a legal issue type...' ? '' : opt}
                        style={{ background: '#0d0d15', color: 'white' }} /* Dark bg for options */
                      >
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Brief Description</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="5" style={inputStyle} onFocus={(e) => e.target.style.borderColor = 'var(--accent-purple)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}></textarea>
              </div>

              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-premium"
                  style={{ width: window.innerWidth < 768 ? '100%' : '350px' }}
                >
                  {isSubmitting ? 'Processing...' : 'Request Consultation'}
                </button>
                {submitStatus === 'error' && (
                  <p style={{ color: '#ef4444', marginTop: '1rem', fontSize: '0.9rem' }}>
                    {submitError || 'Failed to send request. Please try again.'}
                  </p>
                )}
              </div>
            </form>
          )}
        </motion.div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(3, 1fr)', 
          gap: window.innerWidth < 768 ? '1rem' : '2rem', 
          marginTop: window.innerWidth < 768 ? '3rem' : '6rem' 
        }}>
          {[
            { title: "Response Time", desc: "Guaranteed contact within 24 business hours." },
            { title: "Privilege", desc: "All communications are protected by attorney-client privilege." },
            { title: "Precision", desc: "Expert guidance tailored to your specific objectives." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              style={{ 
                textAlign: 'center', 
                padding: window.innerWidth < 768 ? '1.5rem' : '2rem',
                borderBottom: window.innerWidth < 768 && i !== 2 ? '1px solid var(--glass-border)' : 'none'
              }}
            >
              <h4 style={{ color: 'var(--accent-purple)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>{item.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ConsultationPage;
