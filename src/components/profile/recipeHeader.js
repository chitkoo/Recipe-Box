import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useLocal} from '@hook/useLocal';

import Animated, {FadeIn} from 'react-native-reanimated';

import styles from './style';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '@global/colors';

import Plus from '@assets/icons/Plus';

const recipeHeader = props => {
  const local = useLocal();

  return (
    <Animated.View
      style={styles.recipeHeaderWrapper}
      entering={FadeIn.delay(600)}>
      <Text style={styles.recipeTitle}>{local.ownRecipes}</Text>
      <TouchableOpacity style={styles.createBtn} onPress={props.goCreateRecipe}>
        <Plus width={wp(6)} height={wp(6)} color={colors.title} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default recipeHeader;
