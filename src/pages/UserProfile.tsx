
import { useState } from 'react';
import { SignedIn, SignedOut, SignInButton, useAuth } from '@clerk/clerk-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  getFlightHistory, 
  getResearchHistory, 
  getHotelRestaurantHistory, 
  getUserItineraryHistory,
  getItineraryById,
  deleteItinerary
} from '@/services/travelApi';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import GlobalNavbar from '@/components/GlobalNavbar';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileTabs from '@/components/profile/ProfileTabs';
import FlightHistorySection from '@/components/profile/FlightHistorySection';
import DestinationSelector from '@/components/profile/DestinationSelector';
import ItineraryModal from '@/components/profile/ItineraryModal';
import SubscriptionWidget from '@/components/subscription/SubscriptionWidget';
import PaywallModal from '@/components/subscription/PaywallModal';

type HistorySection = 'flights' | 'research' | 'hotels' | 'itineraries';

const UserProfile = () => {
  const { userId } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [activeSection, setActiveSection] = useState<HistorySection>('flights');
  const [selectedDestination, setSelectedDestination] = useState<string>('');
  const [selectedItinerary, setSelectedItinerary] = useState<any>(null);
  const [showItineraryModal, setShowItineraryModal] = useState(false);
  const [showPaywallModal, setShowPaywallModal] = useState(false);

  // Delete itinerary mutation
  const deleteItineraryMutation = useMutation({
    mutationFn: ({ itineraryId, userId }: { itineraryId: string; userId: string }) =>
      deleteItinerary(itineraryId, userId),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Itinerary deleted successfully",
      });
      queryClient.invalidateQueries({ queryKey: ['itineraryHistory'] });
    },
    onError: (error: any) => {
      if (error.message.includes('Free plan limit')) {
        setShowPaywallModal(true);
      } else {
        toast({
          title: "Error",
          description: "Failed to delete itinerary",
          variant: "destructive",
        });
      }
    },
  });

  // Flight history query
  const { data: flightHistory, isLoading: flightLoading } = useQuery({
    queryKey: ['flightHistory', userId],
    queryFn: () => getFlightHistory(userId || ''),
    enabled: !!userId && activeSection === 'flights',
  });

  // Research history query
  const { data: researchHistory, isLoading: researchLoading } = useQuery({
    queryKey: ['researchHistory', selectedDestination, userId],
    queryFn: () => getResearchHistory(selectedDestination, userId || ''),
    enabled: !!userId && !!selectedDestination && activeSection === 'research',
  });

  // Hotel & Restaurant history query
  const { data: hotelHistory, isLoading: hotelLoading } = useQuery({
    queryKey: ['hotelHistory', selectedDestination, userId],
    queryFn: () => getHotelRestaurantHistory(selectedDestination, userId || ''),
    enabled: !!userId && !!selectedDestination && activeSection === 'hotels',
  });

  // Itinerary history query
  const { data: itineraryHistory, isLoading: itineraryLoading } = useQuery({
    queryKey: ['itineraryHistory', userId],
    queryFn: () => getUserItineraryHistory(userId || ''),
    enabled: !!userId && activeSection === 'itineraries',
  });

  // Get unique destinations from flight history for research/hotel queries
  const destinations = flightHistory?.data?.map((search: any) => search.destination).filter((dest: string, index: number, arr: string[]) => arr.indexOf(dest) === index) || [];

  const sections = [
    { id: 'flights' as HistorySection, label: 'Flight History', icon: '✈️' },
    { id: 'research' as HistorySection, label: 'Research History', icon: '🔍' },
    { id: 'hotels' as HistorySection, label: 'Hotels & Dining', icon: '🏨' },
    { id: 'itineraries' as HistorySection, label: 'Itineraries', icon: '📅' },
  ];

  const handleDeleteItinerary = (itineraryId: string) => {
    if (!userId) return;
    
    if (confirm('Are you sure you want to delete this itinerary?')) {
      deleteItineraryMutation.mutate({ itineraryId, userId });
    }
  };

  const handleViewItinerary = async (itineraryId: string) => {
    try {
      const response = await getItineraryById(itineraryId, userId || '');
      if (response.success) {
        setSelectedItinerary(response.data);
        setShowItineraryModal(true);
      }
    } catch (error) {
      console.error('Error fetching itinerary:', error);
    }
  };

  return (
    <div className="min-h-screen bg-hot-pink font-syne">
      <SignedOut>
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white border-4 border-black p-8 text-center">
            <h1 className="text-3xl font-bold text-black mb-6">User Profile</h1>
            <p className="text-lg text-black mb-8">Sign in to view your travel history</p>
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
          <ProfileHeader />
          <SubscriptionWidget />

          <div className="bg-brut-purple border-4 border-black mb-6">
            <ProfileTabs 
              sections={sections}
              activeSection={activeSection}
              onSectionChange={(section: HistorySection) => setActiveSection(section)}
            />

            <div className="p-6">
              {activeSection === 'flights' && (
                <FlightHistorySection 
                  flightHistory={flightHistory}
                  flightLoading={flightLoading}
                />
              )}

              {activeSection === 'research' && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-black">Research History</h3>
                  
                  <DestinationSelector 
                    destinations={destinations}
                    selectedDestination={selectedDestination}
                    onDestinationChange={setSelectedDestination}
                  />

                  {selectedDestination && (
                    <>
                      {researchLoading ? (
                        <div className="bg-white border-4 border-black p-6 text-center">
                          <p className="text-black font-bold">Loading research history...</p>
                        </div>
                      ) : researchHistory?.data?.length > 0 ? (
                        <div className="space-y-4">
                          {researchHistory.data.map((research: any, index: number) => (
                            <div key={index} className="bg-white border-4 border-black p-6">
                              <div className="flex justify-between items-start mb-4">
                                <div>
                                  <h4 className="text-xl font-bold text-black">{research.destination}</h4>
                                  <p className="text-gray-600">{research.theme} • {research.num_days} days</p>
                                  <p className="text-sm text-gray-500">
                                    Researched: {research.created_at ? format(new Date(research.created_at), 'dd/MM/yy') : 'N/A'}
                                  </p>
                                </div>
                              </div>
                              {research.attractions && research.attractions.length > 0 && (
                                <div className="bg-neon-green border-2 border-black p-3 mb-3">
                                  <p className="text-black font-bold text-sm mb-2">Top Attractions:</p>
                                  <ul className="text-black text-sm space-y-1">
                                    {research.attractions.slice(0, 3).map((attraction: string, i: number) => (
                                      <li key={i}>• {attraction}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="bg-white border-4 border-black p-6 text-center">
                          <p className="text-black font-bold">No research history found for {selectedDestination}.</p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}

              {activeSection === 'hotels' && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-black">Hotels & Dining History</h3>
                  
                  <DestinationSelector 
                    destinations={destinations}
                    selectedDestination={selectedDestination}
                    onDestinationChange={setSelectedDestination}
                  />

                  {selectedDestination && (
                    <>
                      {hotelLoading ? (
                        <div className="bg-white border-4 border-black p-6 text-center">
                          <p className="text-black font-bold">Loading hotels & dining history...</p>
                        </div>
                      ) : hotelHistory?.data?.length > 0 ? (
                        <div className="space-y-4">
                          {hotelHistory.data.map((search: any, index: number) => (
                            <div key={index} className="bg-white border-4 border-black p-6">
                              <div className="flex justify-between items-start mb-4">
                                <div>
                                  <h4 className="text-xl font-bold text-black">{search.destination}</h4>
                                  <p className="text-gray-600">{search.theme} • {search.hotel_rating} rating</p>
                                  <p className="text-sm text-gray-500">
                                    Searched: {search.created_at ? format(new Date(search.created_at), 'dd/MM/yy') : 'N/A'}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="font-bold text-dark-blue">{search.budget}</p>
                                </div>
                              </div>
                              
                              {search.hotels && search.hotels.length > 0 && (
                                <div className="bg-flamingo border-2 border-black p-3 mb-3">
                                  <p className="text-black font-bold text-sm mb-2">Hotels Found: {search.hotels.length}</p>
                                  <p className="text-black text-sm">{search.hotels[0]?.name}</p>
                                </div>
                              )}
                              
                              {search.restaurants && search.restaurants.length > 0 && (
                                <div className="bg-lemon-yellow border-2 border-black p-3">
                                  <p className="text-black font-bold text-sm mb-2">Restaurants Found: {search.restaurants.length}</p>
                                  <p className="text-black text-sm">{search.restaurants[0]?.name}</p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="bg-white border-4 border-black p-6 text-center">
                          <p className="text-black font-bold">No hotel & dining history found for {selectedDestination}.</p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}

              {activeSection === 'itineraries' && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-black">Generated Itineraries</h3>
                  {itineraryLoading ? (
                    <div className="bg-white border-4 border-black p-6 text-center">
                      <p className="text-black font-bold">Loading itineraries...</p>
                    </div>
                  ) : itineraryHistory?.data?.length > 0 ? (
                    <div className="space-y-4">
                      {itineraryHistory.data.map((itinerary: any, index: number) => (
                        <div key={index} className="bg-white border-4 border-black p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="text-xl font-bold text-black">{itinerary.destination}</h4>
                              <p className="text-gray-600">{itinerary.theme} • {itinerary.num_days} days</p>
                              <p className="text-sm text-gray-500">
                                Created: {itinerary.created_at ? format(new Date(itinerary.created_at), 'dd/MM/yy') : 'N/A'}
                              </p>
                            </div>
                            <div className="text-right space-y-2">
                              <p className="font-bold text-dark-blue">{itinerary.budget}</p>
                              <div className="flex gap-2">
                                <button 
                                  onClick={() => handleViewItinerary(itinerary._id)}
                                  className="bg-hot-pink text-black font-bold px-4 py-2 border-2 border-black hover:bg-dark-blue hover:text-white transition-colors"
                                >
                                  View Details
                                </button>
                                <button 
                                  onClick={() => handleDeleteItinerary(itinerary._id)}
                                  disabled={deleteItineraryMutation.isPending}
                                  className="bg-red-500 text-white font-bold px-4 py-2 border-2 border-black hover:bg-red-600 transition-colors disabled:opacity-50"
                                >
                                  {deleteItineraryMutation.isPending ? 'Deleting...' : 'Delete'}
                                </button>
                              </div>
                            </div>
                          </div>
                          {itinerary.activities && (
                            <div className="bg-neon-green border-2 border-black p-3">
                              <p className="text-black font-bold text-sm">Activities: {itinerary.activities}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white border-4 border-black p-6 text-center">
                      <p className="text-black font-bold">No itineraries generated yet. Create your first travel plan!</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <ItineraryModal
          isOpen={showItineraryModal}
          onClose={() => {
            setShowItineraryModal(false);
            setSelectedItinerary(null);
          }}
          itinerary={selectedItinerary}
        />

        <PaywallModal
          isOpen={showPaywallModal}
          onClose={() => setShowPaywallModal(false)}
        />
      </SignedIn>
    </div>
  );
};

export default UserProfile;
