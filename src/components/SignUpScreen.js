import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection, MyButton } from './common';

class SignUpScreen extends Component {
  static navigationOptions = {
    title: 'Sign Up'
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Card>
          <CardSection>
            <MyButton
              onPress={() => navigate('Login')}
            >Log In</MyButton>
            </CardSection>
        </Card>
      </View>
    );
  }
}

export default SignUpScreen;
