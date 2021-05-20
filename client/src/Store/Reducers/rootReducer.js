import { combineReducers } from 'redux';
import prayerReducer from './prayerReducer';

const rootReducer = combineReducers({
  prayers: prayerReducer
});

export default rootReducer