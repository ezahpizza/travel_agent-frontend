
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
              <h2 className="text-3xl font-bold text-black mb-4">John Developer</h2>
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
