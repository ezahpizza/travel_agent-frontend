import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@clerk/clerk-react';
import ReactMarkdown from 'react-markdown';
import { generateItinerary } from '@/services/travelApi';
import { TravelPreferences } from '@/pages/TravelPlanning';

interface ItineraryResultsProps {
  preferences: TravelPreferences;
}

// Custom markdown component with Tailwind styling
const MarkdownText = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown
      components={{
        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        ul: ({ children }) => <ul className="list-disc list-inside space-y-1">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal list-inside space-y-1">{children}</ol>,
        li: ({ children }) => <li className="ml-2">{children}</li>,
        p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
        a: ({ href, children }) => (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
            {children}
          </a>
        ),
        code: ({ children }) => (
          <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono">{children}</code>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-gray-300 pl-4 italic">{children}</blockquote>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

const ItineraryResults = ({ preferences }: ItineraryResultsProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { userId } = useAuth();

  const { data: itineraryData, isLoading, error, refetch } = useQuery({
  queryKey: ['itinerary', preferences.destinationCity, preferences.theme, preferences.duration],
  queryFn: async () => {
    const response = await generateItinerary({
      destination: preferences.destinationCity,
      theme: preferences.theme,
      activities: preferences.theme,
      num_days: preferences.duration,
      budget: 'Standard',
      flight_class: 'Economy',
      hotel_rating: 'Any',
      visa_required: false,
      insurance_required: false,
      userId: userId || '',
    });
    return response.data;
  },
  enabled: false,
});

  const handleGenerate = async () => {
    if (!preferences.destinationCity || !preferences.theme) {
      return;
    }
    setIsGenerating(true);
    await refetch();
    setIsGenerating(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-black">Trip Itinerary</h3>
        <button
          onClick={handleGenerate}
          disabled={isLoading || isGenerating}
          className="bg-dark-blue text-white font-bold px-6 py-3 border-4 border-black hover:bg-hot-pink hover:text-black transition-colors disabled:opacity-50"
        >
          {isLoading || isGenerating ? 'Generating...' : 'Generate Itinerary'}
        </button>
      </div>

      <div className="bg-gray-100 border-4 border-black p-4">
        <h4 className="font-bold text-black mb-2">Itinerary Details:</h4>
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
          <p className="text-red-700 font-bold">Error generating itinerary:</p>
          <div className="text-red-600"><MarkdownText>{error.message}</MarkdownText></div>
        </div>
      )}

      {itineraryData && (
        <div className="space-y-6">
          {/* Itinerary Overview */}
          <div className="bg-white border-4 border-black p-6">
            <h4 className="text-xl font-bold text-black mb-4">
              {itineraryData.destination} - {itineraryData.total_days} Day {itineraryData.theme} Trip
            </h4>
            {itineraryData.total_estimated_cost && (
              <div className="text-2xl font-bold text-dark-blue mb-4">
                Estimated Cost: <MarkdownText>{itineraryData.total_estimated_cost}</MarkdownText>
              </div>
            )}
          </div>

          {/* Daily Plans */}
          {itineraryData.daily_plans && itineraryData.daily_plans.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-black">Daily Itinerary</h4>
              {itineraryData.daily_plans.map((day: any, index: number) => (
                <div key={index} className="bg-white border-4 border-black p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="text-lg font-bold text-black">
                      Day {day.day}: <MarkdownText>{day.theme}</MarkdownText>
                    </h5>
                    {day.estimated_cost && (
                      <div className="font-bold text-dark-blue">
                        <MarkdownText>{day.estimated_cost}</MarkdownText>
                      </div>
                    )}
                  </div>
                  
                  {day.activities && day.activities.length > 0 && (
                    <div className="space-y-3">
                      {day.activities.map((activity: any, actIndex: number) => (
                        <div key={actIndex} className="border-l-4 border-hot-pink pl-4">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="font-bold text-black">
                                <MarkdownText>{activity.time}</MarkdownText>
                              </div>
                              <div className="text-black">
                                <MarkdownText>{activity.activity}</MarkdownText>
                              </div>
                              {activity.location && (
                                <div className="text-gray-600">
                                  📍 <MarkdownText>{activity.location}</MarkdownText>
                                </div>
                              )}
                              {activity.notes && (
                                <div className="text-sm text-gray-600 mt-1">
                                  <MarkdownText>{activity.notes}</MarkdownText>
                                </div>
                              )}
                            </div>
                            <div className="text-right ml-4">
                              {activity.duration && (
                                <div className="text-sm text-gray-600">
                                  <MarkdownText>{activity.duration}</MarkdownText>
                                </div>
                              )}
                              {activity.cost_estimate && (
                                <div className="font-bold text-dark-blue">
                                  <MarkdownText>{activity.cost_estimate}</MarkdownText>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Travel Tips */}
          {itineraryData.travel_tips && itineraryData.travel_tips.length > 0 && (
            <div className="bg-blue-100 border-4 border-black p-6">
              <h4 className="text-xl font-bold text-black mb-4">Travel Tips</h4>
              <ul className="space-y-2">
                {itineraryData.travel_tips.map((tip: string, index: number) => (
                  <li key={index} className="text-black flex items-start">
                    <span className="text-dark-blue font-bold mr-2">💡</span>
                    <div className="flex-1"><MarkdownText>{tip}</MarkdownText></div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Packing Suggestions */}
          {itineraryData.packing_suggestions && itineraryData.packing_suggestions.length > 0 && (
            <div className="bg-green-100 border-4 border-black p-6">
              <h4 className="text-xl font-bold text-black mb-4">Packing Suggestions</h4>
              <ul className="space-y-2">
                {itineraryData.packing_suggestions.map((item: string, index: number) => (
                  <li key={index} className="text-black flex items-start">
                    <span className="text-green-600 font-bold mr-2">🎒</span>
                    <div className="flex-1"><MarkdownText>{item}</MarkdownText></div>
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

export default ItineraryResults;