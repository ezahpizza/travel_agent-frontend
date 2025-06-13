
const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-flamingo font-syne p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <img src="/navite_logo.webp" alt="navite" className="h-20 w-40 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-black mb-4">Privacy Policy</h1>
          <p className="text-black">Last updated: December 2024</p>
        </div>

        <div className="bg-white border-4 border-black p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Information We Collect</h2>
            <p className="text-black mb-4">We collect information you provide directly to us, such as:</p>
            <ul className="text-black space-y-2 ml-6">
              <li>• Account information (name, email, preferences)</li>
              <li>• Travel search history and preferences</li>
              <li>• Payment and billing information</li>
              <li>• Communications with our support team</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">How We Use Your Information</h2>
            <p className="text-black mb-4">We use the information we collect to:</p>
            <ul className="text-black space-y-2 ml-6">
              <li>• Provide and improve our travel planning services</li>
              <li>• Personalize your experience and recommendations</li>
              <li>• Process payments and manage subscriptions</li>
              <li>• Send service updates and promotional communications</li>
              <li>• Ensure platform security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Information Sharing</h2>
            <p className="text-black mb-4">
              We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="text-black space-y-2 ml-6">
              <li>• With your consent</li>
              <li>• To comply with legal obligations</li>
              <li>• To protect our rights and prevent fraud</li>
              <li>• With service providers who assist our operations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Data Security</h2>
            <p className="text-black">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no internet transmission is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Your Rights</h2>
            <p className="text-black mb-4">You have the right to:</p>
            <ul className="text-black space-y-2 ml-6">
              <li>• Access your personal information</li>
              <li>• Correct inaccurate information</li>
              <li>• Delete your account and data</li>
              <li>• Opt out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
            <p className="text-black">
              If you have questions about this Privacy Policy, please contact us at privacy@navite.com
            </p>
          </section>
        </div>

        <div className="text-center mt-8">
          <a 
            href="/"
            className="bg-dark-blue text-white font-bold text-lg px-8 py-4 border-4 border-black hover:bg-black transition-colors inline-block"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
