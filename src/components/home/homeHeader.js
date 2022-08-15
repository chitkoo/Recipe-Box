import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
  withDecay,
} from 'react-native-reanimated';

//style
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '@global/colors';
import Search from '@assets/icons/Search';
import {useLocal} from '@hook/useLocal';

const homeHeader = ({goToSearch}) => {
  const local = useLocal();

  useEffect(() => {
    slideIn.value = withDelay(800, withSpring(wp(0)));
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
    <View style={styles.container}>
      <Animated.View style={[styles.headerTxtWrapper, slideInLeft]}>
        <Text style={styles.headerTitle}>Welcome to recipes box</Text>
        <Text style={styles.subHeaderTitle}>
          Let's make some delicious food
        </Text>
      </Animated.View>

      <Animated.View style={slideInLeft}>
        <TouchableOpacity onPress={goToSearch}>
          <Search width={wp(7)} height={wp(7)} color={colors.primary} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default homeHeader;
