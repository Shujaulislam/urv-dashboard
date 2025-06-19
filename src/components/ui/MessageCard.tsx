
import { User, Trash2 } from 'lucide-react';

type MessageCardProps = {
  username: string;
  timestamp: string;
  content: string;
  onDelete: () => void;
};

export default function MessageCard({ username, timestamp, content, onDelete }: MessageCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
            <User className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </div>
          <div>
            <h3 className="font-medium">{username}</h3>
            <time className="text-sm text-gray-500 dark:text-gray-400">{timestamp}</time>
          </div>
        </div>
        <button
          onClick={onDelete}
          className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
          aria-label={`Delete message from ${username}`}
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
      <p className="mt-3 text-gray-700 dark:text-gray-300">{content}</p>
    </div>
  );
}