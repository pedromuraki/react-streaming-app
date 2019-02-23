import { UPDATE_AUTH_STATUS } from './action-types';

export const updateAuthStatus = (isSignedIn, currentUser) => ({
  type: UPDATE_AUTH_STATUS,
  isSignedIn,
  currentUser
});
