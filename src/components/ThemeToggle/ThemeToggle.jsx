import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import toggleTheme from '../../redux/actions/theme';

import light from '../../images/icon-sun.svg';
import moon from '../../images/icon-moon.svg';

import './styles/theme.scss';

const ThemeToggle = () => {
  /* false -> lightmode
  true -> darktheme */
  const theme = useSelector((state) => state.theme);

  const dispatch = useDispatch();
  const toggle = () => dispatch(toggleTheme());

  return (
    <button className="toggle-theme" onClick={toggle} type="button">
      <img
        src={light}
        alt="activate-dark-mode"
        className={`${theme ? '' : 'hide'}`}
      />
      <img
        src={moon}
        alt="activate-dark-mode"
        className={`${theme ? 'hide' : ''}`}
      />
    </button>
  );
};

export default ThemeToggle;
