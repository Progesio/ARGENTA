import { useState } from 'react';

interface LoadingOverlayProps {
  isLoading: boolean;
}

export default function LoadingOverlay({ isLoading }: LoadingOverlayProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-[9999] transition-opacity duration-300">
      <div className="flex flex-col items-center">
        <svg 
          className="animate-spin h-12 w-12 text-red-900 mb-4" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8v8z"
          />
        </svg>
        <span className="text-white text-lg font-semibold">Memuat halaman...</span>
      </div>
    </div>
  );
}
