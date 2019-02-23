import { combineReducers } from 'redux';

/* Reducers */
import authStatus from './authStatus';
import { reducer as formReducer } from 'redux-form';

export const combinedReducers = combineReducers({
  authStatus,
  formReducer
});

export default combinedReducers;
