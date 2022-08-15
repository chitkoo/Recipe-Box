import React, {useEffect, useState, useContext} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';
import * as actionRecipe from '@store/action/recipe';
import styles from './Style';
import {useLocal} from '@hook/useLocal';

//fetch
import {getRecipes} from '@utils/fetchData';
import apiUrl from '@utils/apiUrl';

import LinearGradient from 'react-native-linear-gradient';
//comps
import Searchbar from '@components/search/searchBar';
import EmptySearch from '@components/search/emptySearch';
import Result from '@components/search/result';

const Search = ({navigation, route}) => {
  const [searchResult, setSearchResult] = useState([]);
  const [condition, setConditon] = useState('');

  const dispatch = useDispatch();
  const local = useLocal();

  const searchUrl = apiUrl.search + searchResult;

  const searchHandler = () => {
    if (searchResult.length > 0) {
      getRecipes(searchUrl).then(data => setSearchResult(data.meals));
      setConditon('search');
    } else {
      ToastAndroid.show('Please enter ', ToastAndroid.SHORT);
    }
  };

  const goSearchDetail = ({item}) => {
    navigation.push('SearchResultDetail', {
      recipeId: item.idMeal,
      recipeName: item.strMeal,
    });
  };

  //save
  const savehandler = item => {
    let saveData = {
      mealId: item.idMeal,
      mealName: item.strMeal,
      mealImg: item.strMealThumb,
    };
    dispatch(actionRecipe.saveRecipe(saveData));
    ToastAndroid.show('Recipe saved!', ToastAndroid.SHORT);
  };

  return (
    <LinearGradient
      colors={['#F6D285', '#BBF0F3']}
      // version 1.0.0 colors={['#7EE8FA', '#EEC0C6']}
      useAngle={true}
      angle={360}
      style={styles.container}>
      <Searchbar
        search={searchResult}
        onChangeSearch={value => setSearchResult(value)}
        searchAction={searchHandler}
      />

      {condition === 'search' ? (
        <Result
          data={searchResult}
          goSearchDetail={goSearchDetail}
          saveAction={savehandler}
        />
      ) : (
        <EmptySearch />
      )}
    </LinearGradient>
  );
};

export default Search;
