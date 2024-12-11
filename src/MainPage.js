// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const MainPage = () => {
//   // State variables
//   const [activeTab, setActiveTab] = useState('mood'); // Active tab ('mood', 'weather', 'todo')
//   const [mood, setMood] = useState('');
//   const [quote, setQuote] = useState('');
//   const [tasks, setTasks] = useState([]);
//   const [weather, setWeather] = useState(null);
  
//   // Fetch quote based on mood
//   const fetchQuote = async (mood) => {
//     if (!mood) return;
//     try {
//       const response = await axios.get(`https://api.quotable.io/random?tags=${mood}`);
//       setQuote(response.data.content);
//     } catch (error) {
//       console.error('Error fetching quote:', error);
//     }
//   };

//   // Fetch weather data
//   const fetchWeather = async () => {
//     try {
//       const location = 'Irvine'; // Replace with dynamic location fetching
//       const apiKey = 'b281d1833f9e84dc6f8cc57310b423c6'; // Add your OpenWeatherMap API key here
//       const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
//       setWeather(response.data);
//     } catch (error) {
//       console.error('Error fetching weather:', error);
//     }
//   };

//   // Handle adding tasks
//   const addTask = (task) => {
//     setTasks([...tasks, { task, reminderTime: '' }]);
//     toast.success('Task added!');
//   };

//   // Render weather reminder
//   const weatherReminder = () => {
//     if (!weather) return null;
//     if (weather.weather[0].main === 'Rain') {
//       return 'Don\'t forget an umbrella!';
//     } else if (weather.weather[0].main === 'Clear') {
//       return 'It\'s sunny! Consider wearing sunglasses.';
//     }
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchWeather();
//   }, []);

//   // Handle mood change
//   const handleMoodChange = (e) => {
//     setMood(e.target.value);
//     fetchQuote(e.target.value);
//   };

//   return (
//     <div className="main-page">
//       <h1>Personalized Digital Assistant</h1>
//       {/* Tab Navigation */}
//       <div className="tabs">
//         <button
//           className={activeTab === 'mood' ? 'active' : ''}
//           onClick={() => setActiveTab('mood')}
//         >
//           Mood
//         </button>
//         <button
//           className={activeTab === 'weather' ? 'active' : ''}
//           onClick={() => setActiveTab('weather')}
//         >
//           Weather
//         </button>
//         <button
//           className={activeTab === 'todo' ? 'active' : ''}
//           onClick={() => setActiveTab('todo')}
//         >
//           To-Do List
//         </button>
//       </div>

//       {/* Tab Content */}
//       {activeTab === 'mood' && (
//         <div className="mood-section">
//           <h2>Select Mood</h2>
//           <select onChange={handleMoodChange}>
//             <option value="">Select Mood</option>
//             <option value="happy">Happy</option>
//             <option value="motivated">Motivated</option>
//             <option value="anxious">Anxious</option>
//             <option value="tired">Tired</option>
//           </select>

//           <h3>Motivational Quote</h3>
//           <p>{quote || 'Select a mood to get your quote!'}</p>
//         </div>
//       )}

//       {activeTab === 'weather' && (
//         <div className="weather-section">
//           <h2>Weather Reminder</h2>
//           <p>{weatherReminder()}</p>
//         </div>
//       )}

//       {activeTab === 'todo' && (
//         <div className="todo-section">
//           <h2>To-Do List</h2>
//           <ul>
//             {tasks.map((task, index) => (
//               <li key={index}>
//                 {task.task} - {task.reminderTime || 'No reminder'}
//               </li>
//             ))}
//           </ul>
//           <input
//             type="text"
//             placeholder="Add a task"
//             onKeyDown={(e) => e.key === 'Enter' && addTask(e.target.value)}
//           />
//         </div>
//       )}

//       {/* Toast Notifications */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default MainPage;

import React from 'react';
import Header from './Header';
import Motivation from './Motivation';
import Weather from './Weather';
import Reminder from './Reminder';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <Motivation />
      <div className="content">
        <Weather />
        <Reminder />
      </div>
    </div>
  );
};

export default MainPage;