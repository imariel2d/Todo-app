const initialState = {
  showAll: true,
  showCompletedOnly: false,
  showUncompletedOnly: false,
};

const filtersReducer = (state = initialState, { type }) => {
  switch (type) {
    case 'SHOW_ALL':
      return {
        showAll: true,
        showCompletedOnly: false,
        showUncompletedOnly: false,
      };

    case 'SHOW_COMPLETED':
      return {
        showAll: false,
        showCompletedOnly: true,
        showUncompletedOnly: false,
      };

    case 'SHOW_UNCOMPLETED':
      return {
        showAll: false,
        showCompletedOnly: false,
        showUncompletedOnly: true,
      };

    default:
      return state;
  }
};

export default filtersReducer;
