
import { useState } from 'react';

type MemberFormProps = {
  onSubmit: (data: { username: string; role: string }) => void;
  onCancel: () => void;
};

const roles = ['Member', 'Moderator', 'Admin'];

export default function MemberForm({ onSubmit, onCancel }: MemberFormProps) {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('Member');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ username, role });
    setUsername('');
    setRole('Member');
  };

  return (
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label
        htmlFor="username"
        className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1"
      >
        Username
      </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 border rounded text-gray-900 dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
        minLength={3}
        maxLength={20}
        pattern="[a-zA-Z0-9_-]+"
        title="Username can only contain letters, numbers, underscores, and hyphens"
      />
    </div>

    <div>
      <label
        htmlFor="role"
        className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1"
      >
        Role
      </label>
      <select
        id="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full p-2 border rounded text-gray-900 dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
    </div>

    <div className="flex justify-end gap-4 mt-6">
      <button
        type="button"
        onClick={onCancel}
        aria-label="Cancel and close form"
        className="px-4 cursor-pointer py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
      >
        Cancel
      </button>
      <button
        type="submit"
        aria-label="Submit new member"
        className="px-4 cursor-pointer py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
        disabled={username.length < 3 || username.length > 20}
      >
        Add Member
      </button>
    </div>
  </form>
);
}