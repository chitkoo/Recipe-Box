import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import {FlashList} from '@shopify/flash-list';

import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '@global/colors';

import Save from '@assets/icons/Save';
import {LOADING_DATA} from './data';

const loading = () => {
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
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      estimatedItemSize={333}
    />
  );
};

export default loading;
