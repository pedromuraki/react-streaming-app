import { UPDATE_CEP_DATA } from './action-types';

import axios from 'axios';

export const updateCepData = (code) => {
  return async (dispatch, getState) => {
    const req = await axios.get(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${code}`);

    dispatch({
      type: UPDATE_CEP_DATA,
      data: req.data
    });
  };
}
