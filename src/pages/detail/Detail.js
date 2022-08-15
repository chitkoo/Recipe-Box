import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

//fetch
import {getRecipes} from '@utils/fetchData';
import apiUrl from '@utils/apiUrl';

import styles from './Style';
import LinearGradient from 'react-native-linear-gradient';
//comp
import Header from '@components/detail/header';
import Loading from '@components/detail/loading';
import RecipeDetail from '@components/detail/recipeDetail';

const Detail = ({navigation, route}) => {
  const [recipeDetail, setRecipeDetail] = useState([]);

  const {recipeId, recipeName} = route.params;

  const detailUrl = apiUrl.detail + recipeId;

  //get data from api
  useEffect(() => {
    getRecipes(detailUrl).then(data => setRecipeDetail(data.meals));
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={['#F6D285', '#BBF0F3']}
      // version 1.0.0 colors={['#7EE8FA', '#EEC0C6']}
      useAngle={true}
      angle={360}
      style={styles.container}>
      <Header goBack={goBack} title={recipeName} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {recipeDetail.length > 0 ? (
          <RecipeDetail data={recipeDetail} />
        ) : (
          <Loading />
        )}
      </ScrollView>
    </LinearGradient>
  );
};

export default Detail;
