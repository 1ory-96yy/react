import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const CityModal = ({ city, onClose }) => {
  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)', display: 'flex',
      justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{
        background: '#fff', padding: '20px', borderRadius: '8px', width: '400px'
      }}>
        <h2>{city.name}</h2>
        <img src={city.coat} alt="Coat" style={{ width: '100px' }} />
        <p>{city.description}</p>
        <p><strong>Population:</strong> {city.population}</p>
        <p><strong>Area:</strong> {city.area} km²</p>
        <button onClick={onClose}>Закрити</button>
      </div>
    </div>,
    document.body
  );
};

const CountryCities = ({ country, cities }) => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div>
      <h1>🌍 {country}</h1>
      <ul>
        {cities.map(city => (
          <li key={city.name}>
            <span
              style={{ cursor: 'pointer', color: 'blue' }}
              onClick={() => setSelectedCity(city)}
            >
              {city.name}
            </span>
          </li>
        ))}
      </ul>

      {selectedCity && (
        <CityModal city={selectedCity} onClose={() => setSelectedCity(null)} />
      )}
    </div>
  );
};

export default CountryCities;