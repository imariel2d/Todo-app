import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteTask } from '../../redux/actions/tasks';

import Filters from '../Filters';

import './styles/tasksfeed.scss';

const TasksFeed = () => {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();
  const clearTask = (task) => dispatch(deleteTask(task));

  const clearCompleted = () => {
    const tasksToDelete = tasks.filter((task) => task.status === true);
    tasksToDelete.forEach((task) => clearTask(task.content));
  };

  return (
    <div className="tasks-feed">
      <p>
        <span>{ tasks.length }</span>
        <span> items left</span>
      </p>
      <div className="filters-feed">
        <Filters />
      </div>
      <button className="clear-complete" onClick={clearCompleted} type="button">Clear Completed</button>
    </div>
  );
};

export default TasksFeed;
