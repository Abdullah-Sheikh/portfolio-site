
import { useTheme } from './ThemeProvider';
import { Sun } from 'lucide-react';
import { Button } from './ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme('light')}
      className="transition-transform hover:scale-110"
    >
      <Sun className="h-5 w-5 transition-all" />
    </Button>
  );
}
