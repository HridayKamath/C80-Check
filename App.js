import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import {RNDNavigator} from './components/RNDNavigator';
import { AppDrawerNavigator } from './components/DrawerNavigator';





export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
    
  );
}
}


var AppNavigator = createSwitchNavigator({
  LoginScreen : {screen: LoginScreen},
 //WelcomeScreen: {screen:WelcomeScreen},
  BottomTab: {screen: RNDNavigator},
  Drawer: {screen: AppDrawerNavigator}
})

const AppContainer = createAppContainer(AppNavigator)
