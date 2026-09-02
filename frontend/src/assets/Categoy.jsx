import { useEffect, useState } from 'react';

function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Yii2 API-siga so'rov yuboramiz. Header orqali JSON so'raymiz.
    fetch('http://cineflix.loc/backend/categories', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setCategories(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('API ulanishda xato:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ color: 'white' }}>Yuklanmoqda...</p>;
  }

  return (
    <div style={{ padding: '20px', color: 'white', background: '#222', borderRadius: '8px' }}>
      <h2>Kinolar Kategoriyalari</h2>
      {categories.length === 0 ? (
        <p>Hozircha kategoriyalar yo'q. (Backend bazasi bo'sh)</p>
      ) : (
        <ul>
          {categories.map((item) => (
            <li key={item.id} style={{ margin: '10px 0', fontSize: '18px' }}>
              {item.name} 
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Category;
