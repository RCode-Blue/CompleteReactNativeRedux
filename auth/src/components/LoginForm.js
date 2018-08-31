import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  onButtonPress() {
    const { email, password } = this.state;


    // Authenticate user
    firebase.auth().signInWithEmailAndPassword(email, password) // Attempt to sign user in
      .catch(() => { // if fails
        firebase.auth().createUserWithEmailAndPassword(email, password) // Attempt to create user account
          .catch(() => {  // If this fails too...
            this.setState({ error:"authentication failed." });  // ...error out
          });
      });

  }

  render(){
    return(
      <Card>
        <CardSection>
          <Input 
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={emailText => this.setState({ email: emailText })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          { this.state.error }
        </Text>

        <CardSection>
          <Input
            secureTextEntry  //={true}
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>


    );
  }
}

const styles = {
  errorTextStyle: {
    fontSixe: 20,
    alignSelf: 'center',
    color: 'red'
  }
};


export default LoginForm;