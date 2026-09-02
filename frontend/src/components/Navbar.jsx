import React, { useState } from 'react';

function Navbar() {
  const [search, setSearch] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Bosh sahifa');
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Qidiruv tugmasi bosilganda ishlaydi
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      alert(`Qidirilmoqda: ${search}`);
      // Kelajakda bu yerda API ga qidiruv so'rovi yuboriladi
    }
  };

  // Navigatsiya menyusi bosilganda ishlaydi
  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    alert(`Siz "${menuName}" sahifasiga o'tdingiz!`);
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 5%',
      height: '70px',
      background: 'linear-gradient(to bottom, rgba(20,20,20,0.95) 0%, rgba(20,20,20,0.9) 100%)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      boxSizing: 'border-box',
      zIndex: 1000,
      boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
    }}>
      
      {/* 1. Brend/Logotip qismi */}
      <div 
        onClick={() => handleMenuClick('Bosh sahifa')}
        style={{
          fontSize: '28px',
          fontWeight: '900',
          color: '#E50914',
          cursor: 'pointer',
          letterSpacing: '2px',
          textShadow: '0 0 10px rgba(229,9,20,0.4)',
          transition: 'transform 0.3s ease, text-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.05)';
          e.target.style.textShadow = '0 0 20px rgba(229,9,20,0.8)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.textShadow = '0 0 10px rgba(229,9,20,0.4)';
        }}
      >
        CINE<span style={{ color: '#FFF', fontWeight: '500' }}>FLIX</span>
      </div>

      {/* 2. Menyu qismi (Hover chiziq effektlari bilan) */}
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '35px',
        margin: 0,
        padding: 0,
        height: '100%',
        alignItems: 'center'
      }}>
        {['Bosh sahifa', 'Kinolar', 'Kategoriyalar', 'Sevimlilar'].map((item) => {
          const isActive = activeMenu === item;
          const isHovered = hoveredMenu === item;
          
          return (
            <li 
              key={item} 
              onClick={() => handleMenuClick(item)}
              onMouseEnter={() => setHoveredMenu(item)}
              onMouseLeave={() => setHoveredMenu(null)}
              style={{
                color: isActive ? '#FFF' : (isHovered ? '#E5E5E5' : '#AAA'),
                fontSize: '15px',
                fontWeight: isActive ? '700' : '500',
                cursor: 'pointer',
                position: 'relative',
                padding: '10px 0',
                transition: 'color 0.2s ease',
              }}
            >
              {item}
              {/* Ostki chiziq animatsiyasi */}
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: isActive ? '100%' : (isHovered ? '100%' : '0'),
                height: '3px',
                backgroundColor: '#E50914',
                borderRadius: '2px',
                transition: 'width 0.3s ease',
                boxShadow: isActive ? '0 0 8px #E50914' : 'none'
              }} />
            </li>
          );
        })}
      </ul>

      {/* 3. Funksional O'ng qism (Qidiruv + Bildirishnoma + Profil) */}
      <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
        
        {/* Zamonaviy Qidiruv Tizimi */}
        <form onSubmit={handleSearchSubmit} style={{
          display: 'flex',
          alignItems: 'center',
          background: isFocused ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.05)',
          border: isFocused ? '1px solid #E50914' : '1px solid rgba(255,255,255,0.15)',
          padding: '6px 12px',
          borderRadius: '20px',
          transition: 'all 0.3s ease',
          width: isFocused ? '240px' : '180px',
          boxShadow: isFocused ? '0 0 10px rgba(229,9,20,0.2)' : 'none'
        }}>
          <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Kino, janr qidirish..." 
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              outline: 'none',
              fontSize: '14px',
              width: '100%',
              paddingRight: '10px'
            }}
          />
          <button type="submit" style={{
            background: 'transparent',
            border: 'none',
            color: isFocused ? '#E50914' : '#AAA',
            cursor: 'pointer',
            fontSize: '16px',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            transition: 'color 0.2s'
          }}>
            🔍
          </button>
        </form>

        {/* Qo'shimcha funksiya 1: Bildirishnomalar (Notification ko'ngirog'i) */}
        <div 
          onClick={() => alert("Sizda hozircha yangi bildirishnomalar yo'q.")}
          style={{ position: 'relative', cursor: 'pointer', fontSize: '20px', transition: 'transform 0.2s' }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          🔔
          {/* Qizil nuqta (Yangi xabar borligini bildiradi) */}
          <span style={{
            position: 'absolute',
            top: '-2px',
            right: '-2px',
            width: '8px',
            height: '8px',
            background: '#E50914',
            borderRadius: '50%',
            boxShadow: '0 0 5px #E50914'
          }} />
        </div>

        {/* Qo'shimcha funksiya 2: Dropdown Profil menyusi */}
        <div style={{ position: 'relative' }}>
          <div 
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              padding: '5px',
              borderRadius: '4px',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          >
            {/* Profil rasmi o'rniga chiroyli placeholder */}
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '4px',
              background: '#E50914',
              color: '#FFF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              fontSize: '14px'
            }}>
              A
            </div>
            <span style={{ color: '#E5E5E5', fontSize: '12px' }}>▼</span>
          </div>

          {/* Dropdown menyu tarkibi */}
          {showProfileMenu && (
            <div style={{
              position: 'absolute',
              top: '45px',
              right: 0,
              background: '#141414',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '4px',
              width: '160px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.8)',
              overflow: 'hidden',
              animation: 'fadeIn 0.2s ease'
            }}>
              {['Profilim', 'Sozlamalar', 'Chiqish'].map((subItem) => (
                <div 
                  key={subItem}
                  onClick={() => {
                    alert(`"${subItem}" bosildi!`);
                    setShowProfileMenu(false);
                  }}
                  style={{
                    padding: '12px 16px',
                    color: '#BBB',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.08)';
                    e.target.style.color = '#FFF';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#BBB';
                  }}
                >
                  {subItem}
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
