import React, { useState } from 'react';
import { Settings, FlaskConical, Trash2, MoreHorizontal} from 'lucide-react';
import { Link } from 'react-router-dom';
import Chair from "../assets/chair.png";
import Logo from "../assets/logo.png";
import { Search, Bell } from "lucide-react";

function DetailDoctors() {
  const xizmatlar = [
    {
      id: 1,
      title: "Sun'iy tish protezlari tayyorlash",
      bgColor: "bg-[#E3F2FD]",
      image: "https://cdn-icons-png.flaticon.com/512/3467/3467554.png"
    },
    {
      id: 2,
      title: "Breket tayyorlash",
      bgColor: "bg-[#E3F2FD]",
      image: "https://cdn-icons-png.flaticon.com/512/2818/2818203.png"
    },
    {
      id: 3,
      title: "Vinir va kappar tayyorlash",
      bgColor: "bg-[#E8F5E9]",
      image: "https://cdn-icons-png.flaticon.com/512/1041/1041078.png"
    },
    {
      id: 4,
      title: "Protezlarni ta'mirlash va qayta ishlash",
      bgColor: "bg-[#E3F2FD]",
      image: "https://cdn-icons-png.flaticon.com/512/3467/3467814.png"
    }
  ];
    const [searchTerm, setSearchTerm] = useState("");
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slides = [
    {
      title: "Eng yaxshi uskunalarni\nbizdan topasiz",
      description:
        "Bizning mahsulotlar sifatli, ishonchli va qulay narxlarda!",
    },
    {
      title: "Professional stomatologiya\nasboblari",
      description:
        "Yuqori sifatli texnika va ishonchli xizmat.",
    },
  ];

  const materiallar = [
    { id: 1, name: "Metall", icon: <Settings className="text-[#00BCD4] w-6 h-6" /> },
    { id: 2, name: "Keramika", icon: <FlaskConical className="text-[#00BCD4] w-6 h-6" /> },
    { id: 3, name: "Plastmassa", icon: <Trash2 className="text-[#00BCD4] w-6 h-6" /> },
    { id: 4, name: "Boshqa", icon: <MoreHorizontal className="text-[#00BCD4] w-6 h-6" /> },
  ];

  return (
    <div className="w-full bg-white min-h-screen flex flex-col">

        <header className="py-4 sticky top-0 bg-white z-30">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Shifokor qidirish..."
                className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-2xl outline-none"
              />
            </div>
            <button className="p-3 bg-gray-100 rounded-xl">
              <Bell />
            </button>
          </div>
        </header>
        {/* Hero Banner with Swiper */}
        <section className="py-6">
          <div className="relative group">
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 h-[300px] md:h-[450px] p-8 md:p-16 flex items-center relative">

                      <div className="w-full md:w-1/2 z-10">
                      <img src={Logo} className="w-52 transform max-sm:w-32 translate-x-[-12px]" alt="" />
                        <h2 className="text-2xl md:text-5xl font-extrabold text-white mb-4 leading-tight whitespace-pre-line">
                          {slide.title}
                        </h2>
                        <p className="text-sm md:text-lg text-cyan-50 mb-8 max-w-md">
                          {slide.description}
                        </p>
                      </div>
                      {/* Dental Chair Illustration */}
                      <div className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 w-1/2 flex justify-end">
                        <img
                          src={Chair}
                          alt="Dental Chair"
                          className="h-48 md:h-[350px] object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Navigation Buttons (Visible on Hover) */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/30 hover:bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center z-20 transition-all opacity-0 group-hover:opacity-100 shadow-lg">
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/30 hover:bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center z-20 transition-all opacity-0 group-hover:opacity-100 shadow-lg">
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          {/* Pagination dots */}
          <div className="flex justify-center gap-3 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'w-10 bg-cyan-500' : 'w-2.5 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </section>

      <div className="flex-grow">
        {/* Xizmatlar Bo'limi */}
        <Link to="/malumot">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#333] mb-6">Xizmatlar</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {xizmatlar.map((item) => (
                <div
                key={item.id}
                className={`${item.bgColor} rounded-[32px] p-5 md:p-8 h-44 md:h-60 relative flex flex-col justify-start transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group`}
                >
                <h3 className="text-[15px] md:text-xl font-bold text-[#2C3E50] leading-tight z-10 max-w-[80%]">
                  {item.title}
                </h3>
                <div className="absolute bottom-4 right-4 w-16 h-16 md:w-28 md:h-28 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
              </div>
            ))}
          </div>
        </section>
            </Link>

        {/* Materiallar Bo'limi */}
        <section className="">
          <h2 className="text-2xl md:text-3xl font-bold text-[#333] mb-6">Materiallar</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {materiallar.map((mat) => (
              <div
                key={mat.id}
                className="bg-white rounded-2xl p-4 md:p-6 flex items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 hover:border-cyan-200 transition-all cursor-pointer"
              >
                <div className="bg-[#F8F9FA] p-3 rounded-xl">
                  {mat.icon}
                </div>
                <span className="text-sm md:text-lg font-bold text-gray-700">{mat.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Buyurtma berish Tugmasi */}
      <div className="pb-10 mt-10 flex justify-center">
        <button className="w-full md:w-auto md:min-w-[400px] bg-[#00BCD4] hover:bg-[#00ACC1] text-white text-lg md:text-xl font-bold py-4 md:py-5 px-10 rounded-2xl md:rounded-3xl shadow-lg shadow-cyan-200 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-3">
          Buyurtma berish
        </button>
      </div>

    </div>
  );
}

export default DetailDoctors;
