// app/components/ThemeSwitcher.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsBrightnessHigh } from 'react-icons/bs';
import { MdBrightness2 } from 'react-icons/md';
import { Button } from '../Components/NextUI';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const SwitchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <Button isIconOnly onClick={SwitchTheme} className="bg-default-100">
      {theme === 'light' ? <MdBrightness2 /> : <BsBrightnessHigh />}
    </Button>
  );
}
