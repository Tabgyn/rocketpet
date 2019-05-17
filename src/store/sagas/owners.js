import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as OwnerActions } from '../ducks/owners';

export function* addOwner(action) {
  try {
    const ownerData = action.payload.owner;
    const options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    yield call(api.post, '/owners', ownerData, options);
    yield put(OwnerActions.addOwnerSuccess(ownerData));
  } catch (error) {
    yield put(OwnerActions.addOwnerFailure('Error registering owner'));
  }
}
