import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ToastAndroid,
} from 'react-native';
import {useLocal} from '@hook/useLocal';

import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {images} from '@assets';
import Youtube from '@assets/icons/Youtube';
import {colors} from '@global/colors';

const recipeDetail = props => {
  const url = props.data[0].strYoutube;
  const local = useLocal();

  const openYoutube = async () => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      ToastAndroid.show('Cant open youtube!', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.recipeDetailContainer}>
      {/* recipe image */}
      <Image
        source={{uri: props.data[0].strMealThumb}}
        style={styles.recipeImg}
      />

      {/* recipe description */}
      <View style={styles.descriptionContainer}>
        <View style={styles.detailTxt}>
          <Text style={styles.text}>{local.detailName} - </Text>
          <Text style={styles.descript}>{props.data[0].strMeal}</Text>
        </View>
        <View style={styles.detailTxt}>
          <Text style={styles.text}>{local.detailCuisine} - </Text>
          <Text style={styles.descript}>{props.data[0].strArea}</Text>
        </View>

        <View style={styles.detailTxt}>
          <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
            {local.detailIngredients}
          </Text>
        </View>
        <View style={styles.detailTxt}>
          <Text style={styles.descript}>
            {props.data[0].strIngredient1}, {props.data[0].strIngredient2},{' '}
            {props.data[0].strIngredient3}, {props.data[0].strIngredient4},{' '}
            {props.data[0].strIngredient5}, {props.data[0].strIngredient6},{' '}
            {props.data[0].strIngredient7}, {props.data[0].strIngredient8},{' '}
            {props.data[0].strIngredient9}
          </Text>
        </View>
        <TouchableOpacity onPress={openYoutube} style={styles.youtubeBtn}>
          <Text style={styles.youtubeBtnTxt}>{local.utube}</Text>
          <Youtube width={wp(5)} height={wp(5)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default recipeDetail;
