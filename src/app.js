import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import LoginForm from './components/LoginForm';
import SignUpScreen from './components/SignUpScreen';
import { Provider, connect } from 'react-redux';

import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';

const Routes = {
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
  }
};

const App = StackNavigator(Routes, { initialRouteName: 'Login' });
const AppNavigator = StackNavigator(Routes, { initialRouteName: 'Login' });

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

function getRootReducer(navReducer) {
  return combineReducers({
      nav: navReducer
  });
}

function getStore(navReducer) {
  const store = createStore(
    getRootReducer(navReducer),
    undefined,
    applyMiddleware(thunk)
  );
  return store;
}

class AppWithNavigationState extends Component {
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    );
  }
}

const store = getStore(navReducer);

export default App;
