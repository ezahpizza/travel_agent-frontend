
import { useState } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { createStripeSession } from '@/services/travelApi';
import { useToast } from '@/hooks/use-toast';
import { useSubscription } from '@/contexts/SubscriptionContext';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaywallModal = ({ isOpen, onClose }: PaywallModalProps) => {
  const { userId } = useAuth();
  const { toast } = useToast();
  const { refreshSubscription } = useSubscription();
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white border-4 border-black p-8 max-w-md mx-4">
        <h2 className="text-2xl font-bold text-black mb-4">🚫 Free Plan Limit Reached</h2>
        <p className="text-black mb-6">
          You've reached your free plan limit of 15 API calls this month. 
          Upgrade to Travel Master for unlimited access!
        </p>
        
        <div className="bg-neon-green border-2 border-black p-4 mb-6">
          <h3 className="font-bold text-black mb-2">Travel Master Benefits:</h3>
          <ul className="text-black space-y-1">
            <li>✅ Unlimited API calls</li>
            <li>✅ Priority support</li>
            <li>✅ Advanced features</li>
          </ul>
          <p className="font-bold text-black mt-2">Only $1.99/month</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-300 text-black font-bold py-3 px-4 border-4 border-black hover:bg-gray-400 transition-colors"
          >
            Maybe Later
          </button>
          <button
            onClick={handleUpgrade}
            disabled={isUpgrading}
            className="flex-1 bg-dark-blue text-white font-bold py-3 px-4 border-4 border-black hover:bg-hot-pink hover:text-black transition-colors disabled:opacity-50"
          >
            {isUpgrading ? 'Processing...' : 'Upgrade Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaywallModal;
