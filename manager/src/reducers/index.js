import { combinbeReducers, combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  auth: AuthReducer,  // The auth state is produced by AuthReducer
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer
});