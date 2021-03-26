import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import LoginScreen from './screen/MyLoginScreen';
import {AppDrawerNavigator} from './component/AppDrawerNavigator';

export default function App(){
  return (
    <AppContainer />
  );
}

const Switch = createSwitchNavigator({
  Login:{screen:LoginScreen},
  DrawerScreen:{screen:AppDrawerNavigator}
})
const AppContainer = createAppContainer(Switch)

