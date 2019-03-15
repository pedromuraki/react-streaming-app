import { CREATE_STREAM, GET_STREAMS, GET_STREAM, EDIT_STREAM, DELETE_STREAM } from "./action-types";

const initialState = {}

const streams = (state = initialState, action) => {
  const { data } = action;

  switch (action.type) {
    case GET_STREAMS:
      return data.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {});

    case GET_STREAM:
      return data;

    // case CREATE_STREAM:
    //   return data;

    // case EDIT_STREAM:
    //   return data;

    // case DELETE_STREAM:
    //   return data;
  }

  return state;
}

export default streams;
