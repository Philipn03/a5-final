import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Reminder.css";

const Reminder = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.trim()) return;
    setTasks([...tasks, { task, reminderTime: "", completed: false }]);
    toast.success("Task added!");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    toast.info("Task deleted!");
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    toast.success(
      updatedTasks[index].completed ? "Task completed!" : "Task marked incomplete!"
    );
  };

  const updateReminderTime = (index, time) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].reminderTime = time;
    setTasks(updatedTasks);
    toast.success("Reminder time updated!");
  };

  return (
    <div className="reminder">
      <h2>📋 To-Do List</h2>
      <div className="task-input-container">
        <input
          type="text"
          placeholder="Add a task"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask(e.target.value);
              e.target.value = "";
            }
          }}
        />
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
            />
            <span className={task.completed ? "completed" : ""}>{task.task}</span>
            <input
              type="time"
              value={task.reminderTime}
              onChange={(e) => updateReminderTime(index, e.target.value)}
            />
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
};

export default Reminder;
