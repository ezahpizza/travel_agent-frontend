
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
      setTimeout(onLoadingComplete, 500); // Wait for drop animation to complete
    }, 2000); // Show logo for 2 seconds

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div 
        className={`transition-all duration-500 ease-in-out ${
          showLogo 
            ? 'animate-bounce transform scale-100 opacity-100' 
            : 'transform translate-y-full scale-150 opacity-0'
        }`}
      >
        <img 
          src="/navite_logo_neon.webp" 
          alt="navite" 
          className="h-32 w-64 object-contain"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
