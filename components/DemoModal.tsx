'use client';

import { X } from 'lucide-react';
import ContactForm from './ContactForm';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 transform transition-all">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Demandez votre démo gratuite
            </h2>
            <p className="text-gray-600">
              Découvrez comment Baguette & Bureau peut transformer votre activité B2B en 30 minutes.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
