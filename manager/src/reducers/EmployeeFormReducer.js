import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
      // [] is NOT an array  - key interpolation
      // action.payload === { prop: 'name', value: 'jane' }
      // refer src/actions/EmployeeActions.js:
      //  export const employeeUpdate = ({ prop, value }) => {
      //    return {
      //      type: EMPLOYEE_UPDATE,
      //      payload: { prop, value }
      //    };
      //  };

    case EMPLOYEE_CREATE:
      return INITIAL_STATE;

    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;

    default:
      return state;
  }
};

