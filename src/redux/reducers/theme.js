const themeReducer = (state = false, { type }) => {
  switch (type) {
    case 'TOGGLE_THEME':
      return !state;

    default:
      return state;
  }
};

export default themeReducer;
