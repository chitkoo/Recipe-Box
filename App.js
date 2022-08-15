import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import codePush from 'react-native-code-push';

const App = () => {
  return <AppNavigator />;
};

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.IMMEDIATE,
  updateDialog: true,
};

export default codePush(codePushOptions)(App);
