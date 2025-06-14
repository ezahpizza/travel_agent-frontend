
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SubheadingSection from '@/components/SubheadingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-turquoise font-syne">
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
