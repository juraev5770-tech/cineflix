import React, { useState, useEffect } from 'react';

function Slider({ onWatchMovie }) {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://cineflix.loc/backend/movies', {
      headers: { 'Accept': 'application/json' }
    })
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

  useEffect(() => {
    if (movies.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [movies]);

  if (loading) return <div style={{ color: '#fff', textAlign: 'center', padding: '50px' }}>Karusel yuklanmoqda...</div>;
  if (movies.length === 0) return null;

  const currentMovie = movies[currentIndex];

  return (
    <div style={{
      position: 'relative', width: '100%', height: '80vh',
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1) 60%, #111 100%), url(${currentMovie.poster})`,
      backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', padding: '0 5%', boxSizing: 'border-box', transition: 'background-image 0.8s ease-in-out',
    }}>
      <div style={{ maxWidth: '600px', zIndex: 2 }}>
        <h1 style={{ fontSize: '56px', fontWeight: '800', margin: '0 0 15px 0', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', letterSpacing: '-1px' }}>
          {currentMovie.title}
        </h1>
        <p style={{ fontSize: '16px', color: '#e5e5e5', lineHeight: '1.6', margin: '0 0 30px 0', textShadow: '1px 1px 4px rgba(0,0,0,0.9)', fontWeight: '400' }}>
          {currentMovie.description}
        </p>
        <div style={{ display: 'flex', gap: '15px' }}>
          {/* BOSILGANDA ALOHIDA OYNAGA RELEASING QILADI */}
          <button 
            onClick={() => onWatchMovie(currentMovie)} 
            style={{ padding: '14px 32px', background: '#E50914', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: '0.2s', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 15px rgba(229,9,20,0.4)' }}
            onMouseEnter={(e) => e.target.style.background = '#b81d24'}
            onMouseLeave={(e) => e.target.style.background = '#E50914'}
          >
            ▶ Tomosha qilish
          </button>
          <button 
            onClick={() => alert(`Reyting: ⭐ ${currentMovie.rating}\nYil: ${currentMovie.release_year}`)}
            style={{ padding: '14px 32px', background: 'rgba(109, 109, 110, 0.7)', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: '0.2s', backdropFilter: 'blur(4px)' }}
          >
            ℹ Batafsil
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
