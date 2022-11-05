import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {Platform, useWindowDimensions} from 'react-native';

import ScreenName from '@Configs/ScreenName';
import HomeScreen from '@Screens/HomeScreen';
import LoginScreen from '@Screens/LoginScreen';

const MainStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainScreenStack = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name={ScreenName.Login} component={LoginScreen} />
      <MainStack.Screen name={ScreenName.Home} component={HomeScreen} />
    </MainStack.Navigator>
  );
};

const AppNavigator = () => {
  const {width} = useWindowDimensions();

  return (
    <NavigationContainer>
      <MainScreenStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
