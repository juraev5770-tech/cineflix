import React, { useState, useEffect } from 'react';

function Slider() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1-TO'G'IRLASH: API manzili to'g'ri ko'rinishga keltirildi (/movies qo'shildi)
    fetch('http://cineflix.loc/backend/movies', {
      headers: { 'Accept': 'application/json' }
    }) // <-- Mana shu yerda yopuvchi qavslar bo'lishi SHART!

      .then(res => res.json())
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Kinolar yuklanishida xato:", err);
        setLoading(false);
      });
  }, []);

  // Karuselni har 5 sekundda avtomatik aylantirish
  useEffect(() => {
    if (movies.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [movies]);

  if (loading) return <div style={{ color: '#fff', textAlign: 'center', padding: '50px' }}>Karusel yuklanmoqda...</div>;
  if (movies.length === 0) return <div style={{ color: '#aaa', textAlign: 'center', padding: '50px', background: '#1c1c1c', margin: '20px 5%', borderRadius: '8px' }}>Karusel uchun kinolar topilmadi. (Bazadagi movies jadvali bo'sh)</div>;

  const currentMovie = movies[currentIndex];

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '75vh',
      // 2-TO'G'IRLASH: currentMovie.image o'rniga siz ochgan currentMovie.poster o'rnatildi
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1) 60%, #111 100%), url(${currentMovie.poster || 'https://unsplash.com'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      padding: '0 5%',
      boxSizing: 'border-box',
      transition: 'background-image 0.8s ease-in-out',
    }}>
      {/* Kino haqida ma'lumot qismi */}
      <div style={{ maxWidth: '600px', zIndex: 2 }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 15px 0', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
          {currentMovie.title || "Kino Nomi"}
        </h1>
        <p style={{ fontSize: '16px', color: '#e5e5e5', lineHeight: '1.5', margin: '0 0 25px 0', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
          {currentMovie.description || "Ushbu kino haqida qisqacha ma'lumot yoki opisaniya bu yerda aks etadi."}
        </p>
        
        {/* Tugmalar */}
        <div style={{ display: 'flex', gap: '15px' }}>
          <button 
            onClick={() => alert(`"${currentMovie.title}" tomosha qilish boshlandi!`)}
            style={{ padding: '12px 30px', background: '#E50914', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: '0.2s' }}
            onMouseEnter={(e) => e.target.style.background = '#b81d24'}
            onMouseLeave={(e) => e.target.style.background = '#E50914'}
          >
            ▶ Tomosha qilish
          </button>
          <button 
            onClick={() => alert(`Kino ID-si: ${currentMovie.id}\nChiqarilgan yili: ${currentMovie.release_year}\nReyting: ${currentMovie.rating}`)}
            style={{ padding: '12px 30px', background: 'rgba(109, 109, 110, 0.7)', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: '0.2s' }}
            onMouseEnter={(e) => e.target.style.background = 'rgba(109, 109, 110, 0.4)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(109, 109, 110, 0.7)'}
          >
            ℹ Batafsil
          </button>
        </div>
      </div>

      {/* Karuselning pastki nuqtalari (Dots) */}
      <div style={{ position: 'absolute', bottom: '25px', right: '5%', display: 'flex', gap: '10px', zIndex: 2 }}>
        {movies.map((_, index) => (
          <span 
            key={index} 
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: index === currentIndex ? '#E50914' : '#aaa',
              cursor: 'pointer',
              transition: 'background 0.3s'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
