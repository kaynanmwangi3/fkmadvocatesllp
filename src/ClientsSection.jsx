import { motion } from 'framer-motion';

const ClientsSection = () => {
  const clients = [
    {
      name: "Sarah Johnson",
      company: "Tech Innovations Ltd",
      review: "FKM Advocates provided exceptional legal guidance during our merger. Their expertise in business law saved us months of complications.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Global Properties",
      review: "Outstanding real estate legal services. They handled our property acquisition with professionalism and attention to detail.",
      rating: 5
    },
    {
      name: "Dr. Patricia Williams",
      company: "Williams Medical Group",
      review: "Their estate planning services gave me peace of mind. Thorough, knowledgeable, and genuinely caring about client needs.",
      rating: 5
    },
    {
      name: "James Ochieng",
      company: "Ochieng Enterprises",
      review: "Excellent civil litigation support. They fought tirelessly for our case and achieved a favorable outcome beyond our expectations.",
      rating: 5
    }
  ];

  return (
    <section style={{ padding: '10rem 2rem', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ marginBottom: '5rem', textAlign: 'center' }}
        >
          <span style={{ 
            color: 'var(--accent-purple)', 
            textTransform: 'uppercase', 
            letterSpacing: '0.3em',
            fontSize: '0.8rem',
            fontWeight: 600,
            display: 'block',
            marginBottom: '1rem'
          }}>Testimonials</span>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 400 }}>Voices of Trust</h2>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card"
              style={{ padding: '3rem', position: 'relative' }}
            >
              <div style={{ position: 'absolute', top: '1.5rem', right: '2rem', fontSize: '3rem', opacity: 0.1, color: 'var(--accent-purple)' }}>”</div>
              <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '4px' }}>
                {[...Array(client.rating)].map((_, i) => (
                  <span key={i} style={{ color: 'var(--accent-purple)', fontSize: '0.8rem' }}>★</span>
                ))}
              </div>
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1.05rem', 
                lineHeight: '1.8', 
                fontStyle: 'italic',
                marginBottom: '2rem' 
              }}>
                "{client.review}"
              </p>
              <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{client.name}</h4>
                <p style={{ color: 'var(--accent-purple)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px' }}>{client.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
