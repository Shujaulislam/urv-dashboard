'use client'

import { HomeIcon, IdCard, MessageSquareText, Users, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Sidebar Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md md:hidden"
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h1 className="text-xl font-bold">Dashboard</h1>
              <button
                onClick={() => setIsOpen(false)}
                className="md:hidden text-gray-600 dark:text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <ul className="space-y-2 mt-4">
              <li>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <HomeIcon className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/members"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Users className="h-5 w-5" />
                  <span>Members</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/message"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <MessageSquareText className="h-5 w-5" />
                  <span>Messages</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/roles"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <IdCard className="h-5 w-5" />
                  <span>Roles</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-4 text-sm text-center text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} made by shuja
          </div>
        </nav>
      </aside>
    </>
  );
}
