import { combineReducers } from 'redux';

import owners from './owners';
import pets from './pets';

export default combineReducers({
  owners,
  pets,
});
