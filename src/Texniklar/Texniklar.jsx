import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Chair from "../assets/chair.png";
import Logo from "../assets/logo.png";
import DoctorCard from "./DoctorCard"; // Shu fayl mavjudligini tekshiring
import { Search, Users, Megaphone, Bell } from "lucide-react";
import { RiToothLine } from "react-icons/ri";
import { MdGridView } from "react-icons/md";

// MA'LUMOTLAR BO'LISHI SHART
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
  const [searchTerm, setSearchTerm] = useState("");

  const slides = [
    {
      title: "Eng yaxshi uskunalarni\nbizdan topasiz",
      description: "Bizning mahsulotlar sifatli, ishonchli va qulay narxlarda!",
    },
    {
      title: "Professional stomatologiya\nasboblari",
      description: "Yuqori sifatli texnika va ishonchli xizmat.",
    },
  ];

  // Qidiruv mantiqi
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

        {/* SWIPER BANNER */}
        <section className="px-4 md:px-8 py-6">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="rounded-[32px] overflow-hidden shadow-xl"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 h-[300px] md:h-[450px] p-8 md:p-16 flex items-center relative overflow-hidden">
                  <div className="w-full md:w-1/2 z-10">
                    <img src={Logo} className="w-40 md:w-52 mb-4 -ml-2" alt="Logo" />
                    <h2 className="text-2xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-sm md:text-lg text-cyan-50 mb-8 max-w-md">{slide.description}</p>
                  </div>
                  <div className="absolute right-0 md:right-16 top-1/2 -translate-y-1/2 w-1/2 flex justify-end">
                    <img src={Chair} alt="Chair" className="h-48 md:h-[380px] object-contain" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* TABS */}
        <section className="px-4 md:px-8 pb-12">
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            {[
              { id: 'barchasi', label: 'Barchasi', Icon: MdGridView },
              { id: 'elonlar', label: 'Elonlar', Icon: Megaphone },
              { id: 'texniklar', label: 'Texniklar', Icon: RiToothLine },
              { id: 'ustalar', label: 'Ustalar', Icon: Users },
            ].map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className="flex flex-col items-center gap-4"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex border-2 items-center justify-center transition-all ${
                  activeTab === id ? 'bg-cyan-500 border-cyan-500 text-white shadow-lg' : 'bg-white border-cyan-500 text-cyan-500'
                }`}>
                  <Icon className="text-3xl md:text-4xl" />
                </div>
                <span className={`text-sm md:text-lg font-semibold ${activeTab === id ? 'text-cyan-700' : 'text-gray-600'}`}>
                  {label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* DOCTORS LIST (BU YERDA DOCTORCARD CHIQISHI KERAK) */}
        <section className="px-4 mt-6 pb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Hozirda mavjud mutaxassislar
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} {...doctor} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 py-10">
                Mutaxassislar topilmadi
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default DentoGoApp;
