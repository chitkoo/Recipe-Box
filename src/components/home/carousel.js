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

import {AuthContext} from '@context/context';

import {LOADING_DATA} from './data';

//style
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {images} from '@assets';
import Save from '@assets/icons/Save';
import {colors} from '@global/colors';

const carousel = props => {
  const renderComponent = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => props.seeSelectRecipeDetail({item})}
        style={styles.card}
        activeOpacity={0.5}>
        {/* recipe img */}
        <View style={styles.imgWrapper}>
          <Image source={{uri: item.strMealThumb}} style={styles.img} />
        </View>

        <View style={styles.descrWrapper}>
          <View>
            <Text style={styles.recipeTitle}>{item.strMeal}</Text>
            <Text style={styles.recipeDesc}>
              {item.strArea && `Cuisine : ${item.strArea}`}
            </Text>
          </View>

          {/* Save button */}
          <TouchableOpacity
            onPress={() => props.saveAction(item)}
            activeOpacity={0.5}>
            <Save width={wp(8)} height={wp(8)} color={colors.secondary} />
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
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      estimatedItemSize={2000}
    />
  );
};

export default carousel;
