
import { useState } from 'react';
import { TravelPreferences } from '@/pages/TravelPlanning';

interface PreferencesSectionProps {
  onSubmit: (preferences: TravelPreferences) => void;
  initialPreferences: TravelPreferences;
}

const PreferencesSection = ({ onSubmit, initialPreferences }: PreferencesSectionProps) => {
  const [preferences, setPreferences] = useState<TravelPreferences>(initialPreferences);

  const handleSubmit = () => {
    onSubmit(preferences);
  };

  return (
    <div className="bg-brut-purple border-4 border-black p-6">
      <h2 className="text-2xl font-bold text-neon-green mb-6">
        Preferences
      </h2>

      <div className="space-y-6">
        {/* Budget Section */}
        <div className="bg-neon-green border-4 border-black p-4">
          <h3 className="text-xl font-bold text-black mb-4">Budget</h3>
          <div className="space-y-2">
            {['Economy', 'Standard', 'Luxury'].map((option) => (
              <label key={option} className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="budget"
                  value={option}
                  checked={preferences.budget === option}
                  onChange={(e) => setPreferences(prev => ({ ...prev, budget: e.target.value }))}
                  className="w-4 h-4"
                />
                <span className="text-black font-bold">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Flight Class Section */}
        <div className="bg-brut-violet border-4 border-black p-4">
          <h3 className="text-xl font-bold text-neon-green mb-4">Flight Class</h3>
          <div className="space-y-2">
            {['Economy', 'Business', 'First Class'].map((option) => (
              <label key={option} className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="flightClass"
                  value={option}
                  checked={preferences.flightClass === option}
                  onChange={(e) => setPreferences(prev => ({ ...prev, flightClass: e.target.value }))}
                  className="w-4 h-4"
                />
                <span className="text-neon-green font-bold">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Essentials Section */}
        <div className="bg-brut-orange border-4 border-black p-4">
          <h3 className="text-xl font-bold text-black mb-4">Essentials</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={preferences.visaRequired}
                onChange={(e) => setPreferences(prev => ({ ...prev, visaRequired: e.target.checked }))}
                className="w-4 h-4"
              />
              <span className="text-black font-bold">Visa</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={preferences.insuranceRequired}
                onChange={(e) => setPreferences(prev => ({ ...prev, insuranceRequired: e.target.checked }))}
                className="w-4 h-4"
              />
              <span className="text-black font-bold">Insurance</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferencesSection;
