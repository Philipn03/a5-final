import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Reminder.css';

const Reminder = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.trim()) return;
    setTasks([...tasks, { task, reminderTime: '' }]);
    
    toast.success('Task added!');
  };

  return (
    <div className="reminder">
      <h2>To-Do List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.task} - {task.reminderTime || 'No reminder'}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a task"
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
                addTask(e.target.value);
                e.target.value = ""
            }
        }}
      />
      <ToastContainer />
    </div>
  );
};

export default Reminder;
