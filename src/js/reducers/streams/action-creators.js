import axios from 'axios';
import { CREATE_STREAM, GET_STREAMS, GET_STREAM } from './action-types';

export const createStream = (values) => dispatch => {
  axios
    .post('http://localhost:3001/streams', values)
    .then((res) => dispatch({
      type: CREATE_STREAM,
      data: res.data
    }));
}

export const getStreams = () => dispatch => {
  axios
    .get('http://localhost:3001/streams')
    .then((res) => dispatch({
      type: GET_STREAMS,
      data: res.data
    }));
}

export const getStream = (id) => dispatch => {
  axios
    .get(`http://localhost:3001/streams/${id}`)
    .then((res) => dispatch({
      type: GET_STREAM,
      data: res.data
    }));
}
