import React from 'react';
import {View, Text, Image} from 'react-native';
import {useLocal} from '@hook/useLocal';

import styles from './style';
import {images} from '@assets/index';

const notFound = () => {
  const local = useLocal();

  return (
    <View style={styles.emptySearchContainer}>
      <Text style={styles.emptyTxt}>{local.cantFind}</Text>
      <View style={styles.imgContainer}>
        <Image source={images.notFound} style={styles.emptyImg} />
      </View>
    </View>
  );
};

export default notFound;
