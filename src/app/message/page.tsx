'use client';

import MessageCard from '@/components/ui/MessageCard';
import { useState } from 'react';


type Message = {
  id: number;
  username: string;
  timestamp: string;
  content: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    username: 'JohnDoe',
    timestamp: '2024-01-20 10:30 AM',
    content: 'Hey everyone! Just wanted to introduce myself. I\'m new here!'
  },
  {
    id: 2,
    username: 'AliceSmith',
    timestamp: '2024-01-20 10:32 AM',
    content: 'Welcome John! Great to have you here. Feel free to ask any questions!'
  },
  {
    id: 3,
    username: 'BobJohnson',
    timestamp: '2024-01-20 10:35 AM',
    content: 'Has anyone checked out the new features in the latest update? They\'re pretty awesome!'
  },
  {
    id: 4,
    username: 'EmilyBrown',
    timestamp: '2024-01-20 10:40 AM',
    content: 'Yes, the new UI is much more intuitive. Really loving the dark mode especially!'
  },
  {
    id: 5,
    username: 'MikeWilson',
    timestamp: '2024-01-20 10:45 AM',
    content: 'Quick reminder: We have a community event this weekend. Don\'t forget to RSVP!'
  }
];

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleDelete = (messageId: number) => {
    setMessages(prev => prev.filter(message => message.id !== messageId));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Messages</h1>
        <div className="flex gap-4">
          <select 
            className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            defaultValue="all"
          >
            <option value="all">All Messages</option>
            <option value="announcements">Announcements</option>
            <option value="general">General</option>
          </select>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            onClick={() => alert('New message functionality to be implemented')}
          >
            New Message
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {messages.map(message => (
          <MessageCard
            key={message.id}
            username={message.username}
            timestamp={message.timestamp}
            content={message.content}
            onDelete={() => handleDelete(message.id)}
          />
        ))}
      </div>
    </div>
  );
}