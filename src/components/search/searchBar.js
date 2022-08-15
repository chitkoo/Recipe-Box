import React from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import {useLocal} from '@hook/useLocal';

import Animated, {FadeIn} from 'react-native-reanimated';

import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '@global/colors';
import Search from '@assets/icons/Search';

const searchBar = props => {
  const local = useLocal();

  return (
    <View style={styles.searchBarContainer}>
      <Animated.View style={[styles.inputWrapper]} entering={FadeIn.delay(400)}>
        <TextInput
          placeholder={local.searchBar}
          placeholderTextColor={colors.secondary}
          style={styles.input}
          value={props.search}
          onChangeText={props.onChangeSearch}
        />
      </Animated.View>

      <Animated.View entering={FadeIn.delay(400)}>
        <TouchableOpacity onPress={props.searchAction} activeOpacity={0.5}>
          <Search width={wp(7)} height={wp(7)} color={colors.primary} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default searchBar;
