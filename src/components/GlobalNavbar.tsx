
import { Link, useLocation } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';

const GlobalNavbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Plan', path: '/travel', color: 'bg-brut-green' },
    { name: 'Join', path: '/join', color: 'bg-hot-pink' },
    { name: 'Profile', path: '/profile', color: 'bg-dark-blue text-white' }
  ];

  return (
    <nav className="bg-lemon-yellow border-4 border-black p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link to="/">
            <img src="/navite_logo.webp" alt="navite" className="h-12 w-24" />
          </Link>
          <div className="flex gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-bold px-4 py-2 border-4 border-black transition-all hover:scale-105 ${
                  location.pathname === item.path 
                    ? 'bg-dark-blue text-white' 
                    : item.color
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <UserButton />
      </div>
    </nav>
  );
};

export default GlobalNavbar;
