import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';

class App extends Component{
  componentWillMount() {
    firebase.initializeApp({
      apiKey: '',
      authDomain: 'rl-tut-reactnative-auth.firebaseapp.com',
      databaseURL: 'https://rl-tut-reactnative-auth.firebaseio.com',
      projectId: 'rl-tut-reactnative-auth',
      storageBucket: 'rl-tut-reactnative-auth.appspot.com',
      messagingSenderId: '967569997516'
    });
  }

  render(){
    return(
      <View>
        <Header headerText="Authentication" />
        <Text>App App App App App App App</Text>
      </View>
    );
  }
}

export default App;