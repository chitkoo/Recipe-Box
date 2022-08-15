import React from 'react';
import {View, Text} from 'react-native';

import styles from './Style';
import LinearGradient from 'react-native-linear-gradient';

//comp
import Header from '@components/seeAllCuisines/header';
import List from '@components/seeAllCuisines/list';

const SeeAllCuisines = ({navigation, route}) => {
  const goBackHome = () => {
    navigation.goBack();
  };

  //see selected cuisine recipe from list (Cuisine list is shown by pressing See all)
  const seeSelectCuisine = name => {
    navigation.navigate('SelectCuisineRecipes', {cuisineType: name});
  };

  return (
    <LinearGradient
      colors={['#F6D285', '#BBF0F3']}
      // version 1.0.0 colors={['#7EE8FA', '#EEC0C6']}
      useAngle={true}
      angle={360}
      style={styles.container}>
      <Header goBackHome={goBackHome} />
      <List seeSelectCuisine={seeSelectCuisine} />
    </LinearGradient>
  );
};

export default SeeAllCuisines;
