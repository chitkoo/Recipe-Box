import React from 'react';
import {StatusBar} from 'react-native';

const statusBar = () => {
  return (
    <StatusBar
      barStyle={'light-content'}
      translucent={true}
      backgroundColor={'transparent'}
    />
  );
};

export default statusBar;
