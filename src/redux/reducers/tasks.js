/* eslint-disable no-param-reassign */
const tasksReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_TASK':
      return [...state, payload];

    case 'UPDATE_TASK':
      state.map((task) => {
        if (task.content === payload.content) {
          task.status = payload.status;
          task.content = payload.content;
        }

        return task;
      });
      return [...state];

    case 'DELETE_TASK': {
      const index = state.findIndex((task) => task.content === payload);
      state.splice(index, 1);
      return [...state];
    }

    default:
      return state;
  }
};

export default tasksReducer;
