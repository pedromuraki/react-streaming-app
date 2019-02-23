import { UPDATE_AUTH_STATUS } from './action-types';

export const updateAuthStatus = (isSignedIn, currentUser, currentUserId) => ({
  type: UPDATE_AUTH_STATUS,
  isSignedIn,
  currentUser,
  currentUserId
});
