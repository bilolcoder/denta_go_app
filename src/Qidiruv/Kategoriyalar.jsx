import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { stomatologiyaKatalogi } from './MalumotlarStatik';
import { FaThLarge, FaChevronRight, FaSearch, FaBoxOpen } from 'react-icons/fa';

const Kategoriyalar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // 1. Kategoriyalarni filter qilish
  const filteredCategories = Object.keys(stomatologiyaKatalogi).filter((key) =>
    stomatologiyaKatalogi[key].sarlavha.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 2. Mahsulotlarni filter qilish (agar qidiruv bo'lsa)
  const allFoundProducts = [];
  if (searchTerm.length > 1) {
    Object.keys(stomatologiyaKatalogi).forEach(catKey => {
      Object.keys(stomatologiyaKatalogi[catKey].items).forEach(subKey => {
        stomatologiyaKatalogi[catKey].items[subKey].forEach(product => {
          if (product.nomi.toLowerCase().includes(searchTerm.toLowerCase())) {
            allFoundProducts.push({ ...product, catKey, subKey });
          }
        });
      });
    });
  }

  return (
    <div className="bg-white min-h-screen p-4 pb-24">
      <div className="text-center mb-6"><h1 className="text-xl font-bold">Qidiruv</h1></div>

      {/* Qidiruv inputi */}
      <div className="relative mb-8">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Mahsulot yoki kategoriya nomi..."
          className="w-full p-4 pl-12 rounded-2xl shadow-sm outline-none border border-transparent focus:border-blue-400 bg-white transition-all"
        />
      </div>

      {/* Qidiruv natijalari: Mahsulotlar (agar topilsa) */}
      {allFoundProducts.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-blue-600">Topilgan mahsulotlar ({allFoundProducts.length})</h2>
          <div className="space-y-3">
            {allFoundProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/mahsulot/${item.catKey}/${item.subKey}/${item.id}`)}
                className="flex items-center bg-white p-3 rounded-2xl shadow-sm border-l-4 border-blue-400 cursor-pointer active:scale-95 transition-all"
              >
                <img src={item.image} alt="" className="w-12 h-12 rounded-lg object-cover mr-4 bg-gray-100" />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-sm">{item.nomi}</h4>
                  <p className="text-xs text-gray-400">{item.narxi} sum</p>
                </div>
                <FaChevronRight className="text-gray-300" size={12} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Kategoriyalar ro'yxati */}
      <h2 className="text-lg font-bold mb-4">Kategoriyalar</h2>
      <div className="space-y-3">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((key) => (
            <div
              key={key}
              onClick={() => navigate(`/kategoriyalar/${key}`)}
              className="flex items-center bg-white p-4 rounded-2xl shadow-sm cursor-pointer active:scale-[0.98] transition-all border border-transparent hover:border-blue-100"
            >
              <div className="text-blue-500 mr-4 p-2 border border-blue-50 rounded-xl bg-blue-50">
                <FaThLarge size={22} />
              </div>
              <span className="flex-1 font-semibold text-gray-700">{stomatologiyaKatalogi[key].sarlavha}</span>
              <FaChevronRight className="text-gray-300" size={14} />
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-400">
            <FaBoxOpen size={40} className="mx-auto mb-2 opacity-20" />
            <p>Hech narsa topilmadi</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Kategoriyalar;
