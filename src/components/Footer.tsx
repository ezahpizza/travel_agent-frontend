
const Footer = () => {
  const companyLinks = [
    { name: 'About us', color: 'bg-dark-blue text-white' },
    { name: 'Meet the dev', color: 'bg-dark-blue text-white' },
    { name: 'Contact us', color: 'bg-dark-blue text-white' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', color: 'bg-brutalist-purple text-white' },
    { name: 'Terms of Use', color: 'bg-hot-pink text-black' }
  ];

  return (
    <section className="bg-white border-4 border-black p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="font-syne font-bold text-2xl text-black mb-8 text-left">
          Look around,
        </h3>
        
        <div className="bg-brutalist-orange border-4 border-black p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Logo */}
            <div className="flex items-center">
              <div className="font-syne font-bold text-3xl text-black border-4 border-black bg-white px-4 py-2">
                navite
              </div>
            </div>
            
            {/* Company stuff */}
            <div className="text-left">
              <h4 className="font-syne font-bold text-xl text-black mb-4">
                Company stuff
              </h4>
              <div className="space-y-3">
                {companyLinks.map((link, index) => (
                  <button
                    key={index}
                    className={`block w-full text-left font-syne font-semibold py-2 px-4 border-2 border-black ${link.color} hover:scale-105 transition-transform`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Legal stuff */}
            <div className="text-left">
              <h4 className="font-syne font-bold text-xl text-black mb-4">
                Legal stuff
              </h4>
              <div className="space-y-3">
                {legalLinks.map((link, index) => (
                  <button
                    key={index}
                    className={`block w-full text-left font-syne font-semibold py-2 px-4 border-2 border-black ${link.color} hover:scale-105 transition-transform`}
                  >
                    {link.name}
                  </button>
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
