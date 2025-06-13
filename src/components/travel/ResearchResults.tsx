import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@clerk/clerk-react';
import ReactMarkdown from 'react-markdown';
import { researchDestination } from '@/services/travelApi';
import { TravelPreferences } from '@/pages/TravelPlanning';

interface ResearchResultsProps {
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

const ResearchResults = ({ preferences }: ResearchResultsProps) => {
  const [isResearching, setIsResearching] = useState(false);
  const { userId } = useAuth();

  const { data: apiResponse, isLoading, error, refetch } = useQuery({
    queryKey: ['research', preferences.destinationCity, preferences.theme, preferences.duration],
    queryFn: () => researchDestination({
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
    }),
    enabled: false,
  });

  // Extract the actual research data from the API response
  const researchData = apiResponse?.data;

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
          <div className="text-red-600"><MarkdownText>{error.message}</MarkdownText></div>
        </div>
      )}

      {researchData && (
        <div className="space-y-6">
          {/* Attractions */}
          {researchData.attractions && researchData.attractions.length > 0 && (
            <div className="bg-white border-4 border-black p-6">
              <h4 className="text-xl font-bold text-black mb-4">Top Attractions</h4>
              <ul className="space-y-2">
                {researchData.attractions.map((attraction: string, index: number) => (
                  <li key={index} className="text-black flex items-start">
                    <span className="text-hot-pink font-bold mr-2">•</span>
                    <div className="flex-1"><MarkdownText>{attraction}</MarkdownText></div>
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
                    <div className="flex-1"><MarkdownText>{tip}</MarkdownText></div>
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