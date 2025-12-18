import React from 'react'
import Texniklar from './Texniklar/Texniklar.jsx'
import { Route, Routes } from 'react-router-dom'
import DetailDoctors from './Texniklar/DetailDoctors.jsx'
import MalumotBerish from './Texniklar/MalumotBerish.jsx'

function App() {
  return (
    <div>
  <div className='px-[100px] lg:px-10 md:px-6 sm:px-4 max-sm:px-3'>
      <Routes>
        <Route path="/texniklar" element={<Texniklar />} />
        <Route path="/shifokorlar" element={<DetailDoctors />} />
        <Route path="/malumot" element={<MalumotBerish />} />
      </Routes>
  </div>
    </div>
  )
}

export default App
