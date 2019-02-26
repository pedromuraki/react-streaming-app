import { combineReducers } from 'redux';

/* Reducers */
import authStatus from './authStatus';
import streams from './streams';
import { reducer as formReducer } from 'redux-form';

export const combinedReducers = combineReducers({
  authStatus,
  streams,
  form: formReducer
});

export default combinedReducers;
