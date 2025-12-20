import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BottomNavbar from './Sitebar'
import { CartProvider } from './CartContext' // 1. Providerni import qiling

// Komponentlar
import Kategoriyalar from './Qidiruv/Kategoriyalar'
import KichikKategoriyalar from './Qidiruv/KichikKategoriyalar'
import Mahsulotlar from './Qidiruv/Mahsulotlar'
import MahsulotDetallar from './Qidiruv/MahsulotDetallar'
import Savat from './Savat/Savat'

function App() {
  return (
    // 2. Hammasini CartProvider bilan o'rab chiqing
    <CartProvider>
      <div className="bg-white min-h-screen">
        <div className="px-4 lg:px-10 pb-24 pt-4">
          <Routes>
            <Route path="/" element={<div>Bosh sahifa (Hali yaratilmagan)</div>} />
            <Route path="/kategoriyalar" element={<Kategoriyalar />} />
            <Route path="/kategoriyalar/:categoryKey" element={<KichikKategoriyalar />} />
            <Route path="/kategoriyalar/:categoryKey/:subKey" element={<Mahsulotlar />} />
            <Route path="/mahsulot/:categoryKey/:subKey/:productId" element={<MahsulotDetallar />} />
            <Route path="/savatcha" element={<Savat />} />
            <Route path="/profil" element={<div>Profil sahifasi</div>} />
          </Routes>
        </div>
        <BottomNavbar />
      </div>
    </CartProvider>
  )
}

export default App
