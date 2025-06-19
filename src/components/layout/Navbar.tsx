'use client'

import { useTheme } from '@/context/ThemeContext';
import { Bell, Moon, Sun, User } from 'lucide-react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className="fixed top-0 right-0 left-0 md:left-64 z-30 flex justify-end items-center gap-4 p-4 
      bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700"
    >
      <div className="ml-auto flex items-center gap-4">
        <button
          type="button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title="Toggle dark mode"
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

        <button
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative"
          aria-label="View notifications"
          title="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>

        <button
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="View profile"
          title="Profile"
        >
          <User className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
