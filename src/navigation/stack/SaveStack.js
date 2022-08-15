import React, {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//comp
import SaveScreen from '@pages/save/Save';
import SaveRecipeDetailScreen from '@pages/saveRecipeDetail/SaveRecipeDetail';
import styles from '../tab/Style';

const Stack = createNativeStackNavigator();

const SaveStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    let showRouteName = ['SaveStack', 'SaveScreen'];
    let routeName = getFocusedRouteNameFromRoute(route);
    if (
      showRouteName.includes(routeName == undefined ? 'SaveScreen' : routeName)
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
        name="SaveScreen"
        component={SaveScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SaveRecipeDetailScreen"
        component={SaveRecipeDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SaveStack;
