
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const themes = [
  'Adventure',
  'Culture',
  'Luxury',
  'Beach & Relaxation',
  'City Break',
  'Nature & Wildlife',
  'Food & Wine',
  'History & Heritage',
  'Romance',
  'Business'
];

interface ThemeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const ThemeSelector = ({ value, onChange }: ThemeSelectorProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="border-4 border-black bg-brut-red text-black font-bold text-lg h-12 focus:ring-0 focus:border-dark-blue">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="border-4 border-black bg-white">
        {themes.map((theme) => (
          <SelectItem 
            key={theme} 
            value={theme}
            className="font-bold text-black hover:bg-neon-green focus:bg-neon-green"
          >
            {theme}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ThemeSelector;
