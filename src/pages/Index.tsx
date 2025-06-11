
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SubheadingSection from '@/components/SubheadingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-neon-green font-syne">
        <div className="top-4 left-4 z-50 px-4 py-2">
          <img src="/navite_logo.webp" alt="navite" className="h-16 w-32" />
        </div>

        <div className="fixed top-20 left-4 z-50">
          <Navigation />
        </div>
      
      {/* Main content */}
      <main >
        <HeroSection />
        <SubheadingSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
