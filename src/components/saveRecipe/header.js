import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
  FadeIn
} from 'react-native-reanimated';
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useLocal} from '@hook/useLocal';

const header = props => {
  const local = useLocal();

  useEffect(() => {
    slideIn.value = withDelay(500, withSpring(wp(0)));
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
    <View style={styles.headerContainer}>
      <Animated.View entering={FadeIn}>
        <Text style={styles.headerTitle}>{local.savetitle}</Text>
      </Animated.View>
    </View>
  );
};

export default header;
