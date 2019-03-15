import history from '../../history';
import axios from 'axios';
import { CREATE_STREAM, GET_STREAMS, GET_STREAM, EDIT_STREAM } from './action-types';

export const createStream = (values, currentUserId) => dispatch => {
  axios
    .post('http://localhost:3001/streams', { ...values, userId: currentUserId })
    .then(res => {
      dispatch({
        type: CREATE_STREAM,
        data: res.data
      });
      history.push('/');
    });
}

export const editStream = (id, values) => dispatch => {
  axios
    .patch(`http://localhost:3001/streams/${id}`, values)
    .then(res => {
      dispatch({
        type: EDIT_STREAM,
        data: res.data
      });
      history.push('/');
    });
}

export const getStreams = () => dispatch => {
  axios
    .get('http://localhost:3001/streams')
    .then(res => dispatch({
      type: GET_STREAMS,
      data: res.data
    }));
}

export const getStream = (id) => dispatch => {
  axios
    .get(`http://localhost:3001/streams/${id}`)
    .then(res => dispatch({
      type: GET_STREAM,
      data: res.data
    }));
}
