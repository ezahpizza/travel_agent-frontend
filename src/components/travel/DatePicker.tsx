
import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface DatePickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder: string;
  minDate?: Date | null;
}

const DatePicker = ({ value, onChange, placeholder, minDate }: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value ? format(value, 'dd/MM/yy') : '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    
    // Try to parse manual input
    const parsedDate = parseManualDate(val);
    if (parsedDate) {
      onChange(parsedDate);
    }
  };

  const parseManualDate = (input: string): Date | null => {
    // Parse formats like "25/12/23", "25/12/2023", "25 12 23"
    const cleaned = input.replace(/[^\d]/g, '');
    if (cleaned.length >= 6) {
      const day = parseInt(cleaned.slice(0, 2));
      const month = parseInt(cleaned.slice(2, 4));
      let year = parseInt(cleaned.slice(4));
      
      if (year < 100) year += 2000;
      
      if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
        return new Date(year, month - 1, day);
      }
    }
    return null;
  };

  const handleCalendarSelect = (date: Date | undefined) => {
    if (date) {
      onChange(date);
      setInputValue(format(date, 'dd/MM/yy'));
      setIsOpen(false);
    }
  };

  return (
    <div className="flex gap-2">
      <Input
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="flex-1 border-4 border-black bg-brut-orange text-black font-bold text-lg h-12 focus:ring-0 focus:border-dark-blue"
      />
      
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button className="bg-white border-4 border-black p-3 hover:bg-neon-green transition-colors">
            <CalendarIcon className="h-4 w-4 text-black" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 border-4 border-black" align="start">
          <Calendar
            mode="single"
            selected={value || undefined}
            onSelect={handleCalendarSelect}
            disabled={(date) => minDate ? date < minDate : date < new Date()}
            initialFocus
            className={cn("p-3 pointer-events-auto")}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;
