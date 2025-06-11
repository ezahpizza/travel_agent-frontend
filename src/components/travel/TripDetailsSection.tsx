
import { useState } from 'react';
import LocationSelector from './LocationSelector';
import DatePicker from './DatePicker';
import DurationSlider from './DurationSlider';
import ThemeSelector from './ThemeSelector';
import { TravelPreferences } from '@/pages/TravelPlanning';

interface TripDetailsSectionProps {
  preferences: TravelPreferences;
  onPreferencesChange: (preferences: TravelPreferences) => void;
}

const TripDetailsSection = ({ preferences, onPreferencesChange }: TripDetailsSectionProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <div className="bg-neon-green border-4 border-black p-6">
      <h2 className="text-2xl font-bold text-black mb-6">
        Getting the basics out of the way -
      </h2>

      {/* Main Form Section */}
      <div className="bg-dark-blue border-4 border-black p-6 mb-6">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Where from */}
          <div>
            <label className="block text-neon-green font-bold text-lg mb-2">Where from:</label>
            <div className="bg-neon-green border-2 border-black p-3">
              <LocationSelector
                value={preferences.sourceCity}
                placeholder="Enter departure city"
                onSelect={(city, iata) => {
                  onPreferencesChange({ ...preferences, sourceCity: city, sourceIATA: iata });
                  if (errors.source) setErrors(prev => ({ ...prev, source: '' }));
                }}
              />
            </div>
            {errors.source && <p className="text-red-500 text-sm mt-1">{errors.source}</p>}
          </div>

          {/* Where to */}
          <div>
            <label className="block text-neon-green font-bold text-lg mb-2">Where to:</label>
            <div className="bg-neon-green border-2 border-black p-3">
              <LocationSelector
                value={preferences.destinationCity}
                placeholder="Enter destination city"
                onSelect={(city, iata) => {
                  onPreferencesChange({ ...preferences, destinationCity: city, destinationIATA: iata });
                  if (errors.destination) setErrors(prev => ({ ...prev, destination: '' }));
                }}
              />
            </div>
            {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Date */}
          <div>
            <label className="block text-neon-green font-bold text-lg mb-2">Date:</label>
            <div className="bg-brutalist-orange border-2 border-black p-3">
              <DatePicker
                value={preferences.departureDate}
                onChange={(date) => {
                  onPreferencesChange({ ...preferences, departureDate: date });
                  if (errors.departureDate) setErrors(prev => ({ ...prev, departureDate: '' }));
                }}
                placeholder="mm/dd/yy"
              />
            </div>
            {errors.departureDate && <p className="text-red-500 text-sm mt-1">{errors.departureDate}</p>}
          </div>

          {/* Duration */}
          <div>
            <label className="block text-neon-green font-bold text-lg mb-2">Duration:</label>
            <div className="bg-dark-blue border-2 border-black p-3">
              <DurationSlider
                value={preferences.duration}
                onChange={(duration) => onPreferencesChange({ ...preferences, duration })}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Theme Section */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-black mb-4">got an occasion or a theme in mind?</h3>
        <div className="bg-red-500 border-4 border-black p-3">
          <ThemeSelector
            value={preferences.theme}
            onChange={(theme) => {
              onPreferencesChange({ ...preferences, theme });
              if (errors.theme) setErrors(prev => ({ ...prev, theme: '' }));
            }}
          />
        </div>
        {errors.theme && <p className="text-red-500 text-sm mt-1">{errors.theme}</p>}
      </div>

      {/* Activities Section */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-black mb-4">Tell us more about your trip -</h3>
        <textarea
          value={preferences.activities}
          onChange={(e) => {
            onPreferencesChange({ ...preferences, activities: e.target.value });
            if (errors.activities) setErrors(prev => ({ ...prev, activities: '' }));
          }}
          placeholder="any activities you like, or places you'd like to explore"
          className="w-full bg-neon-green border-4 border-black text-black placeholder-gray-700 font-bold p-4 h-32 resize-none focus:outline-none"
        />
        {errors.activities && <p className="text-red-500 text-sm mt-1">{errors.activities}</p>}
      </div>
    </div>
  );
};

export default TripDetailsSection;
