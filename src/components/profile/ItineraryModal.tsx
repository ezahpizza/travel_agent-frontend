import React from 'react';
import { X } from 'lucide-react';

interface ItineraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  itinerary: any;
}

const ItineraryModal: React.FC<ItineraryModalProps> = ({ isOpen, onClose, itinerary }) => {
  if (!isOpen || !itinerary) return null;

  const renderDay = (day: any, index: number) => (
    <div key={index} className="bg-white border-2 border-black p-4 mb-4">
      <h4 className="text-lg font-bold text-black mb-3">Day {day.day}</h4>
      {day.activities && day.activities.map((activity: any, actIndex: number) => (
        <div key={actIndex} className="mb-3 p-3 bg-neon-green border border-black">
          <div className="flex justify-between items-start mb-2">
            <h5 className="font-bold text-black">{activity.time}</h5>
            {activity.cost && (
              <span className="bg-hot-pink text-black px-2 py-1 text-sm font-bold">
                {activity.cost}
              </span>
            )}
          </div>
          <p className="text-black font-semibold">{activity.activity}</p>
          {activity.location && (
            <p className="text-gray-700 text-sm">📍 {activity.location}</p>
          )}
          {activity.description && (
            <p className="text-gray-600 text-sm mt-1">{activity.description}</p>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-lemon-yellow border-4 border-black max-w-4xl max-h-[90vh] w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="bg-hot-pink border-b-4 border-black p-4 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-black">{itinerary.destination}</h2>
            <p className="text-black">{itinerary.theme} • {itinerary.num_days} days</p>
          </div>
          <button
            onClick={onClose}
            className="bg-white border-2 border-black p-2 hover:bg-dark-blue hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto max-h-[calc(90vh-100px)]">
          {/* Trip Summary */}
          <div className="bg-flamingo border-2 border-black p-4 mb-4">
            <h3 className="text-lg font-bold text-black mb-2">Trip Summary</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p><strong>Budget:</strong> {itinerary.budget}</p>
                <p><strong>Flight Class:</strong> {itinerary.flight_class}</p>
                <p><strong>Hotel Rating:</strong> {itinerary.hotel_rating}</p>
              </div>
              <div>
                <p><strong>Visa Required:</strong> {itinerary.visa_required ? 'Yes' : 'No'}</p>
                <p><strong>Insurance:</strong> {itinerary.insurance_required ? 'Yes' : 'No'}</p>
                <p><strong>Activities:</strong> {itinerary.activities}</p>
              </div>
            </div>
          </div>

          {/* Itinerary Days */}
          {itinerary.itinerary_data?.days && itinerary.itinerary_data.days.map((day: any, index: number) => 
            renderDay(day, index)
          )}

          {/* Hotels Section */}
          {itinerary.itinerary_data?.hotels && itinerary.itinerary_data.hotels.length > 0 && (
            <div className="bg-white border-2 border-black p-4 mb-4">
              <h3 className="text-lg font-bold text-black mb-3">🏨 Recommended Hotels</h3>
              {itinerary.itinerary_data.hotels.map((hotel: any, index: number) => (
                <div key={index} className="mb-3 p-3 bg-flamingo border border-black">
                  <h4 className="font-bold text-black">{hotel.name}</h4>
                  {hotel.rating && <p className="text-sm">⭐ {hotel.rating}</p>}
                  {hotel.price && <p className="text-sm font-bold text-dark-blue">{hotel.price}</p>}
                  {hotel.description && <p className="text-sm text-gray-600">{hotel.description}</p>}
                </div>
              ))}
            </div>
          )}

          {/* Restaurants Section */}
          {itinerary.itinerary_data?.restaurants && itinerary.itinerary_data.restaurants.length > 0 && (
            <div className="bg-white border-2 border-black p-4 mb-4">
              <h3 className="text-lg font-bold text-black mb-3">🍽️ Recommended Restaurants</h3>
              {itinerary.itinerary_data.restaurants.map((restaurant: any, index: number) => (
                <div key={index} className="mb-3 p-3 bg-lemon-yellow border border-black">
                  <h4 className="font-bold text-black">{restaurant.name}</h4>
                  {restaurant.cuisine && <p className="text-sm">🍴 {restaurant.cuisine}</p>}
                  {restaurant.price_range && <p className="text-sm font-bold text-dark-blue">{restaurant.price_range}</p>}
                  {restaurant.description && <p className="text-sm text-gray-600">{restaurant.description}</p>}
                </div>
              ))}
            </div>
          )}

          {/* Travel Tips */}
          {itinerary.itinerary_data?.travel_tips && itinerary.itinerary_data.travel_tips.length > 0 && (
            <div className="bg-neon-green border-2 border-black p-4 mb-4">
              <h3 className="text-lg font-bold text-black mb-3">💡 Travel Tips</h3>
              <ul className="space-y-2">
                {itinerary.itinerary_data.travel_tips.map((tip: string, index: number) => (
                  <li key={index} className="text-black">• {tip}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Estimated Cost */}
          {itinerary.itinerary_data?.estimated_cost && (
            <div className="bg-hot-pink border-2 border-black p-4 text-center">
              <h3 className="text-lg font-bold text-black">
                Estimated Total Cost: {itinerary.itinerary_data.estimated_cost}
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItineraryModal;