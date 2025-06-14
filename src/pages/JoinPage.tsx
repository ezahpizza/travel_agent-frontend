
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import GlobalNavbar from '@/components/GlobalNavbar';

const JoinPage = () => {
  const plans = [
    {
      name: 'Basic Explorer',
      priceINR: '₹0',
      priceUSD: '$0',
      features: [
        '5 flight searches per month',
        'Basic destination research',
        'Standard hotel recommendations',
        'Email support'
      ],
      color: 'bg-neon-green'
    },

    {
      name: 'Travel Master',
      priceINR: '₹20',
      priceUSD: '$1.99',
      features: [
        'Unlimited flight searches',
        'AI-powered travel insights',
        'Exclusive venue recommendations',
        'Advanced itinerary customization',
        '24/7 premium support',
      ],
      color: 'bg-brut-orange'
    }
  ];

  return (
    <div className="min-h-screen bg-brut-violet font-syne">
      <SignedOut>
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white border-4 border-black p-8 text-center">
            <h1 className="text-3xl font-bold text-black mb-6">Join Navite</h1>
            <p className="text-lg text-black mb-8">Sign in to choose your subscription plan</p>
            <SignInButton>
              <button className="bg-dark-blue text-white font-bold text-lg px-8 py-4 border-4 border-black hover:bg-hot-pink hover:text-black transition-colors">
                Sign In
              </button>
            </SignInButton>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <GlobalNavbar />
        
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-black mb-4">Choose Your Adventure</h1>
              <p className="text-xl text-black">Unlock the perfect travel experience with our subscription plans</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className={`${plan.color} border-4 border-black p-6 relative`}>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                    <div className="flex justify-center items-center gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-black">{plan.priceINR}</p>
                        <p className="text-sm text-black">per month</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-black">{plan.priceUSD}</p>
                        <p className="text-sm text-black">per month</p>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-black">
                        <span className="mr-2">✈️</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {plan.name !== 'Basic Explorer' && (
                      <button className="w-full bg-dark-blue text-white font-bold py-4 px-6 border-4 border-black hover:bg-black transition-colors">
                        Choose Plan
                      </button>
                    )}

                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-black mb-4">All plans include a 7-day free trial</p>
              <p className="text-black">Cancel anytime. No hidden fees.</p>
            </div>
          </div>
        </div>
      </SignedIn>
    </div>
  );
};

export default JoinPage;
