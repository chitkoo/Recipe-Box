import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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

const title = props => {
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
    <View style={styles.titleContainer}>
      <Animated.View style={[styles.titleWrapper, slideInLeft]}>
        <View style={styles.headerTxtWrapper}>
          <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
        <TouchableOpacity onPress={props.seeAllCuisine}>
          <Text style={styles.subHeaderTitle}>{props.txt}</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default title;
