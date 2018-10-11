import firebase from 'firebase';

import { 
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from './types';

export const emailChanged = (text) => {
  return {
    // type: 'email_changed',
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  // Returns an action
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  // Returns a function
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => { 
        dispatch({ 
          type: 'LOGIN_USER_SUCCESS', 
          payload: user });
    });
  };
};