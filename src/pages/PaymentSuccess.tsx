
import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { useSearchParams, Link } from 'react-router-dom';
import { verifyStripePayment } from '@/services/travelApi';
import { useSubscription } from '@/contexts/SubscriptionContext';
import { useToast } from '@/hooks/use-toast';
import GlobalNavbar from '@/components/GlobalNavbar';

const PaymentSuccess = () => {
  const { userId } = useAuth();
  const [searchParams] = useSearchParams();
  const { refreshSubscription } = useSubscription();
  const { toast } = useToast();
  const [isVerifying, setIsVerifying] = useState(true);
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  useEffect(() => {
    const verifyPayment = async () => {
      const sessionId = searchParams.get('session_id');
      
      if (!sessionId || !userId) {
        setIsVerifying(false);
        return;
      }

      try {
        const response = await verifyStripePayment({
          userId,
          sessionId,
        });

        if (response.success) {
          setVerificationSuccess(true);
          await refreshSubscription();
          toast({
            title: "Payment Successful!",
            description: "Welcome to Travel Master! Your subscription is now active.",
          });
        } else {
          throw new Error('Payment verification failed');
        }
      } catch (error) {
        console.error('Payment verification error:', error);
        toast({
          title: "Payment Verification Failed",
          description: "Please contact support if payment was processed.",
          variant: "destructive",
        });
      } finally {
        setIsVerifying(false);
      }
    };

    verifyPayment();
  }, [searchParams, userId, refreshSubscription, toast]);

  return (
    <div className="min-h-screen bg-hot-pink font-syne">
      <GlobalNavbar />
      
      <div className="p-8 flex items-center justify-center">
        <div className="bg-white border-4 border-black p-8 max-w-md text-center">
          {isVerifying ? (
            <>
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-dark-blue border-t-transparent mx-auto mb-4"></div>
              <h1 className="text-2xl font-bold text-black mb-4">Verifying Payment...</h1>
              <p className="text-black">Please wait while we confirm your payment.</p>
            </>
          ) : verificationSuccess ? (
            <>
              <div className="text-6xl mb-4">🎉</div>
              <h1 className="text-2xl font-bold text-black mb-4">Payment Successful!</h1>
              <p className="text-black mb-6">
                Welcome to Travel Master! Your subscription is now active and you have unlimited access to all features.
              </p>
              <Link 
                to="/profile"
                className="bg-dark-blue text-white font-bold px-6 py-3 border-4 border-black hover:bg-hot-pink hover:text-black transition-colors inline-block"
              >
                Go to Profile
              </Link>
            </>
          ) : (
            <>
              <div className="text-6xl mb-4">❌</div>
              <h1 className="text-2xl font-bold text-black mb-4">Payment Verification Failed</h1>
              <p className="text-black mb-6">
                We couldn't verify your payment. If money was deducted, please contact support.
              </p>
              <Link 
                to="/profile"
                className="bg-dark-blue text-white font-bold px-6 py-3 border-4 border-black hover:bg-hot-pink hover:text-black transition-colors inline-block"
              >
                Back to Profile
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
