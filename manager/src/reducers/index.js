import { combinbeReducers, combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
  auth: AuthReducer  // The auth state is produced by AuthReducer
});