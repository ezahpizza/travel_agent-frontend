
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';

interface AirportData {
  iata: string;
  airport: string;
  country: string;
}

interface LocationSelectorProps {
  value: string;
  placeholder: string;
  onSelect: (airportName: string, iata: string) => void;
}

const LocationSelector = ({ value, placeholder, onSelect }: LocationSelectorProps) => {
  const [inputValue, setInputValue] = useState(value);
  const [suggestions, setSuggestions] = useState<AirportData[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [airportData, setAirportData] = useState<AirportData[]>([]);

  // Load IATA codes data on component mount
  useEffect(() => {
    const loadAirportData = async () => {
      try {
        const response = await fetch('/iata_codes.json');
        const data = await response.json();
        setAirportData(data);
      } catch (error) {
        console.error('Failed to load IATA codes:', error);
      }
    };
    loadAirportData();
  }, []);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    if (inputValue.length > 0 && airportData.length > 0) {
      const filtered = airportData.filter(airport =>
        airport.airport.toLowerCase().includes(inputValue.toLowerCase()) ||
        airport.iata.toLowerCase().includes(inputValue.toLowerCase()) ||
        airport.country.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 10)); // Limit to 10 suggestions
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [inputValue, airportData]);

  const handleSelect = (airportName: string, iata: string) => {
    setInputValue(airportName);
    setShowSuggestions(false);
    onSelect(airportName, iata);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
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
        className="border-4 border-black bg-neon-cyan text-black font-bold text-lg h-12 focus:ring-0 focus:border-dark-blue"
      />
      
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border-4 border-black border-t-0 z-10 max-h-48 overflow-y-auto">
          {suggestions.map((airport) => (
            <div
              key={airport.iata}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleSelect(airport.airport, airport.iata)}
              className="p-3 hover:bg-neon-green cursor-pointer border-b border-black last:border-b-0"
            >
              <div className="font-bold text-black">{airport.airport} ({airport.iata})</div>
              <div className="text-sm text-gray-600">{airport.country}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
