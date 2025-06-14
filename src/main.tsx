
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.tsx'
import './index.css'
import { SubscriptionProvider } from './contexts/SubscriptionContext'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById("root")!).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}
      clerkJSVersion="5.56.0-snapshot.v20250312225817"

      appearance={{
            layout: {
              unsafe_disableDevelopmentModeWarnings: true,
            },
      }}>
    <SubscriptionProvider>
      <App />
    </SubscriptionProvider>
  </ClerkProvider>
);
