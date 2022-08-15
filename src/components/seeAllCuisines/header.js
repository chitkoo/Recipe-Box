import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useLocal} from '@hook/useLocal';

import styles from './style';
import Back from '@assets/icons/Back';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '@global/colors';

const header = props => {
  const local = useLocal();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={props.goBackHome} style={styles.backBtn}>
        <Back width={wp(5)} height={wp(5)} color={colors.primary} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{local.allCuisines}</Text>
    </View>
  );
};

export default header;
