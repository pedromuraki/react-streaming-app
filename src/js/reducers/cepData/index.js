import { UPDATE_CEP_DATA } from './action-types';

const initialState = {}

const cepData = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CEP_DATA:
      return action.data;
  }
  return state;
}

export default cepData;
