import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PetActions } from '../ducks/pets';

export function* addPet(action) {
  try {
    const { data } = yield call(api.get, `/pets/${action.payload.pet}`);

    const isDuplicated = yield select(state => state.pets.data.find(pet => pet.id === data.id));

    if (isDuplicated) {
      yield put(PetActions.addPetFailure('Pet is already registered'));
    } else {
      const petData = {
        name: data.name,
        picture: data.avatar,
        owner: data.owner,
      };

      yield put(PetActions.addPetSuccess(petData));
    }
  } catch (error) {
    yield put(PetActions.addPetFailure('Error registering pet'));
  }
}
