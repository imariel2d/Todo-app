import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showAllTasks, showUncompletedTasks, showCompletedTasks } from '../../redux/actions/filters';

import './styles/filters.scss';

const Filters = () => {
  const theme = useSelector((state) => state.theme);
  const filters = useSelector((state) => state.filters);

  const dispatch = useDispatch();
  const showAll = () => dispatch(showAllTasks());
  const showActive = () => dispatch(showUncompletedTasks());
  const showCompleted = () => dispatch(showCompletedTasks());

  return (
    <div className={`filters ${theme ? 'dark-background' : ''}`}>
      <button
        className={`filter ${filters.showAll ? 'active' : ''} ${theme ? 'dark-filter' : ''}`}
        onClick={showAll}
        type="button"
      >
        All
      </button>
      <button
        className={`filter ${filters.showUncompletedOnly ? 'active' : ''} ${theme ? 'dark-filter' : ''}`}
        onClick={showActive}
        type="button"
      >
        Active
      </button>
      <button
        className={`filter ${filters.showCompletedOnly ? 'active' : ''} ${theme ? 'dark-filter' : ''}`}
        onClick={showCompleted}
        type="button"
      >
        Completed
      </button>
    </div>
  );
};

export default Filters;
