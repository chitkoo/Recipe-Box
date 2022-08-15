import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import styles from './Style';
import {images} from '@assets';

import StatusBar from '@global/statusBar/statusBar';
import GradientOverlay from '@global/gradientOverlay/GradientOverlay';

const Splash = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <ImageBackground source={images.splash} style={styles.imageBg}>
        <GradientOverlay>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Recipe Box</Text>
            <Text style={styles.subTitle}>Developed by Chit Ko Ko Oo</Text>
          </View>
        </GradientOverlay>
      </ImageBackground>
    </View>
  );
};

export default Splash;
