import React, { useState } from "react";
import Chair from "../assets/chair.png";
import Logo from "../assets/logo.png";
import DoctorCard from "./DoctorCard";
import { Search, Users, Megaphone, Bell } from "lucide-react";
import { RiToothLine } from "react-icons/ri";
import { MdGridView } from "react-icons/md";

const doctors = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1606813907291-d86efa6c94db",
    name: "Dr. Aliyev",
    job: "Stomatolog",
    rating: 4.8,
    distance: "1.2 km",
    price: "150 000",
    patients: 1200,
    exp: 8,
    service: true,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
    name: "Dr. Karimova",
    job: "Ortodont",
    rating: 4.6,
    distance: "2.5 km",
    price: "180 000",
    patients: 980,
    exp: 6,
    service: false,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
    name: "Dr. Usmonov",
    job: "Terapevt",
    rating: 4.7,
    distance: "0.8 km",
    price: "140 000",
    patients: 1500,
    exp: 10,
    service: true,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
    name: "Dr. Saidova",
    job: "Bolalar stomatologi",
    rating: 4.9,
    distance: "3.1 km",
    price: "160 000",
    patients: 2000,
    exp: 9,
    service: true,
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1550831107-1553da8c8464",
    name: "Dr. Rasulov",
    job: "Implantolog",
    rating: 4.5,
    distance: "4.0 km",
    price: "300 000",
    patients: 700,
    exp: 7,
    service: false,
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
    name: "Dr. Nasirova",
    job: "Parodontolog",
    rating: 4.6,
    distance: "2.0 km",
    price: "170 000",
    patients: 1100,
    exp: 5,
    service: false,
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    name: "Dr. Xolmatov",
    job: "Xirurg-stomatolog",
    rating: 4.9,
    distance: "1.5 km",
    price: "250 000",
    patients: 1600,
    exp: 11,
    service: true,
  },
];

function DentoGoApp() {
  const [activeTab, setActiveTab] = useState("texniklar");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

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

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <header className="p-4 sticky top-0 bg-white z-30">
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
        <section className="px-4 md:px-8 py-6">
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
        {/* Navigation Tabs / Categories */}
        <section className="px-4 md:px-8 pb-12">
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            {/* Nav Item Component for reusability */}
            {[
              { id: 'barchasi', label: 'Barchasi', Icon: MdGridView },
              { id: 'elonlar', label: 'Elonlar', Icon: Megaphone },
              { id: 'texniklar', label: 'Texniklar', Icon: RiToothLine },
              { id: 'ustalar', label: 'Ustalar', Icon: Users },
            ].map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex flex-col items-center gap-4
                }`}>
                <div className={`w-16 h-16 md:w-20 md:h-20 max-sm:w-14 max-sm:h-14 rounded-full flex border-2 items-center justify-center transition-all ${
                  activeTab === id ? 'bg-cyan-500 border-cyan-500 text-white shadow-lg' : 'bg-white border-cyan-500 text-cyan-500'
                }`}>
                  <Icon className="text-3xl md:text-4xl" />
                </div>
                <span className={`text-sm md:text-lg font-semibold ${
                  activeTab === id ? 'text-cyan-700' : 'text-gray-600'
                }`}>
                  {label}
                </span>
              </button>
            ))}
          </div>
        </section>
        {/* DOCTORS */}
        <section className="px-4 mt-6">
          <h2 className="text-xl font-semibold mb-4">
            Hozirda mavjud mutaxassislar
          </h2>
          <div className="grid max-[400px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} {...doctor} />
            ))}
            {filteredDoctors.length === 0 && (
              <p className="col-span-full text-center text-gray-500">
                "{searchTerm}" bo‘yicha shifokor topilmadi
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default DentoGoApp;
