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
                src="/Prateek-Mohapatra.webp" 
                alt="Developer" 
                className="w-64 h-64 border-4 border-black object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-black mb-4">Prateek Mohapatra</h2>
              <p className="text-black text-lg leading-relaxed mb-6">
                      Part full-stack engineer, part machine learning whisperer, and full-time caffeine-drowned code sorcerer, I'm the creator of Navite, your AI-powered travel planner that's smarter than your average itinerary. I tend (try) to live at the intersection of AI and intuitive user experiences. </p>
              <p className="text-black text-lg leading-relaxed mb-6">

                      Currently a B.Tech CSE student at ITER, SOA University (with a GPA so high it practically auto-deploys itself), I've built and scaled everything from mental health assistants to fuzzy decision trees (yes, they exist — and yes, I helped invent one).
             </p>
              <p className="text-black text-lg leading-relaxed mb-6">

                      I've trained models, tested limits, pushed pixels, and probably broken a few keyboards along the way — but hey, that's just the cost of innovation. If you're ever wondering where tech meets creativity, and Python meets a passport, that's where you'll find me — building the future, one API call at a time.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-turquoise border-4 border-black p-8">
            <h2 className="text-2xl font-bold text-black mb-4">My Mission</h2>
            <p className="text-black text-lg leading-relaxed">
              To engineer intelligent, human-centric systems that bridge real-world needs with the power of AI — crafting tools that not only solve problems, but make technology feel intuitive, accessible, and just a little bit magical.
              I believe that the journey begins with the planning, and it should be just as exciting as the destination itself.
            </p>
          </div>

          <div className="bg-hot-pink border-4 border-black p-8">
            <h2 className="text-2xl font-bold text-black mb-4">My Vision</h2>
            <p className="text-black text-lg leading-relaxed mb-4">
              To shape a future where AI doesn't just automate — it empowers. Where technology becomes a seamless co-pilot in everyday life, helping people make smarter decisions, travel further, and live more meaningfully through intelligent, beautifully integrated systems.
            </p>
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
                      <li>• Streamlit (AI Prototypes)</li>
                      <li>• Responsive UI/UX Design</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Backend</h3>
                    <ul className="text-black space-y-1">
                      <li>• Python (FastAPI, Flask)</li>
                      <li>• AI/ML Integration (PyTorch, Transformers)</li>
                      <li>• Database Design (MongoDB, PostgreSQL)</li>
                      <li>• CI/CD (Docker, GitHub Actions)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-bold text-black mb-2">Specialized Skills</h3>
                  <ul className="text-black space-y-1">
                    <li>• Large Language Models & LangChain</li>
                    <li>• MLOps & Model Deployment</li>
                    <li>• Web Scraping & ETL Pipelines</li>
                    <li>• Big Data (PySpark, Kafka)</li>
                  </ul>
                </div>
              </div>

          <div className="bg-brut-green border-4 border-black p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-black mb-6">Connect with me on:</h2>
            <div className="flex flex-row gap-8">
              {/* Portfolio Icon */}
              <a href="https://prateek-mohapatra.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bg-lemon-yellow rounded-lg p-2 border-2 border-black">
                  <rect x="3" y="7" width="18" height="13" rx="2"/>
                  <path d="M16 3v4"/>
                  <path d="M8 3v4"/>
                </svg>
              </a>
              {/* GitHub Icon */}
              <a href="https://github.com/ezahpizza" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="black" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bg-white rounded-lg p-2 border-2 border-black">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
                </svg>
              </a>
              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/in/prateekmp/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#0077B5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bg-white rounded-lg p-2 border-2 border-black">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M7 10v7"/>
                  <circle cx="7" cy="7" r="1.5"/>
                  <path d="M10 17v-4a2 2 0 0 1 4 0v4"/>
                  <path d="M14 13v4"/>
                </svg>
              </a>
              {/* Email Icon */}
              <a href="mailto:prateekmsoa@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bg-white rounded-lg p-2 border-2 border-black">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <polyline points="3 7 12 13 21 7"/>
                </svg>
              </a>
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
