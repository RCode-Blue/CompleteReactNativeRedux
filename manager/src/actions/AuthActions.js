import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { 
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
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
    dispatch({ 
      type: LOGIN_USER 
    });

    // Log in the user
    firebase.auth().signInWithEmailAndPassword(email, password)
      // .then(user => { 
      //   dispatch({ 
      //     type: LOGIN_USER_SUCCESS, 
      //     payload: user });
      // })
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        // If login fails, create a new user
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();  // The Scene's key
};