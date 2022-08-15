import React, {useState, useEffect} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';
import * as actionRecipe from '@store/action/recipe';
import {useLocal} from '@hook/useLocal';

//fetch
import {getRecipes} from '@utils/fetchData';
import apiUrl from '@utils/apiUrl';
//comp
import Header from '@components/selectCuisineRecipes/header';
import Loading from '@components/selectCuisineRecipes/loading';
import List from '@components/selectCuisineRecipes/list';

//styles
import styles from './Style';
import LinearGradient from 'react-native-linear-gradient';

const SelectCuisineRecipes = ({navigation, route}) => {
  const [cuisine, setCuisine] = useState([]);
  const {cuisineType} = route.params;

  const cuisineUrl = apiUrl.cuisine + cuisineType;
  const dispatch = useDispatch();
  const local = useLocal();

  useEffect(() => {
    getRecipes(cuisineUrl).then(data => setCuisine(data.meals));
  }, []);

  //go to detail of selected recipe
  const goDetail = ({item}) => {
    navigation.navigate('DetailScreen', {
      recipeId: item.idMeal,
      recipeName: item.strMeal,
    });
  };

  const goback = () => {
    navigation.goBack();
  };

  //save
  const savehandler = item => {
    let saveData = {
      mealId: item.idMeal,
      mealName: item.strMeal,
      mealImg: item.strMealThumb,
    };
    dispatch(actionRecipe.saveRecipe(saveData));
    ToastAndroid.show(local.save, ToastAndroid.SHORT);
  };

  return (
    <LinearGradient
      colors={['#F6D285', '#BBF0F3']}
      // version 1.0.0 colors={['#7EE8FA', '#EEC0C6']}
      useAngle={true}
      angle={360}
      style={styles.container}>
      <Header goback={goback} title={cuisineType} />
      {cuisine.length > 0 ? (
        <List data={cuisine} goDetail={goDetail} saveAction={savehandler} />
      ) : (
        <Loading />
      )}
    </LinearGradient>
  );
};

export default SelectCuisineRecipes;
