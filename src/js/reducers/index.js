import { combineReducers } from 'redux';

/* Reducers */
import authStatus from './authStatus';

export const combinedReducers = combineReducers({
  authStatus
});

export default combinedReducers;
