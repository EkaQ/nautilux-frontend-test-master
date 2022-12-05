import * as types from '../types';

export const getInterventionsRequested = () => ({
  type: types.GET_INTERVENTIONS_REQUESTED
});

export const getInterventionsSuccessed = (data) => ({
  type: types.GET_INTERVENTIONS_SUCCESSED,
  payload: {
    interventions: data,
  }
});

export const getInterventionsFailed = () => ({
  type: types.GET_INTERVENTIONS_FAILED
});

export const orderByDate = () => ({
  type: types.ORDER_BY_DATE,
});

export const addIntervention = (data) => ({
  type: types.ADD_INTERVENTION,
  payload: {
    intervention: data,
  }
});