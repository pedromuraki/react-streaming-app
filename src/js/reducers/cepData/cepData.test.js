import cepData from './index';
import { UPDATE_CEP_DATA } from './action-types';

import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

describe('UPDATE_CEP_DATA', () => {
  it('should update cep data after request to api', () => {
    const initialState = deepFreeze({});
    const action = deepFreeze({
      type: UPDATE_CEP_DATA,
      data: {
        "status": 1,
        "code": "06233-030",
        "state": "SP",
        "city": "Osasco",
        "district": "Piratininga",
        "address": "Rua Paula Rodrigues"
      }
    });
    const endState = {
      "status": 1,
      "code": "06233-030",
      "state": "SP",
      "city": "Osasco",
      "district": "Piratininga",
      "address": "Rua Paula Rodrigues"
    }
    expect(cepData(initialState, action)).to.be.eql(endState);
  });
});
