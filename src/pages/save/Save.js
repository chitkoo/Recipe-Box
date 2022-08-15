import React, {useState, useEffect} from 'react';
import {ToastAndroid} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import * as actionRecipe from '@store/action/recipe';
import {useLocal} from '@hook/useLocal';

import EmptySave from '@components/saveRecipe/emptySave';
import Header from '@components/saveRecipe/header';
import SaveRecipes from '@components/saveRecipe/saveRecipes';

import styles from './Style';
import LinearGradient from 'react-native-linear-gradient';

const Save = ({navigation, route}) => {
  const saveItem = useSelector(state => state.recipeList.saveRecipes);

  const dispatch = useDispatch();

  const local = useLocal();

  const unSaveRecipe = id => {
    dispatch(actionRecipe.unSaveRecipe(id));
    ToastAndroid.show('Recipe Unsaved!', ToastAndroid.SHORT);
  };

  const goSaveItemDetail = id => {
    navigation.push('SaveRecipeDetailScreen', {mealId: id});
  };

  return (
    <LinearGradient
      colors={['#F6D285', '#BBF0F3']}
      // version 1.0.0 colors={['#7EE8FA', '#EEC0C6']}
      useAngle={true}
      angle={360}
      style={styles.container}>
      <Header />
      {saveItem.length > 0 ? (
        <SaveRecipes
          data={saveItem}
          unSaveAction={unSaveRecipe}
          seeDetailAction={goSaveItemDetail}
        />
      ) : (
        <EmptySave />
      )}
    </LinearGradient>
  );
};

export default Save;
