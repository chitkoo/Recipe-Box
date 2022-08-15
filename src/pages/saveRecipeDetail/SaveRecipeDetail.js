import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useLocal} from '@hook/useLocal';

//fetch
import {getRecipes} from '@utils/fetchData';
import apiUrl from '@utils/apiUrl';

import Header from '@components/saveRecipeDetail/header';
import Loading from '@components/saveRecipeDetail/loading';
import SaveItemDetail from '@components/saveRecipeDetail/saveItemDetail';
import styles from './Style';
import LinearGradient from 'react-native-linear-gradient';

const SaveRecipeDetail = ({navigation, route}) => {
  const [saveRecipeDetail, setSaveRecipeDetail] = useState([]);
  const local = useLocal();

  const {mealId} = route.params;

  const resultUrl = apiUrl.detail + mealId;

  useEffect(() => {
    getRecipes(resultUrl).then(data => setSaveRecipeDetail(data.meals));
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
      <Header title={local.saveRecipeDetail} goBack={goBack} />
      {saveRecipeDetail.length > 0 ? (
        <SaveItemDetail data={saveRecipeDetail} />
      ) : (
        <Loading />
      )}
    </LinearGradient>
  );
};

export default SaveRecipeDetail;
