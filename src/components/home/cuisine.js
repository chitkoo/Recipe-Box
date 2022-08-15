import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';

//cuisine types
import {CUISINE_DATA} from './data';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const cuisine = props => {
  const renderComp = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => props.seeSelectCuisine(item.name)}
        style={styles.cuisineContainer}
        activeOpacity={0.5}>
        <ImageBackground source={item.image} style={styles.cuisineImg}>
          <LinearGradient
            colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)']}
            style={styles.gradient}>
            <Text style={styles.cuisineTxt}>{item.name}</Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <FlashList
      data={CUISINE_DATA}
      keyExtractor={(id, index) => index.toString()}
      renderItem={renderComp}
      estimatedItemSize={150}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default cuisine;
