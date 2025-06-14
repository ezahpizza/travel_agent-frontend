
const TermsPage = () => {
  return (
    <div className="min-h-screen bg-turquoise-darkblue font-syne p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <img src="/navite_logo_white.webp" alt="navite" className="h-20 w-40 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Use</h1>
          <p className="text-white">Last updated: June 2025</p>
        </div>

        <div className="bg-turquoise border-4 border-black p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Acceptance of Terms</h2>
            <p className="text-black">
              By accessing and using Navite, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Use License</h2>
            <p className="text-black mb-4">
              Permission is granted to temporarily use Navite for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="text-black space-y-2 ml-6">
              <li>• Modify or copy the materials</li>
              <li>• Use the materials for commercial purposes</li>
              <li>• Attempt to reverse engineer any software</li>
              <li>• Remove any copyright or proprietary notations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">User Accounts</h2>
            <p className="text-black mb-4">
              When you create an account with us, you must provide accurate and complete information. You are responsible for:
            </p>
            <ul className="text-black space-y-2 ml-6">
              <li>• Safeguarding your password</li>
              <li>• All activities that occur under your account</li>
              <li>• Notifying us of any unauthorized use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Subscription Terms</h2>
            <p className="text-black mb-4">
              Subscription services are billed in advance on a monthly basis and are non-refundable. You may cancel your subscription at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Disclaimer</h2>
            <p className="text-black">
              The materials on Navite are provided on an 'as is' basis. Navite makes no warranties, expressed or implied, 
              and hereby disclaims all other warranties including, without limitation, implied warranties or conditions of merchantability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Limitations</h2>
            <p className="text-black">
              In no event shall Navite or its suppliers be liable for any damages arising out of the use or inability to use the materials on Navite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Governing Law</h2>
            <p className="text-black">
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts.
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

export default TermsPage;
