import React from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';

import {LOADING_DATA} from '../home/data';
import {FlashList} from '@shopify/flash-list';
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '@global/colors';
import Save from '@assets/icons/Save';

const loading = props => {
  const renderComp = ({item}) => {
    return (
      <View style={styles.card} activeOpacity={0.5}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={colors.primary} />
        </View>

        <View style={styles.descrWrapper}>
          <View>
            <Text style={styles.recipeTitle}> </Text>
            <Text style={styles.recipeDesc}>{item.name}</Text>
          </View>

         
        </View>
      </View>
    );
  };
  return (
    <FlashList
      data={LOADING_DATA}
      keyExtractor={(id, index) => index.toString()}
      renderItem={renderComp}
      estimatedItemSize={1800}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default loading;
