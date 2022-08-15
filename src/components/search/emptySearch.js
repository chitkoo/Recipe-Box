import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useLocal} from '@hook/useLocal';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
} from 'react-native-reanimated';

import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {images} from '@assets/index';

const emptySearch = () => {
  const local = useLocal();

  useEffect(() => {
    slideIn.value = withDelay(300, withSpring(wp(0)));
  }, []);

  //animation
  const slideIn = useSharedValue(wp(-100));

  const slideInLeft = useAnimatedStyle(() => {
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
      <Animated.View style={slideInLeft}>
        <Text style={styles.emptyTxt}>{local.find}</Text>
        <View style={styles.imgContainer}>
          <Image source={images.search} style={styles.emptyImg} />
        </View>
      </Animated.View>
    </View>
  );
};

export default emptySearch;
