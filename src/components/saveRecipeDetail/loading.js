import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {images} from '@assets';
import Save from '@assets/icons/Save';
import {colors} from '@global/colors';

const loading = () => {
  return (
    <View style={styles.recipeDetailContainer}>
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} color={colors.primary} />
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.detailTxt}>
          <Text style={styles.text}>Loading... </Text>
        </View>
      </View>
    </View>
  );
};

export default loading;
