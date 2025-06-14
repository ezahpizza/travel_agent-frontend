
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { getSubscriptionStatus } from '@/services/travelApi';

interface SubscriptionContextType {
  plan: 'basic' | 'paid';
  usageThisMonth: number;
  isLoading: boolean;
  refreshSubscription: () => Promise<void>;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};

export const SubscriptionProvider = ({ children }: { children: React.ReactNode }) => {
  const { userId, isSignedIn } = useAuth();
  const [plan, setPlan] = useState<'basic' | 'paid'>('basic');
  const [usageThisMonth, setUsageThisMonth] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const refreshSubscription = async () => {
    if (!userId || !isSignedIn) {
      console.log('No user ID or not signed in, skipping subscription check');
      return;
    }

    setIsLoading(true);
    try {
      console.log('Fetching subscription status for user:', userId);
      const response = await getSubscriptionStatus(userId);
      console.log('Subscription response:', response);
      
      if (response) {
        setPlan(response.plan || 'basic');
        setUsageThisMonth(response.usage_this_month || 0);
      }
    } catch (error) {
      console.error('Error fetching subscription status:', error);
      // Set defaults on error
      setPlan('basic');
      setUsageThisMonth(0);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSignedIn && userId) {
      console.log('User signed in, refreshing subscription');
      refreshSubscription();
    } else {
      console.log('User not signed in, resetting subscription state');
      setPlan('basic');
      setUsageThisMonth(0);
    }
  }, [isSignedIn, userId]);

  return (
    <SubscriptionContext.Provider
      value={{
        plan,
        usageThisMonth,
        isLoading,
        refreshSubscription,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};
