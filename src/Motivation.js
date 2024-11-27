import React, { useState } from 'react';
import axios from 'axios';
import './Motivation.css';

const Motivation = () => {
  const [mood, setMood] = useState('');
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    if (!mood) return;
    try {
      const response = await axios.get(`https://api.quotable.io/random?tags=${mood}`);
      setQuote(response.data.content);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const handleMoodChange = (e) => {
    const selectedMood = e.target.value;
    setMood(selectedMood);
    fetchQuote(selectedMood);
  };

  return (
    <div className="motivation">
      <h2>Select Mood</h2>
      <select onChange={handleMoodChange}>
        <option value="">Select Mood</option>
        <option value="happy">Happy</option>
        <option value="motivated">Motivated</option>
        <option value="anxious">Anxious</option>
        <option value="tired">Tired</option>
      </select>

      <h3>Motivational Quote</h3>
      <p>{quote || 'Select a mood to get your quote!'}</p>
    </div>
  );
};

export default Motivation;
