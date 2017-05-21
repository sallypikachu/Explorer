import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input, ClickableText, Header } from './common';

class LoginForm extends Component {
  render() {
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
          <Button>Submit</Button>
        </CardSection>
        <CardSection>
          <ClickableText text='Sign Up' />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
