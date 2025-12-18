import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
      {/* Spinner animatsiyasi */}
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-[#00C2FF]/20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-t-[#00C2FF] rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-gray-400 font-medium animate-pulse">Yuklanmoqda...</p>
    </div>
  );
};

export default Loading;
