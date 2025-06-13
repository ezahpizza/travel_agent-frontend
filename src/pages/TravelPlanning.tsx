import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import PreferencesSection from '@/components/travel/PreferencesSection';
import TripDetailsSection from '@/components/travel/TripDetailsSection';
import MainSection from '@/components/travel/MainSection';
import GlobalNavbar from '@/components/GlobalNavbar';
import { useState } from 'react';

export interface TravelPreferences {
    sourceCity: string;
    sourceIATA: string;
    destinationCity: string;
    destinationIATA: string;
    departureDate: Date | null;
    returnDate: Date | null;
    theme: string;
    duration: number;
    budget: string;
    flightClass: string;
    visaRequired: boolean;
    insuranceRequired: boolean;
    activities: string;
}

const TravelPlanning = () => {
    const [preferences, setPreferences] = useState<TravelPreferences>({
        sourceCity: '',
        sourceIATA: '',
        destinationCity: '',
        destinationIATA: '',
        departureDate: null,
        returnDate: null,
        theme: 'Adventure',
        duration: 7,
        budget: 'Standard',
        flightClass: 'Economy',
        visaRequired: false,
        insuranceRequired: false,
        activities: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleGeneratePlan = () => {
        // Basic validation
        if (!preferences.sourceIATA || !preferences.destinationIATA || !preferences.departureDate || !preferences.activities.trim()) {
            console.log('Missing required fields');
            return;
        }

        setIsSubmitted(true);
    };

    const handlePreferencesSubmit = (prefs: TravelPreferences) => {
        setPreferences(prefs);
    };

    return (
        <div className="min-h-screen bg-hot-pink font-syne">
            <SignedOut>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="bg-white border-4 border-black p-8 text-center">
                        <h1 className="text-3xl font-bold text-black mb-6">Travel Planning Agent</h1>
                        <p className="text-lg text-black mb-8">Sign in to start planning your perfect trip</p>
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
                
                <div className="p-4">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-black">Plan Your Perfect Trip</h1>
                    <button 
                    onClick={handleGeneratePlan}
                    className="bg-dark-blue text-neon-green font-bold text-lg px-6 py-3 border-4 border-black hover:bg-neon-green hover:text-black transition-colors"
                    >
                        Generate plan
                    </button>
                </div>

                {/* Main Layout */}
                <div className="grid lg:grid-cols-[400px_1fr] gap-6 mb-6">
                    {/* Preferences Section */}
                    <div className="order-2 lg:order-1">
                        <PreferencesSection 
                        onSubmit={handlePreferencesSubmit}
                        initialPreferences={preferences}
                        />
                    </div>

                    {/* Trip Details Section */}
                    <div className="order-1 lg:order-2">
                        <TripDetailsSection 
                        preferences={preferences}
                        onPreferencesChange={setPreferences}
                        />
                    </div>
                </div>

                {/* Main Section with Tabs - appears after submission */}
                {isSubmitted && (
                    <div className="mt-6">
                        <MainSection 
                        preferences={preferences}
                        isSubmitted={isSubmitted}
                        />
                    </div>
                )}
                </div>
            </SignedIn>
        </div>
    );
};

export default TravelPlanning;
