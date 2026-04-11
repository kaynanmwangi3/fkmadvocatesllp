import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './Footer';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = [
    'All',
    'Civil Defense Law',
    'Litigation Strategy',
    'Legal Insights',
    'Case Studies',
    'Jurisprudence',
    'Client Guides'
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Medicaid Asset Protection Trust (MAPT): Estate Planning for Long-Term Care",
      summary: "Explore how MAPTs can protect your assets while ensuring eligibility for Medicaid benefits.",
      author: "Sarah Kimani",
      date: "Dec 15, 2024",
      category: "Legal Insights",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&auto=format&q=80"
    },
    {
      id: 2,
      title: "How Probate in Kenya Works: Frequently Asked Questions About Probate",
      summary: "Understanding the probate process in Kenya is crucial for estate administration.",
      author: "John Mwangi",
      date: "Dec 10, 2024",
      category: "Client Guides",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&auto=format&q=80"
    },
    {
      id: 3,
      title: "Choosing Between a Will and a Trust in Kenya",
      summary: "Navigate the decision between wills and trusts with our expert analysis.",
      author: "David Ochieng",
      date: "Dec 8, 2024",
      category: "Legal Insights",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&auto=format&q=80"
    },
    {
      id: 4,
      title: "Business Formation in Kenya: LLC vs Corporation",
      summary: "A detailed comparison of business entity structures in Kenya legal framework.",
      author: "Grace Wanjiku",
      date: "Dec 5, 2024",
      category: "Case Studies",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&auto=format&q=80"
    },
    {
      id: 5,
      title: "Real Estate Law: Understanding Property Rights in Kenya",
      summary: "Comprehensive overview of property rights, land tenure systems, and real estate.",
      author: "Sarah Kimani",
      date: "Dec 1, 2024",
      category: "Legal Insights",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&auto=format&q=80"
    },
    {
      id: 6,
      title: "Civil Litigation: What to Expect During Your Case",
      summary: "Prepare for your civil litigation journey with our step-by-step professional guide.",
      author: "John Mwangi",
      date: "Nov 28, 2024",
      category: "Litigation Strategy",
      image: "https://images.unsplash.com/photo-1589216532372-3c2d0c3b7e7b?w=600&h=400&fit=crop&auto=format&q=80"
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const currentPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      <Header />
      
      {/* Cinematic Hero */}
      <section style={{ 
        padding: window.innerWidth < 768 ? '8rem 1rem 4rem' : '12rem 2rem 6rem',
        textAlign: 'center',
        background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <span style={{ color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.8rem', marginBottom: '1rem', display: 'block' }}>Insights</span>
          <h1 style={{ fontSize: window.innerWidth < 768 ? '2.5rem' : '4rem', fontWeight: 400, marginBottom: '1.5rem', lineHeight: '1.1' }}>Legal Intelligence</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Expert commentary and strategic guidance from the frontier of Kenyan jurisprudence.
          </p>
        </motion.div>
      </section>

      {/* Category Navigation - Fix: Horizontal Scrollable */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1rem',
        marginBottom: '4rem'
      }}>
        <div style={{ 
          display: 'flex', 
          gap: '2rem', 
          overflowX: 'auto', 
          paddingBottom: '1.5rem', 
          borderBottom: '1px solid var(--glass-border)',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }} className="no-scrollbar">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
              style={{
                background: 'none',
                border: 'none',
                color: selectedCategory === cat ? 'var(--accent-purple)' : 'var(--text-secondary)',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                transition: 'color 0.3s ease',
                fontWeight: selectedCategory === cat ? '600' : '400',
                padding: '0.5rem 0'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid - Fix: Responsive sizing */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1rem 10rem',
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))', 
          gap: '2.5rem',
          width: '100%'
        }}>
          <AnimatePresence mode="popLayout">
            {currentPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card"
                style={{ 
                  padding: '0', 
                  overflow: 'hidden', 
                  display: 'flex', 
                  flexDirection: 'column',
                  height: '100%',
                  border: '1px solid var(--glass-border)',
                  background: 'var(--bg-secondary)'
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <motion.img 
                    src={post.image} 
                    alt={post.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ color: 'var(--accent-purple)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>{post.category}</span>
                  <h2 style={{ 
                    fontSize: '1.4rem', 
                    fontWeight: 500, 
                    margin: '1.2rem 0 1rem', 
                    lineHeight: '1.4',
                    color: 'var(--text-primary)',
                    minHeight: '3.5rem'
                  }}>{post.title}</h2>
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    fontSize: '0.95rem', 
                    lineHeight: '1.6', 
                    marginBottom: '2rem',
                    flex: 1
                  }}>{post.summary}</p>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    paddingTop: '1.5rem',
                    borderTop: '1px solid var(--glass-border)' 
                  }}>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>{post.date}</span>
                    <a href="#" className="link-underlined" style={{ color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: 500 }}>Read Analysis</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '5rem 0' }}>
            <p style={{ color: 'var(--text-secondary)' }}>No articles found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
      
      {/* Global CSS for hiding scrollbars but keeping functionality */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;
