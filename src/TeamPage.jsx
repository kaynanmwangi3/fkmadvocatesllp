import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './Footer';

const TeamPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Partners', 'Associates', 'Support Staff'];

  const teamMembers = [
    {
      id: 1,
      name: 'John Mwangi',
      position: 'Managing Partner',
      category: 'Partners',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
      description: 'With over 25 years of experience in civil litigation and business law, John leads FKM Advocates with a commitment to excellence and client success.',
      expertise: ['Civil Litigation', 'Business Law', 'Commercial Disputes'],
      email: 'john.mwangi@fkmadvocates.co.ke'
    },
    {
      id: 2,
      name: 'Sarah Kimani',
      position: 'Senior Partner',
      category: 'Partners',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
      description: 'Sarah brings extensive expertise in estate planning and probate law, having guided hundreds of families through complex estate administration.',
      expertise: ['Estate Planning', 'Probate Law', 'Tax Planning'],
      email: 'sarah.kimani@fkmadvocates.co.ke'
    },
    {
      id: 3,
      name: 'David Ochieng',
      position: 'Partner',
      category: 'Partners',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
      description: 'David is a recognized authority in real estate law and property transactions. His strategic counsel has facilitated major commercial developments.',
      expertise: ['Real Estate Law', 'Property Transactions', 'Land Use Planning'],
      email: 'david.ochieng@fkmadvocates.co.ke'
    },
    {
      id: 4,
      name: 'Grace Wanjiku',
      position: 'Senior Associate',
      category: 'Associates',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&auto=format&q=80',
      description: 'Grace specializes in corporate law and business formation, helping entrepreneurs and established companies navigate regulatory requirements.',
      expertise: ['Corporate Law', 'Business Formation', 'Regulatory Compliance'],
      email: 'grace.wanjiku@fkmadvocates.co.ke'
    }
  ];

  const filteredMembers = selectedCategory === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => member.category === selectedCategory);

  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Header />
      
      {/* Cinematic Hero */}
      <section style={{ 
        height: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'relative',
        padding: '0 2rem',
        textAlign: 'center',
        background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ maxWidth: '800px', zIndex: 2 }}
        >
          <span style={{ color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.8rem', marginBottom: '1rem', display: 'block' }}>Our Team</span>
          <h1 style={{ fontSize: '4rem', fontWeight: 400, marginBottom: '1.5rem', lineHeight: '1.1' }}>Distinguished Counsel</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Meet the legal minds defining the standard of excellence in East African law.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem 10rem' }}>
        {/* Category Filter */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '6rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '2rem' }}>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: 'none',
                border: 'none',
                color: selectedCategory === cat ? 'var(--accent-purple)' : 'var(--text-secondary)',
                cursor: 'pointer',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
            >
              {cat}
              {selectedCategory === cat && (
                <motion.div layoutId="underline" style={{ position: 'absolute', bottom: '-2rem', left: 0, right: 0, height: '2px', background: 'var(--accent-purple)' }} />
              )}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '3rem' }}>
          <AnimatePresence mode="popLayout">
            {filteredMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card"
                style={{ padding: '2rem', textAlign: 'center' }}
              >
                <div style={{ width: '200px', height: '200px', margin: '0 auto 2rem', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--glass-border)' }}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 500, marginBottom: '0.5rem' }}>{member.name}</h3>
                <p style={{ color: 'var(--accent-purple)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>{member.position}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem' }}>{member.description}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
                  {member.expertise.map(exp => (
                    <span key={exp} style={{ fontSize: '0.7rem', padding: '4px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', border: '1px solid var(--glass-border)' }}>{exp}</span>
                  ))}
                </div>
                
                <a href={`mailto:${member.email}`} className="link-underlined" style={{ fontSize: '0.85rem' }}>Contact Counsel</a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TeamPage;
