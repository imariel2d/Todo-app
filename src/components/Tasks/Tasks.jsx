import React from 'react';
import { useSelector } from 'react-redux';

import Task from '../Task';

import './styles/tasks.scss';

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const filters = useSelector((state) => state.filters);

  const showingTasks = tasks.filter((task) => {
    if (filters.showAll) return task;
    if (filters.showUncompletedOnly && !task.status) return task;
    if (filters.showCompletedOnly && task.status) return task;

    return false;
  });

  return (
    <div className="tasks">
      {
        showingTasks.length > 0 ? showingTasks.map((task) => (
          <Task
            key={task.content}
            completed={task.status}
            content={task.content}
          />
        )) : <p id="no-tasks">You don&#39;t have tasks!</p>
      }
    </div>
  );
};

export default Tasks;
