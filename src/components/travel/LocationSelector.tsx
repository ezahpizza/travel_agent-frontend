
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';

// Sample IATA codes data - in production, this would come from a proper API
const airportData = [
  { city: 'New York', iata: 'JFK', country: 'USA' },
  { city: 'Los Angeles', iata: 'LAX', country: 'USA' },
  { city: 'London', iata: 'LHR', country: 'UK' },
  { city: 'Paris', iata: 'CDG', country: 'France' },
  { city: 'Tokyo', iata: 'NRT', country: 'Japan' },
  { city: 'Dubai', iata: 'DXB', country: 'UAE' },
  { city: 'Singapore', iata: 'SIN', country: 'Singapore' },
  { city: 'Amsterdam', iata: 'AMS', country: 'Netherlands' },
  { city: 'Frankfurt', iata: 'FRA', country: 'Germany' },
  { city: 'Sydney', iata: 'SYD', country: 'Australia' },
  { city: 'Toronto', iata: 'YYZ', country: 'Canada' },
  { city: 'Mumbai', iata: 'BOM', country: 'India' },
  { city: 'Bangkok', iata: 'BKK', country: 'Thailand' },
  { city: 'Istanbul', iata: 'IST', country: 'Turkey' },
  { city: 'Madrid', iata: 'MAD', country: 'Spain' },
];

interface LocationSelectorProps {
  value: string;
  placeholder: string;
  onSelect: (city: string, iata: string) => void;
}

const LocationSelector = ({ value, placeholder, onSelect }: LocationSelectorProps) => {
  const [inputValue, setInputValue] = useState(value);
  const [suggestions, setSuggestions] = useState<typeof airportData>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    if (inputValue.length > 0) {
      const filtered = airportData.filter(airport =>
        airport.city.toLowerCase().includes(inputValue.toLowerCase()) ||
        airport.iata.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [inputValue]);

  const handleSelect = (city: string, iata: string) => {
    setInputValue(city);
    setShowSuggestions(false);
    onSelect(city, iata);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    // Delay hiding suggestions to allow for clicks
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  return (
    <div className="relative">
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onFocus={() => inputValue.length > 0 && setShowSuggestions(true)}
        placeholder={placeholder}
        className="border-4 border-black bg-white text-black font-bold text-lg h-12 focus:ring-0 focus:border-dark-blue"
      />
      
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border-4 border-black border-t-0 z-10 max-h-48 overflow-y-auto">
          {suggestions.map((airport) => (
            <div
              key={airport.iata}
              onMouseDown={(e) => e.preventDefault()} // Prevent blur before click
              onClick={() => handleSelect(airport.city, airport.iata)}
              className="p-3 hover:bg-neon-green cursor-pointer border-b border-black last:border-b-0"
            >
              <div className="font-bold text-black">{airport.city} ({airport.iata})</div>
              <div className="text-sm text-gray-600">{airport.country}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
