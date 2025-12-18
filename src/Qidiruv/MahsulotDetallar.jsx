import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { stomatologiyaKatalogi } from './MalumotlarStatik';
import { FaArrowLeft, FaHeart, FaShareAlt, FaTruck, FaCheckCircle } from 'react-icons/fa';

const MahsulotDetallar = () => {
  const { categoryKey, subKey, productId } = useParams();
  const navigate = useNavigate();

  // Mahsulotni ierarxiya bo'yicha topish
  const product = stomatologiyaKatalogi[categoryKey]?.items[subKey]?.find(i => i.id === parseInt(productId));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-10 text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Mahsulot topilmadi!</h2>
        <button
          onClick={() => navigate('/kategoriyalar')}
          className="bg-blue-500 text-white px-6 py-2 rounded-xl"
        >
          Katalogga qaytish
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-32">
      {/* Yuqori Navigatsiya paneli */}
      <div className="flex items-center justify-between p-4 sticky top-0 bg-white/80 backdrop-blur-md z-30">
        <div
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors"
        >
          <FaArrowLeft size={20} className="text-gray-800" />
        </div>
        <div className="flex gap-4">
          <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
            <FaHeart size={22} className="text-gray-400 hover:text-red-500 transition-colors" />
          </div>
          <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
            <FaShareAlt size={22} className="text-gray-400 hover:text-blue-500 transition-colors" />
          </div>
        </div>
      </div>

      {/* Mahsulot Rasmi bo'limi */}
      <div className="w-full h-80 bg-[#F9F9F9] flex items-center justify-center px-6 mb-6">
        <img
          src={product.image}
          alt={product.nomi}
          className="max-w-full max-h-full bg-red object-contain mix-blend-multiply"
          onError={(e) => { e.target.src = "https://via.placeholder.com/400x400?text=Rasm+mavjud+emas" }}
        />
      </div>

      {/* Mahsulot ma'lumotlari */}
      <div className="px-6">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-2 leading-tight tracking-tight uppercase">
          {product.nomi}
        </h1>

        <p className="text-sm text-gray-400 mb-4">
          Artikul: <span className="text-[#00C2FF] font-semibold">{product.artikul}</span>
        </p>

        <div className="flex items-baseline gap-2 mb-8">
          <span className="text-3xl font-black text-gray-900">{product.narxi}</span>
          <span className="text-lg font-bold text-gray-900">sum</span>
        </div>

        {/* Yetkazib berish info bo'limi */}
        <div className="flex items-center gap-4 bg-[#F2FBF9] p-4 rounded-[20px] mb-8 border border-green-50">
          <div className="bg-white p-3 rounded-xl shadow-sm">
            <FaTruck className="text-[#27AE60]" size={20} />
          </div>
          <div>
            <p className="font-bold text-gray-900 leading-tight">Dostavka</p>
            <p className="text-[13px] text-gray-500 font-medium">Standartnaya dostavka ot 1 dney</p>
          </div>
        </div>

        {/* Tavsif bo'limi */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Описание товара</h3>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
              <p className="text-gray-600 font-medium leading-relaxed">
                {product.tavsif}
              </p>
            </div>

            {/* Qo'shimcha statik ma'lumot (dizayn uchun) */}
            <div className="pl-8 text-gray-500 text-sm space-y-1 font-medium">
              <p>• Komplektatsiya: Baza — 900 ml</p>
              <p>• Yuqori sifatli Germaniya texnologiyasi</p>
              <p>• Stomatologlar tavsiyasi bo'yicha</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pastki qotirilgan tugma (Savatga) */}
      <div className="fixed bottom-0 left-0 right-0 p-5 bg-white border-t border-gray-100 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] z-40">
        <button
          className="w-full py-4 bg-[#00C2FF] text-white rounded-[22px] font-bold text-lg shadow-lg shadow-blue-100 active:scale-[0.97] transition-all"
        >
          В корзину
        </button>
      </div>
    </div>
  );
};

export default MahsulotDetallar;
