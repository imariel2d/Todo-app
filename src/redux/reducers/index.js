import { combineReducers } from 'redux';

import tasks from './tasks';
import filters from './filters';
import theme from './theme';

const reducers = combineReducers({
  tasks,
  filters,
  theme,
});

export default reducers;
