import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const location = 'Irvine'; // Replace with dynamic location fetching
      const apiKey = 'b281d1833f9e84dc6f8cc57310b423c6'; // Replace with your OpenWeatherMap API key
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  const weatherReminder = () => {
    if (!weather) return null;
    if (weather.weather[0].main === 'Rain') {
      return "Don't forget an umbrella!";
    } else if (weather.weather[0].main === 'Clear') {
      return "It's sunny! Consider wearing sunglasses.";
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="weather">
      <h2>Weather Reminder</h2>
      <p>{weatherReminder()}</p>
    </div>
  );
};

export default Weather;
