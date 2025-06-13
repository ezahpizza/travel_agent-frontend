
import { Slider } from '@/components/ui/slider';

interface DurationSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const DurationSlider = ({ value, onChange }: DurationSliderProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-white">{value} days</span>
        <span className="text-sm text-neon-green">1-30 days</span>
      </div>
      
      <div className="px-2">
        <Slider
          value={[value]}
          onValueChange={([newValue]) => onChange(newValue)}
          max={30}
          min={1}
          step={1}
          className="w-full [&_.bg-primary]:bg-brut-orange [&_.border-primary]:border-brut-orange"
        />
      </div>
      
      <div className="flex justify-between text-sm text-neon-green">
        <span>1</span>
        <span>30</span>
      </div>
    </div>
  );
};

export default DurationSlider;
