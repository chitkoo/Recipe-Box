import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

//fetch
import {getRecipes} from '@utils/fetchData';
import apiUrl from '@utils/apiUrl';

//comp
import Header from '@components/searchResultDetail/header';
import ResultDetail from '@components/searchResultDetail/resultDetail';
import Loading from '@components/searchResultDetail/loading';

//styles
import styles from './Style';
import LinearGradient from 'react-native-linear-gradient';

const SearchResultDetail = ({navigation, route}) => {
  const [searchResult, setSearchResult] = useState([]);

  const {recipeId, recipeName} = route.params;

  const resultUrl = apiUrl.detail + recipeId;

  useEffect(() => {
    getRecipes(resultUrl).then(data => setSearchResult(data.meals));
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
      <Header title={recipeName} goBack={goBack} />
      {searchResult.length > 0 ? (
        <ResultDetail data={searchResult} />
      ) : (
        <Loading />
      )}
    </LinearGradient>
  );
};

export default SearchResultDetail;
