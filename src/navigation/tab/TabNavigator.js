import React, {useLayoutEffect, useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useSelector} from 'react-redux';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '@global/colors';

import Profile from '@assets/icons/Profile';
import Save from '@assets/icons/Save';
import Search from '@assets/icons/Search';
import Home from '@assets/icons/Home';

import HomeStack from '../stack/HomeStack';
import SearchStack from '../stack/SearchStack';
import SaveStack from '../stack/SaveStack';
import ProfileStack from '../stack/ProfileStack';

const Tab = createBottomTabNavigator();

const TabNavigator = ({navigation, route}) => {
  const saveItem = useSelector(state => state.recipeList.saveRecipes);

  const userRecipes = useSelector(state => state.recipeList.recipes);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            title: 'Home',
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.secondary,
            tabBarIcon: ({focused}) => (
              <Home
                width={wp(6)}
                height={wp(6)}
                color={focused ? colors.primary : colors.secondary}
              />
            ),
          }}
        />
        <Tab.Screen
          name="SearchStack"
          component={SearchStack}
          options={{
            title: 'Search',
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.secondary,
            tabBarIcon: ({focused}) => (
              <Search
                width={wp(6)}
                height={wp(6)}
                color={focused ? colors.primary : colors.secondary}
              />
            ),
          }}
        />
        <Tab.Screen
          name="SaveStack"
          component={SaveStack}
          options={{
            title: 'Save',
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.secondary,
            tabBarIcon: ({focused}) => (
              <Save
                width={wp(6.5)}
                height={wp(6.5)}
                color={focused ? colors.primary : colors.secondary}
              />
            ),
            tabBarBadge: saveItem.length > 0 ? saveItem.length : null,
            tabBarBadgeStyle: {
              backgroundColor: colors.primary,
              color: colors.white,
            },
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            title: 'Profile',
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.secondary,
            tabBarIcon: ({focused}) => (
              <Profile
                width={wp(6.6)}
                height={wp(6.6)}
                color={focused ? colors.primary : colors.secondary}
              />
            ),
            tabBarBadge: userRecipes.length > 0 ? userRecipes.length : null,
            tabBarBadgeStyle: {
              backgroundColor: colors.primary,
              color: colors.white,
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;
