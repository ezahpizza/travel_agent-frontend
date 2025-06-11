
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { researchDestination } from '@/services/travelApi';
import { TravelPreferences } from '@/pages/TravelPlanning';

interface ResearchResultsProps {
  preferences: TravelPreferences;
}

const ResearchResults = ({ preferences }: ResearchResultsProps) => {
  const [isResearching, setIsResearching] = useState(false);

  const { data: researchData, isLoading, error, refetch } = useQuery({
    queryKey: ['research', preferences.destinationCity, preferences.theme, preferences.duration],
    queryFn: () => researchDestination({
      destination: preferences.destinationCity,
      theme: preferences.theme,
      activities: preferences.theme, // Using theme as activities for now
      num_days: preferences.duration,
      budget: 'Standard', // Default budget
      flight_class: 'Economy', // Default flight class
      hotel_rating: 'Any', // Default hotel rating
      visa_required: false,
      insurance_required: false,
    }),
    enabled: false,
  });

  const handleResearch = async () => {
    if (!preferences.destinationCity || !preferences.theme) {
      return;
    }
    setIsResearching(true);
    await refetch();
    setIsResearching(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-black">Destination Research</h3>
        <button
          onClick={handleResearch}
          disabled={isLoading || isResearching}
          className="bg-dark-blue text-white font-bold px-6 py-3 border-4 border-black hover:bg-hot-pink hover:text-black transition-colors disabled:opacity-50"
        >
          {isLoading || isResearching ? 'Researching...' : 'Research Destination'}
        </button>
      </div>

      <div className="bg-gray-100 border-4 border-black p-4">
        <h4 className="font-bold text-black mb-2">Research Details:</h4>
        <p className="text-black">
          <strong>Destination:</strong> {preferences.destinationCity}
        </p>
        <p className="text-black">
          <strong>Theme:</strong> {preferences.theme}
        </p>
        <p className="text-black">
          <strong>Duration:</strong> {preferences.duration} days
        </p>
      </div>

      {error && (
        <div className="bg-red-100 border-4 border-red-500 p-4">
          <p className="text-red-700 font-bold">Error researching destination:</p>
          <p className="text-red-600">{error.message}</p>
        </div>
      )}

      {researchData && (
        <div className="space-y-6">
          {/* Research Summary */}
          <div className="bg-white border-4 border-black p-6">
            <h4 className="text-xl font-bold text-black mb-4">Research Summary</h4>
            <p className="text-black leading-relaxed">{researchData.research_summary}</p>
          </div>

          {/* Attractions */}
          {researchData.attractions && researchData.attractions.length > 0 && (
            <div className="bg-white border-4 border-black p-6">
              <h4 className="text-xl font-bold text-black mb-4">Top Attractions</h4>
              <ul className="space-y-2">
                {researchData.attractions.map((attraction: string, index: number) => (
                  <li key={index} className="text-black flex items-start">
                    <span className="text-hot-pink font-bold mr-2">•</span>
                    {attraction}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Recommendations */}
          {researchData.recommendations && researchData.recommendations.length > 0 && (
            <div className="bg-white border-4 border-black p-6">
              <h4 className="text-xl font-bold text-black mb-4">Recommendations</h4>
              <ul className="space-y-2">
                {researchData.recommendations.map((recommendation: string, index: number) => (
                  <li key={index} className="text-black flex items-start">
                    <span className="text-dark-blue font-bold mr-2">→</span>
                    {recommendation}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Safety Tips */}
          {researchData.safety_tips && researchData.safety_tips.length > 0 && (
            <div className="bg-yellow-100 border-4 border-black p-6">
              <h4 className="text-xl font-bold text-black mb-4">Safety Tips</h4>
              <ul className="space-y-2">
                {researchData.safety_tips.map((tip: string, index: number) => (
                  <li key={index} className="text-black flex items-start">
                    <span className="text-red-500 font-bold mr-2">⚠</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResearchResults;
