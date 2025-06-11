
import { useState } from 'react';
import { TravelPreferences } from '@/pages/TravelPlanning';
import FlightResults from './FlightResults';
import ResearchResults from './ResearchResults';
import HotelResults from './HotelResults';
import ItineraryResults from './ItineraryResults';

interface MainSectionProps {
  preferences: TravelPreferences;
  isSubmitted: boolean;
}

type ActiveTab = 'flights' | 'research' | 'hotels' | 'itinerary';

const MainSection = ({ preferences, isSubmitted }: MainSectionProps) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('flights');

  const tabs = [
    { id: 'flights' as ActiveTab, label: 'Flights', icon: '✈️' },
    { id: 'research' as ActiveTab, label: 'Research', icon: '🔍' },
    { id: 'hotels' as ActiveTab, label: 'Hotels & Dining', icon: '🏨' },
    { id: 'itinerary' as ActiveTab, label: 'Itinerary', icon: '📅' },
  ];

  return (
    <div className="bg-white border-4 border-black">
      {/* Tab Navigation */}
      <div className="flex border-b-4 border-black">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-4 px-4 font-bold text-lg border-r-4 border-black last:border-r-0 transition-colors ${
              activeTab === tab.id
                ? 'bg-dark-blue text-white'
                : 'bg-white text-black hover:bg-neon-green'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'flights' && <FlightResults preferences={preferences} />}
        {activeTab === 'research' && <ResearchResults preferences={preferences} />}
        {activeTab === 'hotels' && <HotelResults preferences={preferences} />}
        {activeTab === 'itinerary' && <ItineraryResults preferences={preferences} />}
      </div>
    </div>
  );
};

export default MainSection;
