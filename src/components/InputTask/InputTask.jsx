/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTask } from '../../redux/actions/tasks';

import './styles/inputtask.scss';

const Task = () => {
  const [status, setStatus] = useState(false);
  const [content, setContent] = useState('');
  const [error, setError] = useState(false);

  const handleCheckChange = () => setStatus(!status);
  const handleTextChange = (e) => setContent(e.target.value);
  const clearFields = () => {
    setStatus(false);
    setContent('');
  };

  const tasks = useSelector((state) => state.tasks);
  const theme = useSelector((state) => state.theme);

  const dispatch = useDispatch();
  const createTask = (task) => dispatch(addTask(task));

  const submitTask = (e) => {
    e.preventDefault();
    const newTask = {
      status,
      content,
    };

    const taskExists = tasks.findIndex((task) => task.content === newTask.content);

    if (newTask.content && taskExists < 0) {
      createTask(newTask);
      clearFields();
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="submit-container">
      <form className={`submit-task ${theme ? 'dark-background' : ''}`} onSubmit={submitTask}>
        <label className="container">
          <input
            type="checkbox"
            checked={status}
            onChange={handleCheckChange}
            id="checkbox"
          />
          <span className={`checkmark ${theme ? 'dark-checkmark' : ''}`} />
        </label>

        <input
          className={`task-input ${theme ? 'dark-background dark-task-input' : ''}`}
          type="text"
          value={content}
          onChange={handleTextChange}
          placeholder="Create a new to do..."
        />

      </form>
      { error && <p className="error-submit">You cannot submit that!</p>}
    </div>
  );
};

export default Task;
