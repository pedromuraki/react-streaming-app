import { GET_STREAMS, GET_STREAM } from "./action-types";

const initialState = {}

const streams = (state = initialState, action) => {
  const { data } = action;

  switch (action.type) {
    case GET_STREAMS:
      return data.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {});

    case GET_STREAM:
      return data;
  }

  return state;
}

export default streams;
