import { combineReducers } from 'redux';

import * as types from '../types';

const initialState = {
  list:[], 
  status: 'idle'
};

export const interventions = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_INTERVENTIONS_REQUESTED: {
      return {
        ...state,
        status: 'loading'
      }
    }
    case types.GET_INTERVENTIONS_SUCCESSED: {
      return {
        ...state,
        list: [...action.payload.interventions],
        status: 'successed'
      };
    }
    case types.GET_INTERVENTIONS_FAILED: {
      return {
        ...state,
        list: [],
        status: 'failed'
      };
    }
    case types.ADD_INTERVENTION: {
      return {
        ...state,
        list: [...state.list, action.payload.intervention],
      };
    }
    default:
      return state;
  }
}

export default () => combineReducers({
  interventions,
});
