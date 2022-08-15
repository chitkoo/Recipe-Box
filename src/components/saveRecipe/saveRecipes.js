import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import {FlashList} from '@shopify/flash-list';
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {images} from '@assets';
import Save from '@assets/icons/Save';
import Delete from '@assets/icons/Delete';
import {colors} from '@global/colors';

const saveRecipes = props => {
  const renderComponent = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => props.seeDetailAction(item.mealId)}
        style={styles.card}
        activeOpacity={0.5}>
        <View style={styles.imgWrapper}>
          <Image source={{uri: item.mealImg}} style={styles.img} />
        </View>

        <View style={styles.descrWrapper}>
          <View>
            <Text style={styles.recipeTitle}>{item.mealName}</Text>
          </View>

          {/* UnSave button */}
          <TouchableOpacity
            onPress={() => props.unSaveAction(item.id)}
            activeOpacity={0.5}>
            <Delete width={wp(8)} height={wp(8)} color={colors.danger} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlashList
      data={props.data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderComponent}
      showsVerticalScrollIndicator={false}
      estimatedItemSize={3000}
    />
  );
};

export default saveRecipes;
