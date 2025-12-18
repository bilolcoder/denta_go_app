import React from 'react';
import { FaWifi } from 'react-icons/fa';

const OfflineScreen = () => (
  <div className="fixed inset-0 bg-white z-[999] flex flex-col items-center justify-center p-6 text-center">
    <div className="bg-red-50 p-6 rounded-full mb-6">
      <FaWifi className="text-red-500 text-5xl" />
    </div>
    <h1 className="text-2xl font-bold text-gray-900 mb-2">Internet aloqasi yo'q</h1>
    <p className="text-gray-500 mb-8">
      Iltimos, tarmoqqa ulanishingizni tekshiring va qaytadan urinib ko'ring.
    </p>
    <button
      onClick={() => window.location.reload()}
      className="w-full max-w-xs py-4 bg-[#00C2FF] text-white rounded-2xl font-bold shadow-lg"
    >
      Sahifani yangilash
    </button>
  </div>
);

export default OfflineScreen;
