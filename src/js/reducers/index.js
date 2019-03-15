import { combineReducers } from 'redux';

/* Reducers */
import authStatus from './authStatus';
import streams from './streams';
import modalStatus from './modalStatus';
import { reducer as formReducer } from 'redux-form';

export const combinedReducers = combineReducers({
  authStatus,
  streams,
  modalStatus,
  form: formReducer
});

export default combinedReducers;
