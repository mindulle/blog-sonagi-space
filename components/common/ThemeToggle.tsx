'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/Button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="small"
        aria-label="Toggle theme"
        className="w-10 h-10"
      >
        <div className="w-5 h-5" />
      </Button>
    );
  }

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const getIcon = () => {
    if (theme === 'light') return <Sun className="w-5 h-5" />;
    if (theme === 'dark') return <Moon className="w-5 h-5" />;
    return <Monitor className="w-5 h-5" />;
  };

  return (
    <Button
      variant="ghost"
      size="small"
      onClick={cycleTheme}
      aria-label="Toggle theme"
      title={`Current theme: ${theme || 'system'}`}
      className="w-10 h-10 transition-transform hover:scale-110"
    >
      {getIcon()}
    </Button>
  );
}
