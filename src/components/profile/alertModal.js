import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useLocal} from '@hook/useLocal';
import {AuthContext} from '@context/context';
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import En from '@assets/icons/En';
import Mm from '@assets/icons/Mm';
import {colors} from '@global/colors';

const alertModal = props => {
  const local = useLocal();
  const {lang} = useContext(AuthContext);

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalWrapper}>
        <Text style={styles.langTitle}>{local.chooseLang}</Text>

        <TouchableOpacity
          onPress={() => props.langAction('en')}
          activeOpacity={0.5}>
          <View style={styles.selectLangWrapper}>
            <En width={wp(5)} height={wp(5)} color={colors.secondary} />
            <Text style={styles.langTxt}>{local.eng}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.langAction('mm')}
          activeOpacity={0.5}>
          <View style={styles.selectLangWrapper}>
            <Mm width={wp(5)} height={wp(5)} color={colors.secondary} />
            <Text style={styles.langTxt}>{local.mm}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default alertModal;
