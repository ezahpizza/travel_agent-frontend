
const HeroSection = () => {
  return (
    <section className="bg-hot-pink border-4 border-black p-8 md:p-12 mx-4 md:mx-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left content */}
        <div className="space-y-6 text-left">
          <div className="font-syne">
            <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
              Be the carefree friend on a random Tuesday morning.
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-dark-blue mt-4">
              Leave the planning to our agents.
            </p>
          </div>
          
          <button className="bg-white text-black font-syne font-bold text-xl px-8 py-4 border-4 border-black hover:bg-neon-green transition-colors">
            Get Started
          </button>
        </div>
        
        {/* Right illustration placeholder */}
        <div className="bg-white border-4 border-black p-8 h-80 flex items-center justify-center">
          <div className="text-center">
            <div className="bg-neon-green border-2 border-black p-4 mb-4 inline-block">
              🏝️
            </div>
            <p className="font-syne font-semibold text-black">
              Beach Vibes Illustration
              <br />
              (Person with laptop)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
