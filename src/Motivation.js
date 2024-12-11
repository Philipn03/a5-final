import React, { useState } from 'react';
import axios from 'axios';
import './Motivation.css';

const Motivation = () => {
  const [mood, setMood] = useState('');
  const [quote, setQuote] = useState('');

  const fetchQuote = async (selectedMood) => {
    if (!selectedMood) return; // Check if mood is selected
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=${selectedMood}`, {
        headers: {
          'X-Api-Key': 'kNnVF07uuBGhkL1HgN5IUQ==jysy34CSppsjkXUD'
        }
      });

      // Assuming the response is an array, extract the quote from the first element
      if (response.data.length > 0) {
        setQuote(response.data[0].quote); // Get the first quote's text
      } else {
        setQuote('No quote found for this mood.');
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote('Could not fetch a quote, please try again later.');
    }
  };

  const handleMoodChange = (e) => {
    const selectedMood = e.target.value;
    setMood(selectedMood);
    fetchQuote(selectedMood); // Fetch quote when mood changes
  };

  return (
    <div className="motivation">
      <h2>Select Mood</h2>
      <select onChange={handleMoodChange} value={mood}>
        <option value="">Select Mood</option>
        <option value="happy">happiness</option>
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