import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import SignUpScreen from './components/SignUpScreen';

// class App extends Component {
//   render() {
//     return (
//       <View>
//         <LoginForm />
//       </View>
//     );
//   }
// }

const App = StackNavigator({
  Login: {
    screen: LoginForm,
    navigationOptions: () => ({
      headerRight: <Button title='Sign Up' onPress={() => this.props.navigation.navigate('SignUp')} />
    })
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: () => ({
      headerRight: <Button title='Log In' />
    })
  },
});

export default App;
