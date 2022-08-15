import React from 'react';
import {View, Text, Dimensions} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '@pages/login/Login';
import RegisterScreen from '@pages/register/Register';

const Stack = createNativeStackNavigator();
const {width, height} = Dimensions.get('window');

const AuthStack = () => {
  return (
    <View style={{width, height, backgroundColor: '#000'}}>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </View>
  );
};

export default AuthStack;
