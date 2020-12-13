/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, updateTask } from '../../redux/actions/tasks';

import cross from '../../images/icon-cross.svg';

import './styles/task.scss';

const Task = ({ content, completed }) => {
  const theme = useSelector((state) => state.theme);

  const dispatch = useDispatch();
  const remove = () => dispatch(deleteTask(content));
  const update = () => dispatch(updateTask({ content, status: !completed }));

  return (
    <>
      <div className={`task ${theme ? 'dark-task' : ''}`}>
        <label className="container">
          <input
            type="checkbox"
            checked={completed}
            onChange={update}
            id="checkbox"
          />
          <span className={`checkmark ${theme ? 'dark-checkmark' : ''}`} />
        </label>

        <p className="task-content">{ content }</p>
        <button className="delete-task" type="button" onClick={remove}>
          <img
            src={cross}
            alt="cross"
          />
        </button>
      </div>
    </>
  );
};

Task.defaultProps = {
  completed: false,
  content: 'No content...',
};

Task.propTypes = {
  completed: PropTypes.bool,
  content: PropTypes.string,
};

export default Task;
