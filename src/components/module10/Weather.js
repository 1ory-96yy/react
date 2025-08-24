import React, { useState, useEffect } from 'react';


const API_KEY = '9fca6ef5a5a0f47da9d0c3b437bdc94d';

const Weather = () => {
  const [city, setCity] = useState(localStorage.getItem('favCity') || '');
  const [country, setCountry] = useState(localStorage.getItem('favCountry') || '');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const [textColorR, setTextColorR] = useState(Number(localStorage.getItem('textColorR')) || 0);
  const [textColorG, setTextColorG] = useState(Number(localStorage.getItem('textColorG')) || 0);
  const [textColorB, setTextColorB] = useState(Number(localStorage.getItem('textColorB')) || 0);

  const [bgColorR, setBgColorR] = useState(Number(localStorage.getItem('bgColorR')) || 255);
  const [bgColorG, setBgColorG] = useState(Number(localStorage.getItem('bgColorG')) || 255);
  const [bgColorB, setBgColorB] = useState(Number(localStorage.getItem('bgColorB')) || 255);

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'auto');

  const fetchWeather = async (e) => {
    e.preventDefault();
    try {
      const query = country ? `${city},${country}` : city;
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&appid=${API_KEY}&units=metric`);
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();
      setWeather(data);
      setError('');
      localStorage.setItem('favCity', city);
      localStorage.setItem('favCountry', country);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  useEffect(() => {
    localStorage.setItem('textColorR', textColorR);
    localStorage.setItem('textColorG', textColorG);
    localStorage.setItem('textColorB', textColorB);
    localStorage.setItem('bgColorR', bgColorR);
    localStorage.setItem('bgColorG', bgColorG);
    localStorage.setItem('bgColorB', bgColorB);
    localStorage.setItem('theme', theme);
  }, [textColorR, textColorG, textColorB, bgColorR, bgColorG, bgColorB, theme]);

  const isDay = () => {
    if (!weather) return true;
    const now = Date.now() / 1000;
    return now >= weather.sys.sunrise && now <= weather.sys.sunset;
  };

  const currentTheme = () => {
    if (theme === 'auto') return isDay() ? 'light' : 'dark';
    return theme;
  };
  const rgbToStyle = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

  const styles = {
    container: {
      backgroundColor: rgbToStyle(bgColorR, bgColorG, bgColorB),
      color: rgbToStyle(textColorR, textColorG, textColorB),
      minHeight: '100vh',
      padding: '20px',
      transition: '0.5s',
    },
    input: { marginRight: '10px' },
    button: {
      backgroundColor: rgbToStyle(76, 175, 80), 
      border: 'none',
      color: '#fff',
      padding: '10px 20px',
      cursor: 'pointer',
    },
    image: { height: '100px' },
  };

  return (
    <div style={styles.container} className={`theme-${currentTheme()}`}>
      <h1>Weather Forecast</h1>

      <form onSubmit={fetchWeather}>
        <input
          style={styles.input}
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          required
        />
        <input
          style={styles.input}
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country (e.g., UA)"
        />
        <button type="submit" style={styles.button}>Get Weather</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <div>
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <p>Temperature: {weather.main.temp.toFixed(1)}°C</p>
          <p>Status: {weather.weather[0].description}</p>
          <p>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>

          <img
            src={isDay() ? "https://e7.pngegg.com/pngimages/487/562/png-clipart-sun-logo-sunlight.png" : "https://e7.pngegg.com/pngimages/576/257/png-clipart-earth-full-moon-lunar-phase-planet-moon-moon-atmosphere-computer-wallpaper.png"}
            alt={isDay() ? 'Sun' : 'Moon'}
            style={styles.image}
          />
        </div>
      )}

      <hr />
      <h3>Settings</h3>

      <label>
        Text Color (R):
        <input
          type="number"
          value={textColorR}
          onChange={(e) => setTextColorR(Number(e.target.value))}
          min="0"
          max="255"
        />
      </label>
      <label>
        (G):
        <input
          type="number"
          value={textColorG}
          onChange={(e) => setTextColorG(Number(e.target.value))}
          min="0"
          max="255"
        />
      </label>
      <label>
        (B):
        <input
          type="number"
          value={textColorB}
          onChange={(e) => setTextColorB(Number(e.target.value))}
          min="0"
          max="255"
        />
      </label>
      <br />
      <label>
        Background Color (R):
        <input
          type="number"
          value={bgColorR}
          onChange={(e) => setBgColorR(Number(e.target.value))}
          min="0"
          max="255"
        />
      </label>
      <label>
        (G):
        <input
          type="number"
          value={bgColorG}
          onChange={(e) => setBgColorG(Number(e.target.value))}
          min="0"
          max="255"
        />
      </label>
      <label>
        (B):
        <input
          type="number"
          value={bgColorB}
          onChange={(e) => setBgColorB(Number(e.target.value))}
          min="0"
          max="255"
        />
      </label>
      <br />
      <label>
        Theme:
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="auto">Auto</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    </div>
  );
};

export default Weather;
