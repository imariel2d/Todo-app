import React from 'react';
import { useSelector } from 'react-redux';

import ThemeToggle from '../ThemeToggle';

import './styles/header.scss';

const Header = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={`header-container ${theme ? 'header-dark' : 'header-light'}`}>
      <div className="header-content">
        <h1 id="todo-title">T O D O</h1>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
