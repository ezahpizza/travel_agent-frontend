
interface DestinationSelectorProps {
  destinations: string[];
  selectedDestination: string;
  onDestinationChange: (destination: string) => void;
}

const DestinationSelector = ({ destinations, selectedDestination, onDestinationChange }: DestinationSelectorProps) => {
  return (
    <div className="bg-white border-4 border-black p-4">
      <label className="block text-black font-bold mb-2">Select Destination:</label>
      <select
        value={selectedDestination}
        onChange={(e) => onDestinationChange(e.target.value)}
        className="w-full bg-neon-cyan border-4 border-black text-black font-bold p-3"
      >
        <option value="">Choose a destination...</option>
        {destinations.map((dest: string) => (
          <option key={dest} value={dest}>{dest}</option>
        ))}
      </select>
    </div>
  );
};

export default DestinationSelector;
