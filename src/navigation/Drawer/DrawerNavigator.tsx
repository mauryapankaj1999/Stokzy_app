import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomBar from '../BottomBar/BottomBar';
import Profile from '../../screens/Profile/Profile';
import DrawerComponent from './DrawerComponent';

export type TabStackParamList = {
  BottomTabNavigator: undefined;
  Contact: undefined;
};
const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="BottomBar"
      drawerContent={props => <DrawerComponent {...props} />}>
      <Drawer.Screen
        name="BottomBar"
        component={BottomBar}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Contact" component={Profile} />
      {/*  <Drawer.Screen name="Setting" component={ContactUs} /> */}
    </Drawer.Navigator>
  );
}
