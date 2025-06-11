
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchHotelsRestaurants } from '@/services/travelApi';
import { TravelPreferences } from '@/pages/TravelPlanning';

interface HotelResultsProps {
  preferences: TravelPreferences;
}

const HotelResults = ({ preferences }: HotelResultsProps) => {
  const [isSearching, setIsSearching] = useState(false);

  const { data: hotelData, isLoading, error, refetch } = useQuery({
    queryKey: ['hotels', preferences.destinationCity, preferences.theme],
    queryFn: () => searchHotelsRestaurants({
      destination: preferences.destinationCity,
      theme: preferences.theme,
      activity_preferences: preferences.theme,
      hotel_rating: 'Any',
      budget: 'Standard',
    }),
    enabled: false,
  });

  const handleSearch = async () => {
    if (!preferences.destinationCity || !preferences.theme) {
      return;
    }
    setIsSearching(true);
    await refetch();
    setIsSearching(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-black">Hotels & Restaurants</h3>
        <button
          onClick={handleSearch}
          disabled={isLoading || isSearching}
          className="bg-dark-blue text-white font-bold px-6 py-3 border-4 border-black hover:bg-hot-pink hover:text-black transition-colors disabled:opacity-50"
        >
          {isLoading || isSearching ? 'Searching...' : 'Search Hotels & Dining'}
        </button>
      </div>

      <div className="bg-gray-100 border-4 border-black p-4">
        <h4 className="font-bold text-black mb-2">Search Details:</h4>
        <p className="text-black">
          <strong>Destination:</strong> {preferences.destinationCity}
        </p>
        <p className="text-black">
          <strong>Theme:</strong> {preferences.theme}
        </p>
      </div>

      {error && (
        <div className="bg-red-100 border-4 border-red-500 p-4">
          <p className="text-red-700 font-bold">Error searching hotels & restaurants:</p>
          <p className="text-red-600">{error.message}</p>
        </div>
      )}

      {hotelData && (
        <div className="space-y-6">
          {/* Hotels Section */}
          {hotelData.hotels && hotelData.hotels.length > 0 && (
            <div className="bg-white border-4 border-black p-6">
              <h4 className="text-xl font-bold text-black mb-4">Recommended Hotels</h4>
              <div className="space-y-4">
                {hotelData.hotels.map((hotel: any, index: number) => (
                  <div key={index} className="border-2 border-gray-300 p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h5 className="font-bold text-black text-lg">{hotel.name}</h5>
                        {hotel.address && <p className="text-gray-600">{hotel.address}</p>}
                        {hotel.description && <p className="text-black mt-2">{hotel.description}</p>}
                      </div>
                      <div className="text-right ml-4">
                        {hotel.rating && (
                          <p className="text-lg font-bold text-dark-blue">★ {hotel.rating}</p>
                        )}
                        {hotel.price_range && (
                          <p className="text-black font-bold">{hotel.price_range}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Restaurants Section */}
          {hotelData.restaurants && hotelData.restaurants.length > 0 && (
            <div className="bg-white border-4 border-black p-6">
              <h4 className="text-xl font-bold text-black mb-4">Recommended Restaurants</h4>
              <div className="space-y-4">
                {hotelData.restaurants.map((restaurant: any, index: number) => (
                  <div key={index} className="border-2 border-gray-300 p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h5 className="font-bold text-black text-lg">{restaurant.name}</h5>
                        {restaurant.cuisine_type && (
                          <p className="text-hot-pink font-bold">{restaurant.cuisine_type}</p>
                        )}
                        {restaurant.address && <p className="text-gray-600">{restaurant.address}</p>}
                        {restaurant.description && <p className="text-black mt-2">{restaurant.description}</p>}
                      </div>
                      <div className="text-right ml-4">
                        {restaurant.rating && (
                          <p className="text-lg font-bold text-dark-blue">★ {restaurant.rating}</p>
                        )}
                        {restaurant.price_range && (
                          <p className="text-black font-bold">{restaurant.price_range}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(!hotelData.hotels || hotelData.hotels.length === 0) && 
           (!hotelData.restaurants || hotelData.restaurants.length === 0) && (
            <p className="text-gray-600">No hotels or restaurants found. Try searching first.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HotelResults;
