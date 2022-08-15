import React, {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
//Stack
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//comp
import ProfileScreen from '@pages/profile/Profile';
import CreateRecipeScreen from '@pages/createRecipe/CreateRecipe';
import styles from '../tab/Style';

const Stack = createNativeStackNavigator();

const ProfileStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    let showRouteName = ['ProfileStack', 'ProfileScreen'];
    let routeName = getFocusedRouteNameFromRoute(route);
    if (
      showRouteName.includes(
        routeName == undefined ? 'ProfileScreen' : routeName,
      )
    ) {
      navigation.setOptions({
        tabBarStyle: {display: 'flex', ...styles.customeTab},
      });
    } else {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateRecipeScreen"
        component={CreateRecipeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
