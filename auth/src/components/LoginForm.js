import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  onButtonPress() {
    console.log("Pressed");
    
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password) 
      .catch(() => { 
        firebase.auth().createUserWithEmailAndPassword(email, password) 
          .catch(() => {  
            this.setState({ error: "authentication failed." }); 
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
          <Button tapAction={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};


export default LoginForm;