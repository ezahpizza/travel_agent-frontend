import { Link } from 'react-router-dom';

const Footer = () => {
  const companyLinks = [
      { name: 'About us', color: 'bg-dark-blue text-white', path: '/about' },
      { name: 'Meet the dev', color: 'bg-dark-blue text-white', path: '/meet-dev' },
      { name: 'Contact us', color: 'bg-dark-blue text-white', path: '/contact' }
  ];

  const legalLinks = [
      { name: 'Privacy Policy', color: 'bg-brut-purple text-white', path: '/privacy' },
      { name: 'Terms of Use', color: 'bg-hot-pink text-black', path: '/terms' }
  ];

  return (
      <section className="p-4 md:p-6 mx-2 md:mx-4">
          <div className="max-w-9xl mx-auto">
              <h3 className="font-bold text-xl md:text-2xl text-black mb-6 md:mb-8 text-left">
                  Look around,
              </h3>
            
              <div className="bg-brut-orange border-4 border-black p-4 md:p-6 lg:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {/* Logo */}
                      <div className="flex items-center justify-center md:justify-start">
                          <div className="px-2 md:px-4 py-2">
                             <img src="/navite_logo.webp" alt="navite" className="h-12 w-24 md:h-16 md:w-32" />
                          </div>
                      </div>
                    
                    {/* Company stuff */}
                    <div className="text-left">
                        <h4 className="font-bold text-lg md:text-xl text-black mb-3 md:mb-4">
                            Company stuff
                        </h4>
                        <div className="space-y-2 md:space-y-3">
                          {companyLinks.map((link, index) => (
                              <Link
                                key={index}
                                to={link.path}
                                className={`block w-full text-left font-semibold py-2 px-3 md:px-4 border-2 border-black ${link.color} hover:scale-105 transition-transform text-sm md:text-base`}
                              >
                                {link.name}
                              </Link>
                          ))}
                        </div>
                    </div>
                    
                    {/* Legal stuff */}
                    <div className="text-left">
                        <h4 className="font-bold text-lg md:text-xl text-black mb-3 md:mb-4">
                            Legal stuff
                        </h4>
                        <div className="space-y-2 md:space-y-3">
                          {legalLinks.map((link, index) => (
                              <Link
                                key={index}
                                to={link.path}
                                className={`block w-full text-left font-semibold py-2 px-3 md:px-4 border-2 border-black ${link.color} hover:scale-105 transition-transform text-sm md:text-base`}
                              >
                                {link.name}
                              </Link>
                          ))}
                        </div>
                    </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Footer;
