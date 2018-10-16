import { combinbeReducers, combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
  auth: AuthReducer,  // The auth state is produced by AuthReducer
  employeeForm: EmployeeFormReducer
});