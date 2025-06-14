
import { Link } from 'react-router-dom';
import GlobalNavbar from '@/components/GlobalNavbar';

const PaymentCancel = () => {
  return (
    <div className="min-h-screen bg-hot-pink font-syne">
      <GlobalNavbar />
      
      <div className="p-8 flex items-center justify-center">
        <div className="bg-white border-4 border-black p-8 max-w-md text-center">
          <div className="text-6xl mb-4">💳</div>
          <h1 className="text-2xl font-bold text-black mb-4">Payment Cancelled</h1>
          <p className="text-black mb-6">
            Your payment was cancelled. No charges have been made to your account.
          </p>
          <div className="space-y-4">
            <Link 
              to="/profile"
              className="block bg-dark-blue text-white font-bold px-6 py-3 border-4 border-black hover:bg-hot-pink hover:text-black transition-colors"
            >
              Back to Profile
            </Link>
            <Link 
              to="/join"
              className="block bg-neon-green text-black font-bold px-6 py-3 border-4 border-black hover:bg-dark-blue hover:text-white transition-colors"
            >
              Try Again
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;
