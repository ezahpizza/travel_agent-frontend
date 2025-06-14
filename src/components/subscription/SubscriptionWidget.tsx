
import { useSubscription } from '@/contexts/SubscriptionContext';
import { useAuth } from '@clerk/clerk-react';
import { useState } from 'react';
import { createStripeSession } from '@/services/travelApi';
import { useToast } from '@/hooks/use-toast';

const SubscriptionWidget = () => {
  const { plan, usageThisMonth, isLoading, refreshSubscription } = useSubscription();
  const { userId } = useAuth();
  const { toast } = useToast();
  const [isUpgrading, setIsUpgrading] = useState(false);

  const handleUpgrade = async () => {
    if (!userId) return;

    setIsUpgrading(true);
    try {
      const currentUrl = window.location.origin;
      console.log('Creating Stripe session for user:', userId);
      const sessionResponse = await createStripeSession({
        userId,
        successUrl: `${currentUrl}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${currentUrl}/payment-cancel`,
      });
      
      console.log('Stripe session response:', sessionResponse);
      
      // Check if we have a session object with a URL
      if (!sessionResponse.session || !sessionResponse.session.url) {
        console.error('Invalid session response structure:', sessionResponse);
        throw new Error('Invalid payment session response');
      }

      // Redirect to Stripe Checkout
      window.location.href = sessionResponse.session.url;
    } catch (error) {
      console.error('Upgrade error:', error);
      toast({
        title: "Upgrade Failed",
        description: "Unable to process upgrade. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUpgrading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white border-4 border-black p-4">
        <p className="text-black font-bold">Loading subscription status...</p>
      </div>
    );
  }

  return (
    <div className="bg-white border-4 border-black p-6 mb-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-black mb-2">
            {plan === 'paid' ? '🌟 Travel Master' : '🆓 Basic Explorer'}
          </h3>
          {plan === 'basic' ? (
            <div className="space-y-2">
              <p className="text-black">
                <span className="font-bold">{usageThisMonth}/15</span> API calls used this month
              </p>
              <div className="w-full bg-gray-200 border-2 border-black h-4">
                <div 
                  className="bg-hot-pink h-full border-r-2 border-black transition-all"
                  style={{ width: `${Math.min((usageThisMonth / 15) * 100, 100)}%` }}
                />
              </div>
              {usageThisMonth >= 15 && (
                <p className="text-red-600 font-bold">⚠️ Monthly limit reached!</p>
              )}
            </div>
          ) : (
            <p className="text-green-600 font-bold">✅ Unlimited access active</p>
          )}
        </div>
        
        {plan === 'basic' && (
          <button
            onClick={handleUpgrade}
            disabled={isUpgrading}
            className="bg-dark-blue text-white font-bold px-6 py-3 border-4 border-black hover:bg-hot-pink hover:text-black transition-colors disabled:opacity-50"
          >
            {isUpgrading ? 'Processing...' : 'Upgrade Now'}
          </button>
        )}
      </div>
    </div>
  );
};

export default SubscriptionWidget;
