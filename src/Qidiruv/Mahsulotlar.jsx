import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { stomatologiyaKatalogi } from './MalumotlarStatik';
import { useCart } from '../CartContext';
import { FaArrowLeft, FaHeart, FaShoppingBag, FaCheckCircle } from 'react-icons/fa';

// Ichki Notification komponenti
const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // 4 soniyadan 3 soniyaga qisqartiramiz
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="bg-white border-l-4 border-blue-500 shadow-2xl rounded-2xl p-4 flex items-center gap-4 border border-gray-100">
        <div className="bg-blue-50 p-2 rounded-full">
          <FaCheckCircle className="text-blue-500" size={20} />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-sm">Tabriklayman!</h4>
          <p className="text-xs text-gray-500">{message}</p>
        </div>
      </div>
    </div>
  );
};

const Mahsulotlar = () => {
  const { categoryKey, subKey } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);
  const [addedProductId, setAddedProductId] = useState(null); // Qo'shilgan mahsulot ID sini saqlash

  const category = stomatologiyaKatalogi[categoryKey];
  const subCategory = category?.subCategories.find(s => s.id === subKey);
  const items = category?.items[subKey] || [];

  const handleAddToCart = (item, e) => {
    e.stopPropagation();

    // Mahsulotni savatga qo'shish
    addToCart({
      ...item,
      categoryKey,
      subKey,
    });

    // Notification va ID ni saqlash
    setAddedProductId(item.id);
    setShowNotification(true);

    // 1.5 soniyadan so'ng savat sahifasiga o'tish
    setTimeout(() => {
      navigate('/savatcha');
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen p-4 pb-24">
      {showNotification && (
        <Notification
          message="Mahsulot savatga qo'shildi va savat sahifasiga yo'naltirilmoqda..."
          onClose={() => setShowNotification(false)}
        />
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div
          onClick={() => navigate(-1)}
          className="p-2 bg-white rounded-xl cursor-pointer active:scale-90"
        >
          <FaArrowLeft className="text-gray-700" size={18} />
        </div>
        <h1 className="text-xl font-bold text-gray-900">{subCategory?.nomi || "Mahsulotlar"}</h1>
        <div
          onClick={() => navigate('/savatcha')}
          className="p-2 bg-white rounded-xl shadow-sm relative cursor-pointer active:scale-90"
        >
          <FaShoppingBag className="text-gray-700" size={18} />
          {/* Savatdagi mahsulotlar soni */}
          <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            0
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/mahsulot/${categoryKey}/${subKey}/${item.id}`)}
            className="bg-white p-3 rounded-[28px] shadow-sm relative flex flex-col active:scale-[0.98] transition-all cursor-pointer"
          >
            {/* Qo'shilgan mahsulotni belgilash */}
            {addedProductId === item.id && showNotification && (
              <div className="absolute inset-0 bg-green-500/10 border-2 border-green-500 rounded-[28px] z-10 animate-pulse pointer-events-none"></div>
            )}

            <div className="absolute top-4 right-4 z-10 bg-white/80 p-1.5 rounded-full shadow-sm">
               <FaHeart className="text-gray-300 hover:text-red-500" size={16} />
            </div>

            <div className="h-36 mb-3 bg-[#F9F9F9] rounded-2xl flex items-center justify-center overflow-hidden">
               <img src={item.image} alt={item.nomi} className="w-full h-full object-cover" />
            </div>

            <div className="px-1">
              <h3 className="text-[14px] font-semibold text-gray-800 mb-1 h-10 overflow-hidden leading-tight">
                {item.nomi}
              </h3>

              <div className="flex flex-col mb-3">
                <span className="text-[11px] text-gray-400">Artikul: {item.artikul}</span>
                <p className="text-[16px] font-black text-gray-900">{item.narxi} sum</p>
              </div>

              <button
                onClick={(e) => handleAddToCart(item, e)}
                className={`w-full py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 text-xs active:scale-95 transition-all ${
                  addedProductId === item.id && showNotification
                    ? 'bg-green-500 text-white'
                    : 'bg-[#E8F4FF] text-[#0085FF] hover:bg-blue-100'
                }`}
              >
                <FaShoppingBag size={14} />
                {addedProductId === item.id && showNotification ? 'Qo\'shildi!' : 'Savatga'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mahsulotlar;
