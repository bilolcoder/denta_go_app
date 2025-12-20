import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CartProvider } from './CartContext'
import BottomNavbar from './Sitebar'
import Kategoriyalar from './Qidiruv/Kategoriyalar'
import KichikKategoriyalar from './Qidiruv/KichikKategoriyalar'
import Mahsulotlar from './Qidiruv/Mahsulotlar'
import MahsulotDetallar from './Qidiruv/MahsulotDetallar'
import Savat from './Savat/Savat'

function App() {
  return (
    <CartProvider>
      <div className="bg-white min-h-screen">
        <div className="pb-24 pt-4">
          <Routes>
            <Route path="/" element={<Kategoriyalar />} />
            <Route path="/kategoriyalar" element={<Kategoriyalar />} />
            <Route path="/kategoriyalar/:categoryKey" element={<KichikKategoriyalar />} />
            <Route path="/kategoriyalar/:categoryKey/:subKey" element={<Mahsulotlar />} />
            <Route path="/mahsulot/:categoryKey/:subKey/:productId" element={<MahsulotDetallar />} />
            <Route path="/savatcha" element={<Savat />} />
            <Route path="/profil" element={<div className="p-10 text-center">Profil sahifasi</div>} />
          </Routes>
        </div>
        <BottomNavbar />
      </div>
    </CartProvider>
  )
}

export default App
