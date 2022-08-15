import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useLocal} from '@hook/useLocal';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
} from 'react-native-reanimated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './style';
import {images} from '@assets/index';

const emptySave = () => {
  const local = useLocal();

  useEffect(() => {
    slideIn.value = withDelay(300, withSpring(wp(0)));
  }, []);

  //animation
  const slideIn = useSharedValue(wp(100));

  const slideInRight = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: slideIn.value,
        },
      ],
    };
  });

  return (
    <View style={styles.emptySearchContainer}>
      <Animated.View style={slideInRight}>
        <View style={styles.imgContainer}>
          <Image source={images.emptySave} style={styles.emptyImg} />
        </View>
        <Text style={styles.emptyTxt}>{local.noSaveTxt}</Text>
      </Animated.View>
    </View>
  );
};

export default emptySave;
