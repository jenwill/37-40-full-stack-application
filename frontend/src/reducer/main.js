import { combineReducers } from 'redux';
import plants from './plant';
import token from './token';
import profile from './profile';

export default combineReducers({
  profile,
  plants,
  token,
});
