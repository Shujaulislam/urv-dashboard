'use client';

import MemberForm from '@/components/ui/MemberForm';
import MemberTable from '@/components/ui/MemberTable';
import Modal from '@/components/ui/Modal';
import { useState } from 'react';

export default function MembersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddMember = (data: { username: string; role: string }) => {
    console.log('Adding member:', data);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Members</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          onClick={() => setIsModalOpen(true)}
        >
          Add Member
        </button>
      </div>

      <MemberTable />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Member"
      >
        <MemberForm
          onSubmit={handleAddMember}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
}
