import { SHOW_MODAL, HIDE_MODAL } from './action-types';

export const showModal = (targetStream) => ({
  type: SHOW_MODAL,
  targetStream
});

export const hideModal = () => ({
  type: HIDE_MODAL
});
