
const MeetTheDevPage = () => {
  return (
    <div className="min-h-screen bg-brut-purple font-syne p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <img src="/navite_logo_white.webp" alt="navite" className="h-20 w-40 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">Meet the Developer</h1>
        </div>

        <div className="bg-white border-4 border-black p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                alt="Developer" 
                className="w-64 h-64 border-4 border-black object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-black mb-4">John Developer</h2>
              <p className="text-black text-lg leading-relaxed mb-6">
                A passionate full-stack developer with a love for travel and technology. With over 5 years of experience 
                in building user-centric applications, I created Navite to solve the travel planning problems I faced as 
                a frequent traveler.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-neon-green border-4 border-black p-8">
            <h2 className="text-2xl font-bold text-black mb-4">My Mission</h2>
            <p className="text-black text-lg leading-relaxed">
              To leverage cutting-edge AI technology to make travel planning effortless and enjoyable for everyone. 
              I believe that the journey begins with the planning, and it should be just as exciting as the destination itself.
            </p>
          </div>

          <div className="bg-hot-pink border-4 border-black p-8">
            <h2 className="text-2xl font-bold text-black mb-4">My Vision</h2>
            <p className="text-black text-lg leading-relaxed">
              To build a platform that not only simplifies travel planning but also inspires people to explore new destinations 
              and create unforgettable memories. I envision Navite becoming the go-to platform for intelligent travel solutions worldwide.
            </p>
          </div>

          <div className="bg-lemon-yellow border-4 border-black p-8">
            <h2 className="text-2xl font-bold text-black mb-4">Tech Stack & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-black mb-2">Frontend</h3>
                <ul className="text-black space-y-1">
                  <li>• React & TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Modern UI/UX Design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">Backend</h3>
                <ul className="text-black space-y-1">
                  <li>• Python & FastAPI</li>
                  <li>• AI/ML Integration</li>
                  <li>• Database Design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="/"
              className="bg-white text-black font-bold text-lg px-8 py-4 border-4 border-black hover:bg-neon-cyan transition-colors inline-block"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheDevPage;
