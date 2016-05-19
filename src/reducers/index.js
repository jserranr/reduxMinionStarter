import { combineReducers } from 'redux';
import minionList from './minion_search';

const rootReducer = combineReducers({
  minionList: minionList
});

export default rootReducer;
