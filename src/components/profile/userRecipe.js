import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {FlashList} from '@shopify/flash-list';
import Animated, {FadeIn} from 'react-native-reanimated';

import styles from './style';
import Back from '@assets/icons/Back';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '@global/colors';
import {images} from '@assets';
import Delete from '@assets/icons/Delete';
import Edit from '@assets/icons/Edit';

const userRecipe = props => {
  const renderComponent = ({item}) => {
    return (
      <Animated.View style={styles.createItemWrapper} activeOpacity={0.5} entering={FadeIn.delay(600)}>
        <View style={styles.itemImgWrapper}>
          <Image source={{uri: item.image}} style={styles.createImg} />
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => props.deleteRecipeAction(item.id)}
            style={styles.deleteBtn}>
            <Delete width={wp(8)} height={wp(8)} color={colors.danger} />
          </TouchableOpacity>
        </View>

        <View style={styles.descTxtWrapper}>
          <Text style={styles.recipeTitle}>{item.name}</Text>
          <Text style={styles.recipeTitle}>{item.meat}</Text>
          <Text style={styles.recipeTitle}>{item.cuisine}</Text>
          <Text style={styles.recipeTitle}>
            Created at {item.date}/{item.month}/{item.year}
          </Text>
          <TouchableOpacity
            onPress={() => props.upDateRecipeAction(item)}
            activeOpacity={0.5}
            style={styles.editBtn}>
            <Edit width={wp(6)} height={wp(6)} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </Animated.View>
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

export default userRecipe;
