import React, { useState, useRef } from 'react';

function WatchPage({ movie, onBack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const videoRef = useRef(null);

  // Resume / Pause funksiyasi
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // Fullscreen (To'liq ekran) funksiyasi
  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) videoRef.current.requestFullscreen();
      else if (videoRef.current.webkitRequestFullscreen) videoRef.current.webkitRequestFullscreen();
      else if (videoRef.current.msRequestFullscreen) videoRef.current.msRequestFullscreen();
    }
  };

  // Tezlikni o'zgartirish funksiyasi (0.5x, 1x, 1.5x, 2x)
  const handleSpeedChange = (speed) => {
    setPlaybackRate(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  return (
    <div style={{ padding: '40px 5%', color: '#fff', minHeight: '100vh', background: '#111', boxSizing: 'border-box' }}>
      
      {/* Orqaga qaytish tugmasi */}
      <button 
        onClick={onBack}
        style={{ background: 'none', border: 'none', color: '#E50914', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}
      >
        ← Bosh sahifaga qaytash
      </button>

      {/* Kino Nomi */}
      <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '10px' }}>{movie.title}</h1>
      <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '30px' }}>Yil: {movie.release_year} | Davomiyligi: {movie.duration} min | Reyting: ⭐ {movie.rating}</p>

      {/* ASOSIY PROFESSIONAL PLEYER JOYI */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1100px', aspectRatio: '16/9', background: '#000', borderRadius: '12px', overflow: 'hidden', border: '1px solid #252525', boxShadow: '0 20px 40px rgba(0,0,0,0.7)', margin: '0 auto' }}>
        
        {/* Haqiqiy HTML5 Video tegi */}
        <video
          ref={videoRef}
          src={movie.video_url}
          controlsList="nodownload"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          onClick={handlePlayPause}
        />

        {/* RESUME / PLAY OVERLAY (Kino hali qo'yilmaganda turadigan katta chiroyli tugma) */}
        {!isPlaying && (
          <div 
            onClick={handlePlayPause}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 10, cursor: 'pointer' }}
          >
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#E50914', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '32px', boxShadow: '0 0 20px #E50914', transition: '0.3s' }}>
              ▶
            </div>
            <span style={{ marginTop: '15px', fontSize: '18px', fontWeight: '600', letterSpacing: '0.5px' }}>
              Kinoni davom ettirish (Resume)
            </span>
          </div>
        )}

        {/* CUSTOM PREMIUM SOZLAMALAR PANEL (O'ng burchakdagi boshqaruvlar) */}
        <div style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: 15, display: 'flex', gap: '15px', alignItems: 'center', background: 'rgba(0,0,0,0.7)', padding: '8px 15px', borderRadius: '20px', backdropFilter: 'blur(5px)' }}>
          
          {/* Tezlikni tanlash (Speed Select) */}
          <span style={{ fontSize: '13px', color: '#aaa' }}>Tezlik:</span>
          <select 
            value={playbackRate} 
            onChange={(e) => handleSpeedChange(Number(e.target.value))}
            style={{ background: '#222', color: '#fff', border: '1px solid #444', borderRadius: '4px', padding: '3px 8px', cursor: 'pointer', fontSize: '13px', outline: 'none' }}
          >
            <option value="0.5">0.5x (Sekin)</option>
            <option value="1">1.0x (Normal)</option>
            <option value="1.5">1.5x (Tez)</option>
            <option value="2">2.0x (Juda tez)</option>
          </select>

          {/* Fullscreen Tugmasi */}
          <button 
            onClick={handleFullscreen}
            style={{ background: '#E50914', color: '#fff', border: 'none', padding: '4px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            ⛶ To'liq ekran
          </button>
        </div>
      </div>

      {/* Kino tavsifi */}
      <div style={{ maxWidth: '1100px', margin: '40px auto 0 auto' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '15px' }}>Kino haqida batafsil</h2>
        <p style={{ color: '#ccc', fontSize: '16px', lineHeight: '1.6' }}>{movie.description}</p>
      </div>

    </div>
  );
}

export default WatchPage;
