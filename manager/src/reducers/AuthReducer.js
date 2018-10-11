import { 
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from '../actions/types';

// Not mandatory but a good idea
const INITIAL_STATE = { 
  email: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
      // create a new object
      // take all the properties of my existing state object and throw them into that object
      // define the property email, give it a value of action.payload
      // then throw it on top of the state object

    case PASSWORD_CHANGED:
    return { ...state, password: action.payload };

    default:
      return state;
  }
};