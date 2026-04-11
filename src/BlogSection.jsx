import { motion } from 'framer-motion';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Medicaid Asset Protection Trust (MAPT): Estate Planning for Long-Term Care",
      author: "Sarah Kimani",
      date: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&auto=format&q=80"
    },
    {
      id: 2,
      title: "How Probate in Kenya Works: Frequently Asked Questions About Probate",
      author: "John Mwangi",
      date: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&auto=format&q=80"
    },
    {
      id: 3,
      title: "Choosing Between a Will and a Trust in Kenya",
      author: "David Ochieng",
      date: "Dec 8, 2024",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&auto=format&q=80"
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
          style={{ marginBottom: '5rem' }}
        >
          <span style={{ 
            color: 'var(--accent-purple)', 
            textTransform: 'uppercase', 
            letterSpacing: '0.3em',
            fontSize: '0.8rem',
            fontWeight: 600,
            display: 'block',
            marginBottom: '1rem'
          }}>Legal Insights</span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 400 }}>Expert Analysis</h2>
            <a href="#" className="link-underlined" style={{ color: 'var(--text-primary)', paddingBottom: '0.5rem' }}>View All Insights</a>
          </div>
        </motion.div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '3rem' 
        }}>
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card"
              style={{ padding: '0', overflow: 'hidden', height: '100%' }}
            >
              <div style={{ height: '250px', overflow: 'hidden', position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, var(--bg-primary), transparent)',
                  zIndex: 1
                }} />
                <motion.img 
                  src={post.image} 
                  alt={post.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', brightness: '0.9' }}
                  whileHover={{ scale: 1.1, brightness: '1' }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem', fontSize: '0.8rem', color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  <span>{post.author}</span>
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
                  <span>{post.date}</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 500, lineHeight: '1.4', color: 'var(--text-primary)' }}>{post.title}</h3>
                
                <motion.div 
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  style={{ height: '1px', background: 'var(--accent-purple)', marginTop: '2rem' }}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
