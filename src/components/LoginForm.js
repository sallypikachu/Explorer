import React, { Component } from 'react';
import { Card, CardSection, MyButton, Input } from './common';
import shim from '../../shim';

const jwt = require('react-native-jwt');

class LoginForm extends Component {
  static navigationOptions = {
    title: 'Log In'
 };

 constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  async onLoginPress() {
    const { email, password } = this.state;
    console.log(email);
    console.log(password);
    const payload = { email, password, password_confirmation: password };
    const secret = 'secret';
    const token = jwt.encode(payload, secret);
    console.log(token);
    debugger;

    try {
      await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: {
                email: email,
                password: password,
                password_confirmation: password
            }
        })
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        debugger;
      });
    } catch (errors) { console.log(errors); }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Card>
        <CardSection>
          <Input
            secureTextEntry
            placeholder='user@email.com'
            label='Email'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder='password'
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          <MyButton
            onPress={
              this.onLoginPress.bind(this)
            }
          >Submit</MyButton>
        </CardSection>
        <CardSection>
          <MyButton
            onPress={() => navigate('SignUp')}
          >Sign Up</MyButton>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
