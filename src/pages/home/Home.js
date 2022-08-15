import React, {useState, useEffect} from 'react';
import {ScrollView, ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';
import * as actionRecipe from '@store/action/recipe';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
} from 'react-native-reanimated';

//fetch
import {getRecipes} from '@utils/fetchData';
import apiUrl from '@utils/apiUrl';

//style
import styles from './Style';
import LinearGradient from 'react-native-linear-gradient';

import {useLocal} from '@hook/useLocal';

//comp
import StatusBarDark from '@global/statusBarDark/statusBarDark';
import HomeHeader from '@components/home/homeHeader';
import Carousel from '@components/home/carousel';
import Title from '@components/home/title';
import Cuisine from '@components/home/cuisine';
import Loading from '@components/home/loading';

const Home = ({navigation, route}) => {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [trendRecipes, setTrendRecipes] = useState([]);

  const local = useLocal();

  const dispatch = useDispatch();

  //get data from api
  useEffect(() => {
    getRecipes(apiUrl.popular).then(data => setPopularRecipes(data.meals));
    getRecipes(apiUrl.trend).then(data => setTrendRecipes(data.meals));

    //animation
    size.value = withDelay(900, withSpring(1));
  }, []);

  //see all cuisine
  const seeAllCuisine = () => {
    navigation.navigate('SeeAllCuisines');
  };

  //see selected cuisine in carousal
  const seeSelectCuisine = name => {
    navigation.navigate('SelectCuisineRecipes', {cuisineType: name});
  };

  //see detail of popular and trending recipe in carousel
  const seeSelectRecipeDetail = ({item}) => {
    navigation.navigate('DetailScreen', {
      recipeId: item.idMeal,
      recipeName: item.strMeal,
    });
  };

  //go to search
  const goToSearchHandler = () => {
    navigation.navigate('SearchStack');
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

  //animation
  const size = useSharedValue(0);

  const animatedBox = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: size.value,
        },
      ],
    };
  });

  return (
    <LinearGradient
      colors={['#F6D285', '#BBF0F3']}
      // version 1.0.0 colors={['#7EE8FA', '#EEC0C6']}
      useAngle={true}
      angle={360}
      style={styles.container}>
      <StatusBarDark />

      <HomeHeader goToSearch={goToSearchHandler} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <Title
          title={local.cuisine}
          txt={local.seeAll}
          seeAllCuisine={seeAllCuisine}
        />

        <Animated.View style={animatedBox}>
          <Cuisine seeSelectCuisine={seeSelectCuisine} />
        </Animated.View>

        <Title title={local.popular} />
        {popularRecipes.length > 1 ? (
          <Animated.View style={animatedBox}>
            <Carousel
              data={popularRecipes}
              seeSelectRecipeDetail={seeSelectRecipeDetail}
              saveAction={savehandler}
            />
          </Animated.View>
        ) : (
          <Animated.View style={animatedBox}>
            <Loading />
          </Animated.View>
        )}

        <Title title={local.trend} />
        {trendRecipes.length > 1 ? (
          <Animated.View style={animatedBox}>
            <Carousel
              data={trendRecipes}
              seeSelectRecipeDetail={seeSelectRecipeDetail}
              saveAction={savehandler}
            />
          </Animated.View>
        ) : (
          <Animated.View style={animatedBox}>
            <Loading />
          </Animated.View>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;


