
import React, { useEffect, useState } from 'react';
import { User } from 'lucide-react';

type Member = {
  id: number;
  username: string;
  joinDate: string;
  role: string;
};

const mockMembers: Member[] = [
  { id: 1, username: 'JohnDoe', joinDate: '2024-01-15', role: 'Admin' },
  { id: 2, username: 'JaneSmith', joinDate: '2024-01-16', role: 'Moderator' },
  { id: 3, username: 'BobJohnson', joinDate: '2024-01-17', role: 'Member' },
  // mock data can be called from a seperated mock.ts file
];

const roles = ['All', 'Admin', 'Moderator', 'Member'];

export default function MemberTable() {
  const [search, setSearch] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [sortBy, setSortBy] = useState<'username' | 'joinDate'>('username');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedRole]);

  const filteredMembers = mockMembers
    .filter(member =>
      member.username.toLowerCase().includes(search.toLowerCase()) &&
      (selectedRole === 'All' || member.role === selectedRole)
    )
    .sort((a, b) => {
      if (sortBy === 'username') {
        return a.username.localeCompare(b.username);
      }
      return new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime();
    });

  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedMembers = filteredMembers.slice(startIndex, startIndex + itemsPerPage);

return (
  <div className="space-y-6">
    {/* Filters */}
    <div className="flex flex-col sm:flex-row gap-4 justify-between">
      <input
        type="text"
        placeholder="Search members..."
        className="p-2 border rounded w-full sm:w-1/2 text-black dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        className="p-2 border rounded w-full sm:w-1/3 text-black dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {roles.map(role => (
          <option key={role} value={role}>{role}</option>
        ))}
      </select>
    </div>

    {/* Table */}
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full text-sm divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="p-4 text-left font-medium text-gray-700 dark:text-gray-300">Avatar</th>
            <th
              className={`p-4 cursor-pointer text-left font-medium ${sortBy === 'username' ? 'text-blue-500' : 'text-gray-700 dark:text-gray-300'}`}
              onClick={() => setSortBy('username')}
            >
              Username {sortBy === 'username' && '✓'}
            </th>
            <th
              className={`p-4 cursor-pointer text-left font-medium ${sortBy === 'joinDate' ? 'text-blue-500' : 'text-gray-700 dark:text-gray-300'}`}
              onClick={() => setSortBy('joinDate')}
            >
              Join Date {sortBy === 'joinDate' && '↓'}
            </th>
            <th className="p-4 text-left font-medium text-gray-700 dark:text-gray-300">Role</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {paginatedMembers.length === 0 ? (
            <tr>
              <td colSpan={4} className="p-4 text-center text-gray-500 dark:text-gray-400">
                No members found
              </td>
            </tr>
          ) : (
            paginatedMembers.map(member => (
              <tr key={member.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <td className="p-4">
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </div>
                </td>
                <td className="p-4 text-gray-900 dark:text-gray-100">{member.username}</td>
                <td className="p-4 text-gray-700 dark:text-gray-300">{member.joinDate}</td>
                <td className="p-4 text-gray-700 dark:text-gray-300">{member.role}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>

    {/* Pagination */}
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
      <button
        type="button"
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 text-black dark:text-black bg-gray-300 dark:bg-gray-200 rounded disabled:opacity-50 transition-colors"
      >
        Previous
      </button>
      <span className="text-sm text-gray-700 dark:text-gray-300">
        Page {currentPage} of {totalPages}
      </span>
      <button
        type="button"
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 text-black dark:text-black bg-gray-300 dark:bg-gray-200 rounded disabled:opacity-50 transition-colors"
      >
        Next
      </button>
    </div>
  </div>
);
}