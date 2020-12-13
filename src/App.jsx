import React from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import InputTask from './components/InputTask';
import Tasks from './components/Tasks';
import TasksFeed from './components/TasksFeed';
import Filters from './components/Filters';

import './styles/app.scss';

const App = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={`App ${theme ? 'dark-app-background' : ''}`}>
      <Header />
      <InputTask />
      <div className="tasks-container">
        <div className={`tasks-background ${theme ? 'dark-background' : ''}`}>
          <Tasks />
          <TasksFeed />
        </div>
      </div>
      <div className="filters-container">
        <div className="filters-box">
          <Filters />
        </div>
      </div>
    </div>
  );
};

export default App;
