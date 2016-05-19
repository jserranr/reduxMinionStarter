import { combineReducers } from 'redux';
import minionList from './minion_search';
import minionSelected from './minion_select';

const rootReducer = combineReducers({
  minionList: minionList,
  minionSelect: minionSelected
});

export default rootReducer;
