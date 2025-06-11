
const HeroSection = () => {
    return (
        <section className="bg-hot-pink border-4 border-black p-6 pt-12 md:p-12 mx-4 md:mx-8 min-h-[85vh] flex items-center">
            <div className="max-w-7xl mx-auto grid md:grid-cols-[1.45fr_0.55fr] gap-6 md:gap-8 items-center w-full">
                {/* Left content */}
                <div className="space-y-8 md:space-y-12 text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                       Be the carefree friend on a random Tuesday morning.
                    </h1>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-blue mt-4">
                        Leave the planning to our agent.
                    </p>

                    <button className="bg-dark-blue text-neon-green font-bold text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 border-4 border-black hover:bg-neon-green hover:text-dark-blue transition-colors">
                      Get Started
                    </button>
                </div>

                {/* Right illustration */}
                <div className="flex justify-center md:justify-end pr-0 md:pr-2">
                    <img
                      src="/hero_image.webp"
                      alt="Beach Vibes Illustration"
                      className="w-full max-w-sm md:max-w-none h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
