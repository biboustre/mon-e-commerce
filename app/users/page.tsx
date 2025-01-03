import React from 'react';

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-t from-yellow-400 via-red-500 to-pink-500 -z-10"></div>
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        {Array.from({ length: 30 }).map((_, index) => (
          <button key={index} className="rounded bg-black block p-5 text-white">
            test ME&apos;QR
          </button>
        ))}
      </div>
    </div>
  );
}