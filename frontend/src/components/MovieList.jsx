import React, { useState, useEffect } from 'react';

// 1-TO'G'IRLASH: Bosh sahifadan alohida oynaga o'tish uchun onWatchMovie propini qabul qilamiz
function MovieList({ onWatchMovie }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);

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

  if (loading) return <div style={{ color: '#fff', padding: '40px 5%', fontSize: '18px', textAlign: 'center' }}>Kinolar yuklanmoqda...</div>;
  if (movies.length === 0) return null;

  return (
    <div style={{ padding: '0 5%', marginTop: '50px', boxSizing: 'border-box' }}>
      <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: '800', marginBottom: '25px', letterSpacing: '0.5px' }}>
        Barcha kinolar
      </h2>
      
      {/* Premium Grid Tizimi */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '25px', width: '100%'
      }}>
        {movies.map((movie) => {
          const isHovered = hoveredId === movie.id;
          return (
            <div 
              key={movie.id}
              // 2-TO'G'IRLASH: Karta bosilganda g'alati modalni emas, to'g'ridan-to'g'ri o'sha yangi chiroyli sahifani ochadi
              onClick={() => onWatchMovie(movie)}
              onMouseEnter={() => setHoveredId(movie.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                background: '#181818', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer',
                boxShadow: isHovered ? '0 15px 30px rgba(0,0,0,0.8)' : '0 4px 15px rgba(0,0,0,0.5)',
                transform: isHovered ? 'scale(1.04) translateY(-6px)' : 'scale(1)',
                transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                border: isHovered ? '1px solid #E50914' : '1px solid #252525', position: 'relative'
              }}
            >
              {/* Poster qismi */}
              <div style={{ width: '100%', height: '320px', overflow: 'hidden', position: 'relative' }}>
                <img src={movie.poster} alt={movie.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', transform: isHovered ? 'scale(1.06)' : 'scale(1)' }} />
                <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(229, 9, 20, 0.85)', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', backdropFilter: 'blur(5px)' }}>⭐ {movie.rating || '0.0'}</div>
                <div style={{ position: 'absolute', bottom: '12px', left: '12px', background: 'rgba(0, 0, 0, 0.6)', color: '#fff', padding: '3px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '600' }}>{movie.release_year}</div>
              </div>

              {/* Ma'lumot qismi */}
              <div style={{ padding: '15px', color: '#fff' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 6px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{movie.title}</h3>
                <p style={{ fontSize: '13px', color: '#aaa', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis', lineHeight: '1.4' }}>{movie.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;
