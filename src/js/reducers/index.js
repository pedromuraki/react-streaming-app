import { combineReducers } from 'redux';

/* Reducers */
import cepData from './cepData';

export const combinedReducers = combineReducers({
  cepData
});

export default combinedReducers;
