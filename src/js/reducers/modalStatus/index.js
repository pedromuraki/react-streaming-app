import { SHOW_MODAL, HIDE_MODAL } from "./action-types";

const initialState = {
  show: false,
  targetStream: null
}

const modalStatus = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { show: true, targetStream: action.targetStream }

    case HIDE_MODAL:
      return { ...initialState }
  }

  return state;
}

export default modalStatus;
