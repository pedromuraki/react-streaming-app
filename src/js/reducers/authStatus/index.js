import { UPDATE_AUTH_STATUS } from './action-types';

const initialState = {
  isSignedIn: false,
  currentUser: false,
  currentUserId: false
}

const authStatus = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_AUTH_STATUS:
      return {
        isSignedIn: action.isSignedIn,
        currentUser: action.currentUser,
        currentUserId: action.currentUserId
      }
  }
  return state;
}

export default authStatus;
