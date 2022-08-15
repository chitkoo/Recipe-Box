import React, {useContext, useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import {Provider} from 'react-redux';
import store from '../store';
import {appStorage} from '@utils/appStorage';
//redux toolkit persist
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

import ManualSplash from '@pages/splash/Splash';
//context
import {AuthContext} from '../context/context';

import {NavigationContainer} from '@react-navigation/native';

import OnboardingScreen from '../pages/onboarding/Onboarding';

//stack
import AuthStack from './stack/AuthStack';
import TabNavigator from './tab/TabNavigator';

//redux persist
let persistor = persistStore(store);

const AppNavigator = () => {
  const [auth, setAuth] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [lang, setLang] = useState('en');
  const [profileImg, setProfileImg] = useState('');

  //onboarding
  const [firstLaunch, setFirstLunch] = useState(true);

  //manual splash
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    showOnboarding();
    getData();
    SplashScreen.hide();
  }, []);

  const showOnboarding = () => {
    let user = appStorage.getItem('@user.data');
    if (user) {
      setFirstLunch(false);
    } else {
      setFirstLunch(true);
    }
  };

  const context = {
    auth,
    changeAuth: value => {
      setAuth(value);
    },
    userInfo,
    changeUserInfo: value => {
      setUserInfo(value);
    },
    lang,
    changeLang: value => {
      setLang(value);
    },
    profileImg,
    changeProifleImg: value => {
      setProfileImg(value);
    },

    firstLaunch,
    changeLaunch: value => {
      setFirstLunch(value);
    },
  };

  const getData = () => {
    try {
      const token = appStorage.getItem('@user.token');
      const userData = appStorage.getItem('@user.data');
      const lang = appStorage.getItem('@lang');

      const profilePic = appStorage.getItem('@user.profile');
      setProfileImg(profilePic);

      setLang(lang);
      if (token && userData) {
        setAuth(true);
        setUserInfo(JSON.parse(userData));
        setTimeout(() => {
          setSplash(false);
        }, 2000);
      } else {
        setAuth(false);
        setTimeout(() => {
          setSplash(false);
        }, 2000);
      }
    } catch (error) {
      setAuth(false);
      setTimeout(() => {
        setSplash(false);
      }, 2000);
    }
  };

  if (firstLaunch) {
    return (
      <AuthContext.Provider value={context}>
        <OnboardingScreen />
      </AuthContext.Provider>
    );
  } else {
    if (splash) {
      return (
        <View style={{flex: 1, backgroundColor: '#000'}}>
          <ManualSplash />
        </View>
      );
    } else if (auth) {
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AuthContext.Provider value={context}>
              <View style={{flex: 1, backgroundColor: '#F6D285'}}>
                <NavigationContainer>
                  <TabNavigator />
                </NavigationContainer>
              </View>
            </AuthContext.Provider>
          </PersistGate>
        </Provider>
      );
    } else {
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AuthContext.Provider value={context}>
              <View style={{flex: 1, backgroundColor: '#000'}}>
                <NavigationContainer>
                  <AuthStack />
                </NavigationContainer>
              </View>
            </AuthContext.Provider>
          </PersistGate>
        </Provider>
      );
    }
  }
};

export default AppNavigator;

//verion 1 backgroundColor: color 7EE8FA
