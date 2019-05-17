import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as OwnerActions } from '../ducks/owners';

export function* addOwner(action) {
  try {
    const ownerData = {
      name: action.payload.owner.name,
      avatar: action.payload.owner.avatar,
    };
    yield call(api.post, '/owners', { headers: { 'Content-Type': 'multipart/form-data' }, body: ownerData });
    yield put(OwnerActions.addOwnerSuccess(ownerData));
  } catch (error) {
    yield put(OwnerActions.addOwnerFailure('Error registering owner'));
  }
}
