import React, { useState } from 'react';
import $ from 'jquery';
import './Motivation.css';

const Motivation = () => {
  const [mood, setMood] = useState('');
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);

  const moods = [
    { value: 'amazing', label: '✨ Amazing' },
    { value: 'anger', label: '😡 Anger' },
    { value: 'beauty', label: '🌸 Beauty' },
    { value: 'failure', label: '💔 Failure' },
    { value: 'fear', label: '😱 Fear' },
    { value: 'funny', label: '😂 Funny' },
    { value: 'great', label: '🌟 Great' },
    { value: 'happiness', label: '😊 Happiness' },
    { value: 'humor', label: '😄 Humor' },
    { value: 'inspirational', label: '🚀 Inspirational' },
    { value: 'intelligent', label: '🧠 Intelligent' },
    { value: 'love', label: '❤️ Love' },
    { value: 'money', label: '💰 Money' },
    { value: 'success', label: '🏆 Success' },
  ];

  const fetchQuote = (selectedMood) => {
    if (!selectedMood) return;

    setLoading(true);
    setQuote(''); // Clear previous quote
    $.ajax({
      method: 'GET',
      url: `https://api.api-ninjas.com/v1/quotes?category=${selectedMood}`,
      headers: {
        'X-Api-Key': 'kNnVF07uuBGhkL1HgN5IUQ==jysy34CSppsjkXUD',
      },
      contentType: 'application/json',
      success: function (result) {
        if (result.length > 0) {
          setQuote(result[0].quote);
        } else {
          setQuote('No quote found for this mood.');
        }
      },
      error: function () {
        setQuote('Could not fetch a quote, please try again later.');
      },
      complete: function () {
        setLoading(false);
      },
    });
  };

  const handleMoodClick = (selectedMood) => {
    setMood(selectedMood);
    fetchQuote(selectedMood);
  };

  return (
    <div className={`motivation ${mood}`}>
      <h2>How are you feeling today?</h2>
      <div className="mood-buttons">
        {moods.map((m) => (
          <button
            key={m.value}
            className={`mood-button ${mood === m.value ? 'active' : ''}`}
            onClick={() => handleMoodClick(m.value)}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="quote-container">
        {loading ? (
          <p className="loading">Fetching your quote...</p>
        ) : (
          quote && <p className="quote">{quote}</p>
        )}
      </div>
    </div>
  );
};

export default Motivation;