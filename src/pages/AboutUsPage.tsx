import React, { useEffect } from 'react';

useEffect(() => {
    window.scrollTo(0, 0);
}, []);

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-turquoise-darkblue font-syne p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <img src="/navite_logo_white.webp" alt="navite" className="h-20 w-40 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-turquoise mb-4">About Navite</h1>
        </div>

        <div className="space-y-8">
          <div className="bg-hot-pink border-4 border-black p-8">
            <h2 className="text-2xl font-bold text-black mb-4">Our Mission</h2>
            <p className="text-black text-lg leading-relaxed">
              At Navite, we believe that travel should be accessible, personalized, and stress-free. Our mission is to democratize travel planning by providing AI-powered tools that help every traveler create their perfect journey, regardless of their experience or budget.
            </p>
          </div>

          <div className="bg-lemon-yellow border-4 border-black p-8">
            <h2 className="text-2xl font-bold text-black mb-4">Our Vision</h2>
            <p className="text-black text-lg leading-relaxed">
              We envision a world where planning the perfect trip is as exciting as the journey itself. Through innovative technology and user-centric design, we aim to become the global leader in intelligent travel planning solutions.
            </p>
          </div>

          <div className="bg-brut-orange border-4 border-black p-8">
            <h2 className="text-2xl font-bold text-black mb-4">Our Inspiration</h2>
            <p className="text-black text-lg leading-relaxed">
              Born from the frustration of endless hours spent researching flights, hotels, and activities across multiple platforms, Navite was created to consolidate and simplify the entire travel planning process into one intelligent, user-friendly platform.
            </p>
          </div>

          <div className="bg-flamingo border-4 border-black p-8">
            <h2 className="text-2xl font-bold text-black mb-4">Our Goals</h2>
            <ul className="text-black text-lg space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-2xl">🎯</span>
                <span>Simplify travel planning through AI-powered recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-2xl">🌍</span>
                <span>Make travel accessible to everyone, everywhere</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-2xl">💡</span>
                <span>Continuously innovate to enhance user experience</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-2xl">🤝</span>
                <span>Build a community of passionate travelers</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <a 
              href="/"
              className="bg-dark-blue text-white font-bold text-lg px-8 py-4 border-4 border-black hover:bg-brut-violet transition-colors inline-block"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
