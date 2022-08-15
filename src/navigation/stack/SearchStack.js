import React, {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
//stack
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//comp
import SearchScreen from '@pages/search/Search';
import SearchResultDetail from '@pages/searchResultDetail/SearchResultDetail';
import styles from '../tab/Style';

const Stack = createNativeStackNavigator();

const SearchStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    let showRouteName = ['SearchStack', 'SearchScreen'];
    let routeName = getFocusedRouteNameFromRoute(route);
    if (
      showRouteName.includes(
        routeName == undefined ? 'SearchScreen' : routeName,
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
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchResultDetail"
        component={SearchResultDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
