import { combineReducers } from 'redux';
import UserActive from './UserActive'


import UserReducers from './UserReducers';

const allReucers = combineReducers({
  users: UserReducers,
  active: UserActive
});

export default allReucers