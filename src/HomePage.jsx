import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './ServicesSection';
import TrustSection from './TrustSection';
import TeamSection from './TeamSection';
import ClientsSection from './ClientsSection';
import ContactSection from './ContactSection';
import BlogSection from './BlogSection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <TeamSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;

