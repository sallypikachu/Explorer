import React, { Component } from 'react';
import { Card, CardSection, MyButton, Input } from './common';

class LoginForm extends Component {
  static navigationOptions = {
    title: 'Log In'
 };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Card>
        <CardSection>
          <Input
            placeholder='user@email.com'
            label='Email'
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder='password'
            label='Password'
          />
        </CardSection>
        <CardSection>
          <MyButton>Submit</MyButton>
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
