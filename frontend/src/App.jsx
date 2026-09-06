import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import MovieList from './components/MovieList'
import Category from "./assets/Categoy"
import WatchPage from './components/WatchPage' // Yangi sahifamiz

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home' yoki 'watch'
  const [selectedMovie, setSelectedMovie] = useState(null);

  // "Tomosha qilish" bosilganda ishlaydigan mantiq
  const handleWatchMovie = (movie) => {
    setSelectedMovie(movie);
    setCurrentScreen('watch'); // Sahifani WatchPage-ga o'zgartiradi
    window.scrollTo(0, 0); // Sahifani tepaga ko'taradi
  };

  return (
    <div style={{ backgroundColor: '#111', minHeight: '100vh', boxSizing: 'border-box' }}>
      {/* Navbar har doim tepada turadi */}
      <Navbar />
      
      {/* AGAR CURRENT SCREEN HOME BO'LSA - BOSH SAHIFA KO'RINADI */}
      {currentScreen === 'home' && (
        <div style={{ paddingTop: '70px' }}>
          <Slider onWatchMovie={handleWatchMovie} />
          <MovieList onWatchMovie={handleWatchMovie} />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '60px', paddingBottom: '40px' }}>
            <Category />
          </div>
        </div>
      )}

      {/* AGAR CURRENT SCREEN WATCH BO'LSA - ALOHIDA KINO KO'RISH OYNASI OCHILADI */}
      {currentScreen === 'watch' && selectedMovie && (
        <div style={{ paddingTop: '90px' }}>
          <WatchPage 
            movie={selectedMovie} 
            onBack={() => setCurrentScreen('home')} // Orqaga qaytish tugmasi
          />
        </div>
      )}
    </div>
  )
}

export default App
