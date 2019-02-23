import { UPDATE_AUTH_STATUS } from './action-types';

const initialState = {
  isSignedIn: false,
  currentUser: false
}

const authStatus = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_AUTH_STATUS:
      return {
        isSignedIn: action.isSignedIn,
        currentUser: action.currentUser
      }
  }
  return state;
}

export default authStatus;
