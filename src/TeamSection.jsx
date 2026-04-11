import { motion } from 'framer-motion';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Mwangi",
      role: "Managing Partner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format&q=80"
    },
    {
      name: "Sarah Kimani",
      role: "Senior Associate",
      image: "https://images.stockcake.com/public/8/b/9/8b94e68f-5261-4c41-bf6e-293cfc53c513_large/lawyer-at-work-stockcake.jpg"
    },
    {
      name: "David Ochieng",
      role: "Lead Counsel",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face&auto=format&q=80"
    },
    {
      name: "Grace Wanjiku",
      role: "Legal Advisor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face&auto=format&q=80"
    }
  ];

  return (
    <section style={{ padding: '10rem 2rem', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth < 991 ? '1fr' : '1fr 1.5fr', 
          gap: window.innerWidth < 991 ? '3rem' : '6rem', 
          alignItems: 'flex-start' 
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
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
            }}>Our Team</span>
            <h2 style={{ fontSize: window.innerWidth < 768 ? '2.5rem' : '3.5rem', fontWeight: 400, lineHeight: '1.2', marginBottom: '2rem' }}>
              Expertise In <span className="serif" style={{ fontStyle: 'italic' }}>Action</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              At FKM Advocates LLP, our skilled attorneys are dedicated to delivering exceptional legal services.
            </p>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth < 640 ? '1fr' : 'repeat(2, 1fr)', 
            gap: '2rem' 
          }}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card"
                style={{ 
                  padding: '1rem',
                  textAlign: 'center',
                  overflow: 'hidden'
                }}
              >
                <div style={{ 
                  height: '300px', 
                  overflow: 'hidden', 
                  marginBottom: '1.5rem',
                  borderRadius: '2px' 
                }}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.3rem' }}>{member.name}</h4>
                <p style={{ color: 'var(--accent-purple)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
