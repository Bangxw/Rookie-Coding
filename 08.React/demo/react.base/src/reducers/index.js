import { combineReducers, } from 'redux';
import { markTitle, globalData, } from './reduer';

const reducer = combineReducers({
  markTitle,
  globalData,
});

export default reducer;
