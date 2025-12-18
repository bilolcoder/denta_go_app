import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BottomNavbar from './Sitebar' // Yangi komponent

// Oldingi komponentlar
import Kategoriyalar from './Qidiruv/Kategoriyalar'
import KichikKategoriyalar from './Qidiruv/KichikKategoriyalar'
import Mahsulotlar from './Qidiruv/Mahsulotlar'
import MahsulotDetallar from './Qidiruv/MahsulotDetallar'

function App() {
  return (
    <div className="bg-white min-h-screen">
      {/* Sahifalar kontenti */}
      <div className="px-4 lg:px-10 pb-24 pt-4"> {/* pb-24 Navbar to'sib qo'ymasligi uchun */}
        <Routes>
          <Route path="/" element={<div>Bosh sahifa (Hali yaratilmagan)</div>} />
          <Route path="/kategoriyalar" element={<Kategoriyalar />} />
          <Route path="/kategoriyalar/:categoryKey" element={<KichikKategoriyalar />} />
          <Route path="/kategoriyalar/:categoryKey/:subKey" element={<Mahsulotlar />} />
          <Route path="/mahsulot/:categoryKey/:subKey/:productId" element={<MahsulotDetallar />} />
          <Route path="/savatcha" element={<div>Savatcha sahifasi</div>} />
          <Route path="/profil" element={<div>Profil sahifasi</div>} />
        </Routes>
      </div>
      <BottomNavbar />
    </div>
  )
}

export default App
