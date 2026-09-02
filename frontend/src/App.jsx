import React from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Category from './assets/Categoy'

const App = () => {
  return (
    <div style={{ backgroundColor: '#111', minHeight: '100vh', paddingBottom: '50px', boxSizing: 'border-box' }}>
      {/* Navbar eng tepada */}
      <Navbar />
      
      {/* Karusel / Slider (Tepada to'liq ekran) */}
      <div style={{ marginTop: '70px' }}>
        <Slider />
      </div>
      
      {/* Pastki qismda Kategoriyalar */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
        <Category />
      </div>
    </div>
  )
}

export default App
