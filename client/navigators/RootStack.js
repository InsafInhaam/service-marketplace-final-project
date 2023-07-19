import React from 'react';
 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { tertiary, primary } from '../components/style';

import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Home from './../screens/Home';
import Services from '../screens/Services';
import ServicerList from '../screens/ServicerList';
import Profile from '../screens/Profile';
import Message from '../screens/Message';
import LabourProfile from '../screens/LabourProfile';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyled: { backgroundColor: 'transparent' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTransparent: true,
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
        }}
        initialRouteName="LabourProfile" 
      >
        <Stack.Screen options={{ headerTintColor: primary, title: '' }} name="Login" component={Login} />
        <Stack.Screen options={{ headerTintColor: primary, title: '' }} name="Signup" component={Signup} />
        <Stack.Screen options={{ title: 'Home' }} name="Home" component={Home} />
        <Stack.Screen options={{ title: 'Services' }} name="Services" component={Services} />
        <Stack.Screen options={{ title: 'ServicerList' }} name="ServicerList" component={ServicerList} />
        <Stack.Screen options={{ title: 'Profile' }} name="Profile" component={Profile} />
        <Stack.Screen options={{ title: 'Message' }} name="Message" component={Message} />
        <Stack.Screen options={{ title: 'LabourProfile' }} name="LabourProfile" component={LabourProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
