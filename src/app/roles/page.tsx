'use client';

import RoleToggle from '@/components/ui/RoleToggle';
import { useState } from 'react';


type Role = {
  id: number;
  name: string;
  color: string;
  isEnabled: boolean;
};

const initialRoles: Role[] = [
  { id: 1, name: 'Admin', color: '#FF4444', isEnabled: true },
  { id: 2, name: 'Moderator', color: '#44FF44', isEnabled: true },
  { id: 3, name: 'Helper', color: '#4444FF', isEnabled: false },
  { id: 4, name: 'Member', color: '#FFAA44', isEnabled: true },
  { id: 5, name: 'New User', color: '#44FFFF', isEnabled: true },
];

export default function RolesPage() {
  const [roles, setRoles] = useState<Role[]>(initialRoles);

  const handleToggle = (roleId: number) => {
    setRoles(prev =>
      prev.map(role =>
        role.id === roleId
          ? { ...role, isEnabled: !role.isEnabled }
          : role
      )
    );
  };

  const handleRename = (roleId: number, newName: string) => {
    if(!newName.trim()) return;
    setRoles(prev =>
      prev.map(role =>
        role.id === roleId
          ? { ...role, name: newName }
          : role
      )
    );
  };

  return (
  <div className="p-4 sm:p-6 bg-white dark:bg-gray-900 min-h-screen">
    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Server Roles
      </h1>
      <button
        className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        onClick={() => alert('Add role functionality to be implemented')}
      >
        Add Role
      </button>
    </div>

    <div className="space-y-4">
      {roles.map(role => (
        <RoleToggle
          key={role.id}
          name={role.name}
          color={role.color}
          isEnabled={role.isEnabled}
          onToggle={() => handleToggle(role.id)}
          onRename={(newName) => handleRename(role.id, newName)}
        />
      ))}
    </div>
  </div>
);
}