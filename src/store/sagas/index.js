import { all, takeLatest } from 'redux-saga/effects';

import { Types as OwnersTypes } from '../ducks/owners';
import { Types as PetsTypes } from '../ducks/pets';
import { addOwner } from './owners';
import { addPet } from './pets';

export default function* rootSaga() {
  yield all([takeLatest(OwnersTypes.ADD_REQUEST, addOwner), takeLatest(PetsTypes.ADD_REQUEST, addPet)]);
}
