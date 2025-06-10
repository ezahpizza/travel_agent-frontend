
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Plan', color: 'bg-brutalist-green' },
    { name: 'Join', color: 'bg-brutalist-green' },
    { name: 'Sign in', color: 'bg-black text-hot-pink' },
    { name: 'Sign up', color: 'bg-hot-pink text-black' }
  ];

  return (
    <nav className="relative">
      {/* Logo and Hamburger */}
      <div className="flex items-center gap-4">
        {/* Logo placeholder - fixed position */}
        <div className="font-syne font-bold text-2xl text-black border-4 border-black px-4 py-2 bg-white">
          <img src="/placeholder.svg" alt="navite" className="h-6 w-auto" />
        </div>
        
        {/* Hamburger menu button - positioned to stick with nav on desktop */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`font-syne font-bold text-black border-4 border-black px-3 py-2 bg-white hover:bg-neon-green transition-all duration-300 ${
            isMenuOpen ? 'hidden md:block md:translate-x-80' : ''
          }`}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Navigation panel that slides from left */}
      <div className={`fixed top-4 left-4 bg-dark-blue border-4 border-black h-[calc(100vh-2rem)] w-80 max-w-sm transition-transform duration-300 z-40 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-8 space-y-6 h-full flex flex-col justify-center">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`w-full text-left font-syne font-semibold py-4 px-6 border-2 border-black ${item.color} hover:scale-105 transition-transform text-xl`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
