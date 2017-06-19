import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import SignUpScreen from './components/SignUpScreen';

const Routes = {
  Login: {
    screen: LoginForm,
    // navigationOptions: () => ({
    //   headerRight: <Button
    //     title='Sign Up'
    //     onPress={() => this.props.navigation.navigate('SignUp')}
    //   />
    // })
  },
  SignUp: {
    screen: SignUpScreen,
    // navigationOptions: () => ({
    //   headerRight: <Button
    //     title='Log In'
    //     onPress={() => this.props.navigation.navigate('Login')}
    //   />
    // })
  }
};

const App = StackNavigator(Routes, { initialRouteName: 'Login' });

export default App;
