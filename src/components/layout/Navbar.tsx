'use client'

import { useTheme } from '@/context/ThemeContext';
import { Bell, Moon, Sun, User } from 'lucide-react';

import React from 'react'


function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 right-0 flex justify-between items-center gap-4 p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 w-[calc(100%-16rem)]">
      <div className='ml-auto flex items-center gap-4'>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
        
        <button 
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative"
          aria-label="View notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
        </button>

        <button 
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="View profile"
        >
          <User className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}

export default Navbar
