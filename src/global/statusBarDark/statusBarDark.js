import React from 'react';
import {StatusBar} from 'react-native';

const statusBarDark = () => {
  return (
    <StatusBar
      barStyle={'dark-content'}
      translucent={true}
      backgroundColor={'transparent'}
    />
  );
};

export default statusBarDark;
