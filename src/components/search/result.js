import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {FlashList} from '@shopify/flash-list';
import {useLocal} from '@hook/useLocal';

import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '@global/colors';
import Save from '@assets/icons/Save';
import {images} from '@assets/index';
import NotFound from './notFound';

const result = props => {
  const local = useLocal();

  const renderComponent = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => props.goSearchDetail({item})}
        style={styles.card}
        activeOpacity={0.5}>
        {/* recipe img */}
        <View style={styles.imgWrapper}>
          <Image source={{uri: item.strMealThumb}} style={styles.img} />
        </View>

        <View style={styles.descrWrapper}>
          <View>
            <Text style={styles.recipeTitle}>{item.strMeal}</Text>
          </View>

          {/* Save button */}
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => props.saveAction(item)}>
            <Save width={wp(8)} height={wp(8)} color={colors.secondary} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  if (props.data != null && props.data.length > 0) {
    return (
      <>
        {props.data && (
          <View style={styles.resultTxtContainer}>
            <Text style={styles.resiltTxt}>
              {local.found} {props.data.length} {local.results}
            </Text>
          </View>
        )}
        <FlashList
          data={props.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderComponent}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={3200}
        />
      </>
    );
  } else if (props.data == null) {
    return <NotFound />;
  }
};

export default result;
