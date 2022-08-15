import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useLocal} from '@hook/useLocal';

import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '@global/colors';
import ImageIcon from '@assets/icons/Image';
import Back from '@assets/icons/Back';

const form = props => {
  const day = props.date?.getDate();
  const month = props.date?.getMonth() + 1;
  const year = props.date?.getFullYear();

  const local = useLocal();

  return (
    <>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={props.goBack} style={styles.backBtn}>
          <Back width={wp(5)} height={wp(5)} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {props.btnAction === 'create'
            ? local.createTitle
            : local.updateTitle}
        </Text>
      </View>
      <ScrollView
        style={styles.formContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={props.currentData ? props.currentData.name : local.formName}
            style={styles.input}
            placeholderTextColor={colors.white}
            value={props.name}
            onChangeText={props.onChangeName}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder={
              props.currentData ? props.currentData.cuisine : local.formCuisine
            }
            style={styles.input}
            placeholderTextColor={colors.white}
            value={props.cuisine}
            onChangeText={props.onChangeCuisine}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder={props.currentData ? props.currentData.meat : local.formMeat}
            style={styles.input}
            placeholderTextColor={colors.white}
            value={props.meat}
            onChangeText={props.onChangeMeat}
          />
        </View>

        <View style={styles.selectImgContainer}>
          {props.recipeImg ? (
            <Image source={{uri: props.recipeImg}} style={styles.recipeImg} />
          ) : (
            <View style={styles.recipeImgWrapper}>
              <ImageIcon
                width={wp(10)}
                height={wp(10)}
                color={colors.white}
              />
            </View>
          )}

          <TouchableOpacity activeOpacity={0.5} onPress={props.uploadImg}>
            <View style={styles.chooseBtn}>
              <Text style={styles.btnTxt}>{local.chooseImg}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.dateContainer}>
          <View style={styles.dateWrapper}>
            <Text style={styles.chooseTxt}>
              {day}/{month}/{year}
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={props.showDatePicker}>
            <View style={styles.dateBtn}>
              <Text style={styles.btnTxt}>{local.date}</Text>
              <Text style={styles.btnTxt}>(optional)</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* btn change according to action */}
        {props.btnAction === 'create' ? (
          <TouchableOpacity activeOpacity={0.5} onPress={props.createAction}>
            <View style={styles.btnWrapper}>
              <Text style={styles.btnText}>{local.create}</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity activeOpacity={0.5} onPress={props.updateAction}>
            <View style={styles.btnWrapper}>
              <Text style={styles.btnText}>{local.update}</Text>
            </View>
          </TouchableOpacity>
        )}

        <TouchableOpacity activeOpacity={0.5} onPress={props.goBack}>
          <View style={styles.cancelBtn}>
            <Text style={styles.cancelTxt}>{local.cancel}</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default form;
