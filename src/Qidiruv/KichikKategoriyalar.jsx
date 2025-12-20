import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { stomatologiyaKatalogi } from './MalumotlarStatik';
import { FaThLarge, FaChevronRight, FaArrowLeft } from 'react-icons/fa';

const KichikKategoriyalar = () => {
  const { categoryKey } = useParams();
  const navigate = useNavigate();
  const category = stomatologiyaKatalogi[categoryKey];

  return (
    <div className="bg-white min-h-screen p-4">
      <div className="flex items-center mb-6">
        <FaArrowLeft onClick={() => navigate('/kategoriyalar')} className="mr-4 cursor-pointer" />
        <h1 className="text-xl font-bold flex-1 text-center">Qidiruv natijalari</h1>
      </div>
      <div className="space-y-3">
        {category?.subCategories.map((sub) => (
          <div key={sub.id} onClick={() => navigate(`/kategoriyalar/${categoryKey}/${sub.id}`)} className="flex items-center bg-white p-4 rounded-2xl shadow-sm cursor-pointer active:scale-99 transition-all">
            <div className="text-blue-500 mr-4 p-2 border border-blue-50 rounded-xl bg-blue-50">
              <FaThLarge size={22} />
            </div>
            <span className="flex-1 font-medium text-gray-700">{sub.nomi}</span>
            <FaChevronRight className="text-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default KichikKategoriyalar;
