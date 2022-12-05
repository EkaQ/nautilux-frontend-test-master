import { takeLatest, all, call, put } from 'redux-saga/effects';

import * as types from '../types';
import apiService from '../services/apiService';
import { getInterventionsSuccessed, getInterventionsFailed } from '../actions';

function* getInterventions(action) {
  apiService.getInterventions();

  try {
    const data = yield call(apiService.getInterventions);
    yield put(getInterventionsSuccessed(data));
  } catch (error) {
    yield put(getInterventionsFailed());
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.GET_INTERVENTIONS_REQUESTED, getInterventions)
  ])
}
