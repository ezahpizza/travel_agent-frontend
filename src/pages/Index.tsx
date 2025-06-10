
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SubheadingSection from '@/components/SubheadingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-syne">
      {/* Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Navigation />
      </div>
      
      {/* Main content */}
      <main className="pt-20">
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
