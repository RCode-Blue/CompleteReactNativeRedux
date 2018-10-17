import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
        apiKey: 'AIzaSyA0oq4AxNnaPNoz5XtoAcJnKjefn6rnQxY',
        authDomain: 'rl-tut-reactnative-manager.firebaseapp.com',
        databaseURL: 'https://rl-tut-reactnative-manager.firebaseio.com',
        projectId: 'rl-tut-reactnative-manager',
        storageBucket: 'rl-tut-reactnative-manager.appspot.com',
        messagingSenderId: '152883602799'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(
      reducers, {}, applyMiddleware(ReduxThunk));
      // {} is for any initial state that you may want to pass in

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;