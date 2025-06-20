
type RoleToggleProps = {
  name: string;
  color: string;
  isEnabled: boolean;
  onToggle: () => void;
  onRename: (newName: string) => void;
};

export default function RoleToggle({ name, color, isEnabled, onToggle, onRename }: RoleToggleProps) {
  return (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-colors">
    <div className="flex items-center gap-3 w-full sm:w-auto">
      <div
        className="w-4 h-4 rounded-full flex-shrink-0"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      <input
        type="text"
        value={name}
        onChange={(e) => onRename(e.target.value)}
        className="flex-1 bg-transparent border-b border-transparent 
        text-gray-900 dark:text-white 
        hover:border-gray-300 dark:hover:border-gray-600 
        focus:border-blue-500 dark:focus:border-blue-400 
        focus:outline-none py-1 transition-colors duration-200 ease-in-out"
        aria-label={`Rename ${name} role`}
      />
    </div>

    <div className="flex justify-end sm:justify-start">
      <button
        role="switch"
        aria-checked={isEnabled}
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none 
          focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            isEnabled ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-700"
          }`}
      >
        <span className="sr-only">Enable {name} role</span>
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isEnabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  </div>
);
}