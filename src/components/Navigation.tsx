
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SignInButton, SignUpButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isSignedIn } = useUser();

    const navItems = [
        { name: 'Plan', color: 'bg-brut-green', path: '/travel' },
        { name: 'Join', color: 'bg-brut-green', path: '/join' },
    ];

    return (
        <nav className="relative">
            <div className="flex items-center gap-4"> 
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`font-syne font-bold text-black border-4 border-black px-3 py-2 bg-white hover:bg-neon-green transition-all duration-300 ${
                    isMenuOpen ? 'hidden md:block md:translate-x-96' : ''
                  }`}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            
            <div className={`fixed top-4 left-4 bg-dark-blue border-4 border-black transition-transform duration-300 z-40 ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } h-[calc(100vh-2rem)] w-96 max-w-[90vw] md:max-w-sm`}>
                <div className="p-6 md:p-8 space-y-6 h-full flex flex-col justify-center">
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="md:hidden absolute top-4 right-4 font-syne font-bold text-white border-2 border-white px-2 py-1 bg-transparent hover:bg-white hover:text-dark-blue transition-all duration-300"
                    >
                      <X size={20} />
                    </button>
                  
                    <img src="/navite_logo_neon.webp"
                      alt="navite"
                      className="h-12 w-24 md:h-16 md:w-32 object-contain"/>  
                    
                    {navItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className={`w-full text-left font-syne font-semibold py-3 md:py-4 px-4 md:px-6 border-2 border-black ${item.color} hover:scale-105 transition-transform text-lg md:text-xl block`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}

                    {!isSignedIn ? (
                      <>
                        <SignInButton mode="modal">
                          <button
                            className="w-full text-left font-syne font-semibold py-3 md:py-4 px-4 md:px-6 border-2 border-black bg-black text-hot-pink hover:scale-105 transition-transform text-lg md:text-xl"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Sign in
                          </button>
                        </SignInButton>
                        
                        <SignUpButton mode="modal">
                          <button
                            className="w-full text-left font-syne font-semibold py-3 md:py-4 px-4 md:px-6 border-2 border-black bg-hot-pink text-black hover:scale-105 transition-transform text-lg md:text-xl"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Sign up
                          </button>
                        </SignUpButton>
                      </>
                    ) : (
                      <Link
                        to="/profile"
                        className="w-full text-left font-syne font-semibold py-3 md:py-4 px-4 md:px-6 border-2 border-black bg-brut-orange text-black hover:scale-105 transition-transform text-lg md:text-xl block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Profile
                      </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
