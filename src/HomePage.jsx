import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './ServicesSection';
import TrustSection from './TrustSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;

