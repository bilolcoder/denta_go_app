import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { stomatologiyaKatalogi } from './MalumotlarStatik';
import { FaArrowLeft, FaHeart, FaShoppingBag } from 'react-icons/fa';

const Mahsulotlar = () => {
  const { categoryKey, subKey } = useParams();
  const navigate = useNavigate();

  // Ma'lumotlarni statik fayldan olish
  const category = stomatologiyaKatalogi[categoryKey];
  const subCategory = category?.subCategories.find(s => s.id === subKey);
  const items = category?.items[subKey] || [];

  return (
    <div className="bg-white min-h-screen p-4">
      {/* Header qismi */}
      <div className="flex items-center justify-between mb-6">
        <div
          onClick={() => navigate(-1)}
          className="p-2 bg-white rounded-xl cursor-pointer active:scale-90 transition-all"
        >
          <FaArrowLeft className="text-gray-700" size={18} />
        </div>
        <h1 className="text-xl font-bold text-gray-900">{subCategory?.nomi || "Mahsulotlar"}</h1>
        <div className="p-2 bg-white rounded-xl relative">
          <FaShoppingBag className="text-gray-700" size={18} />
        </div>
      </div>

      {/* Mahsulotlar Gridi */}
      <div className="grid grid-cols-2 gap-4 pb-20">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/mahsulot/${categoryKey}/${subKey}/${item.id}`)}
            className="bg-white p-3 rounded-[28px] shadow-sm relative flex flex-col cursor-pointer active:scale-[0.97] transition-all border border-transparent hover:border-blue-100"
          >
            {/* Yoqtirganlar tugmasi */}
            <div className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm">
               <FaHeart className="text-gray-300 hover:text-red-500 transition-colors" size={16} />
            </div>

            {/* Mahsulot Rasmi */}
            <div className="h-36 mb-3 bg-[#F9F9F9] rounded-2xl flex items-center justify-center overflow-hidden">
               <img
                 src={item.image}
                 alt={item.nomi}
                 className="w-full h-full object-cover"
                 onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=No+Image" }}
               />
            </div>

            {/* Mahsulot Ma'lumotlari */}
            <div className="px-1">
              <h3 className="text-[14px] font-semibold text-gray-800 mb-1 h-10 overflow-hidden leading-tight">
                {item.nomi}
              </h3>

              <div className="flex flex-col mb-3">
                <span className="text-[12px] text-gray-400 font-medium tracking-tight">Artikul: {item.artikul}</span>
                <p className="text-[17px] font-black text-gray-900">{item.narxi} sum</p>
              </div>

              {/* Savatga tugmasi */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Kartochka bosilishini to'xtatish
                  alert("Savatga qo'shildi!");
                }}
                className="w-full py-2.5 bg-[#E8F4FF] text-[#0085FF] rounded-xl font-bold flex items-center justify-center gap-2 text-xs active:bg-blue-200 transition-colors"
              >
                <FaShoppingBag size={14} /> Savatga
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Agar mahsulot bo'lmasa */}
      {items.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 font-medium">Bu bo'limda hozircha mahsulotlar yo'q.</p>
        </div>
      )}
    </div>
  );
};

export default Mahsulotlar;
