import { HomeIcon, IdCard, MessageSquareText, Users } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  useState(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false)
      } else {
        setIsOpen(true)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return (
    <aside
      className={`h-full w-64 fixed top-0 left-0 text-white bg-gray-800 transition-transform duration-300 ${
        !isOpen ? "-translate-x-full" : ""
      }`}
    >
      <nav>
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold">Sidebar</h1>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "X" : "="}
          </button>
        </div>
        <ul className="space-y-2 mt-4">
          <li>
            <Link
              href="dashboard"
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 transition-colors"
            >
              <HomeIcon className="h-6 w-6" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="members" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 transition-colors">
              <Users className="h-6 w-6" />
              <span>Members</span>
            </Link>
          </li>
          <li>
            <Link href="message" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 transition-colors">
              <MessageSquareText className="h-6 w-6" />
              <span>Message</span>
            </Link>
          </li>
          <li>
            <Link href="roles" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 transition-colors">
              <IdCard className="h-6 w-6" />
              <span>Roles</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar
