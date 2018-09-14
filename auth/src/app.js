import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDWYmV4rrarfPeGnLYzCOXOL6jkDJ1JV2c',
      authDomain: 'rl-tut-reactnative-auth.firebaseapp.com',
      databaseURL: 'https://rl-tut-reactnative-auth.firebaseio.com',
      projectId: 'rl-tut-reactnative-auth',
      storageBucket: 'rl-tut-reactnative-auth.appspot.com',
      messagingSenderId: '967569997516'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({ loggedIn: true });
        
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return (
          <Button tapAction={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );

      case false:
        return <LoginForm />;

      default:
        return <Spinner size="large" />;
    }
 
  }

  render(){
    return(
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;