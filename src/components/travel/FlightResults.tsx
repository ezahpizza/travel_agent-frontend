
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@clerk/clerk-react';
import { searchFlights } from '@/services/travelApi';
import { TravelPreferences } from '@/pages/TravelPlanning';
import { format } from 'date-fns';

interface FlightResultsProps {
  preferences: TravelPreferences;
}

const FlightResults = ({ preferences }: FlightResultsProps) => {
  const [isSearching, setIsSearching] = useState(false);
  const { userId } = useAuth();

  const { data: flightData, isLoading, error, refetch } = useQuery({
    queryKey: ['flights', preferences.sourceIATA, preferences.destinationIATA, preferences.departureDate, preferences.returnDate],
    queryFn: () => searchFlights({
      source: preferences.sourceIATA,
      destination: preferences.destinationIATA,
      departure_date: format(preferences.departureDate!, 'yyyy-MM-dd'),
      return_date: format(preferences.returnDate!, 'yyyy-MM-dd'),
      userId: userId || '',
    }),
    enabled: false, // Don't auto-fetch
  });

  const handleSearch = async () => {
    if (!preferences.sourceIATA || !preferences.destinationIATA || !preferences.departureDate || !preferences.returnDate) {
      return;
    }
    setIsSearching(true);
    await refetch();
    setIsSearching(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-black">Flight Search</h3>
        <button
          onClick={handleSearch}
          disabled={isLoading || isSearching}
          className="bg-dark-blue text-white font-bold px-6 py-3 border-4 border-black hover:bg-hot-pink hover:text-black transition-colors disabled:opacity-50"
        >
          {isLoading || isSearching ? 'Searching...' : 'Search Flights'}
        </button>
      </div>

      <div className="bg-gray-100 border-4 border-black p-4">
        <h4 className="font-bold text-black mb-2">Search Details:</h4>
        <p className="text-black">
          <strong>Route:</strong> {preferences.sourceCity} ({preferences.sourceIATA}) → {preferences.destinationCity} ({preferences.destinationIATA})
        </p>
        <p className="text-black">
          <strong>Dates:</strong> {preferences.departureDate ? format(preferences.departureDate, 'MMM dd, yyyy') : 'Not selected'} - {preferences.returnDate ? format(preferences.returnDate, 'MMM dd, yyyy') : 'Not selected'}
        </p>
      </div>

      {error && (
        <div className="bg-red-100 border-4 border-red-500 p-4">
          <p className="text-red-700 font-bold">Error searching flights:</p>
          <p className="text-red-600">{error.message}</p>
        </div>
      )}

      {flightData && (
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-black">Available Flights:</h4>
          {flightData.data && flightData.data.length > 0 ? (
            <div className="space-y-4">
              {flightData.data.map((flight: any, index: number) => (
                <div key={index} className="bg-white border-4 border-black p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h5 className="font-bold text-black text-lg">{flight.airline}</h5>
                      <p className="text-black">
                        {flight.departure_time} - {flight.arrival_time}
                      </p>
                      <p className="text-gray-600">Duration: {flight.total_duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-dark-blue">{flight.price}</p>
                      <button className="bg-hot-pink text-black font-bold px-4 py-2 border-2 border-black hover:bg-dark-blue hover:text-white transition-colors">
                        Select
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No flights found or search not performed yet.</p>
          )}
        </div>
      )}

    </div>
  );
};

export default FlightResults;
