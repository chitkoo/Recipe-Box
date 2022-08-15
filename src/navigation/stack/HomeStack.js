import React, {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
  withDecay,
} from 'react-native-reanimated';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//comp
import HomeScreen from '@pages/home/Home';
import SelectCuisineRecipes from '@pages/selectCuisineRecipes/SelectCuisineRecipes';
import SeeAllCuisines from '@pages/seeAllCuisines/SeeAllCuisines';
import DetailScreen from '@pages/detail/Detail';
import styles from '../tab/Style';

const Stack = createNativeStackNavigator();

const HomeStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    let showRouteName = ['HomeStack', 'HomeScreen'];
    let routeName = getFocusedRouteNameFromRoute(route);
    if (
      showRouteName.includes(routeName == undefined ? 'HomeScreen' : routeName)
    ) {
      navigation.setOptions({
        tabBarStyle: {
          display: 'flex',
          ...styles.customeTab,
        },
      });
    } else {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="SelectCuisineRecipes"
        component={SelectCuisineRecipes}
      />
      <Stack.Screen name="SeeAllCuisines" component={SeeAllCuisines} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;

