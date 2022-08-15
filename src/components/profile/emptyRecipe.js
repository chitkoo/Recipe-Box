import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useLocal} from '@hook/useLocal';

import Animated, {FadeIn} from 'react-native-reanimated';

import styles from './style';

import {images} from '@assets';

const emptyRecipe = () => {
  const local = useLocal();

  return (
    <Animated.View
      style={styles.emptyImgContainer}
      entering={FadeIn.delay(600)}>
      <Text style={styles.txt}>{local.noRecipes}</Text>
      <Text style={styles.txt}>{local.createRecipe}</Text>
      <Image source={images.add} style={styles.emptyImg} />
    </Animated.View>
  );
};

export default emptyRecipe;
