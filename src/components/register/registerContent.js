import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import {useLocal} from '@hook/useLocal';

//style
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {images} from '@assets';
import {colors} from '@global/colors';
import StatusBar from '@global/statusBar/statusBar';
import GradientOverlay from '@global/gradientOverlay/GradientOverlay';
import Email from '@assets/icons/Email';
import Profile from '@assets/icons/Profile';
import Lock from '@assets/icons/Lock';
import Eye from '@assets/icons/Eye';

const registerContent = props => {
  const local = useLocal();

  return (
    <View style={styles.container}>
      <StatusBar />
      <ImageBackground source={images.regBg} style={styles.imageBg}>
        <GradientOverlay>
          {/* Title */}
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Create An Account</Text>
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            {/* Username */}
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Profile width={wp(6)} height={wp(6)} color={colors.white} />
                <TextInput
                  placeholder={local.userNamePlaceHolder}
                  placeholderTextColor={colors.white}
                  style={styles.input}
                  autoCapitalize={false}
                  value={props.username}
                  onChangeText={props.onChangeUsername}
                />
              </View>
            </View>
            {/* error text */}
            <View style={{opacity: props.username.length > 1 ? 0 : 1}}>
              <Text style={{color: colors.primary}}>* username require</Text>
            </View>

            {/* Email */}
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Email width={wp(6)} height={wp(6)} color={colors.white} />
                <TextInput
                  placeholder={local.emailPlaceholder}
                  placeholderTextColor={colors.white}
                  style={styles.input}
                  autoCapitalize={false}
                  value={props.email}
                  onChangeText={props.onChangeEmail}
                />
              </View>
            </View>
            {/* error text */}
            <View
              style={{
                opacity: props.email.match(
                  /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
                )
                  ? 0
                  : 1,
              }}>
              <Text style={{color: colors.primary}}>* email require</Text>
            </View>

            {/* Password */}
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Lock width={wp(6)} height={wp(6)} color={colors.white} />
                <TextInput
                  secureTextEntry={props.securePass}
                  placeholder={local.passPlaceholder}
                  placeholderTextColor={colors.white}
                  style={styles.input}
                  autoCapitalize={false}
                  value={props.password}
                  onChangeText={props.onChangePassword}
                />
              </View>

              {/* show password toggle */}
              <TouchableOpacity
                onPress={props.showPass}
                style={styles.eye}
                activeOpacity={0.5}>
                <Eye width={wp(7)} height={wp(7)} color={colors.white} />
              </TouchableOpacity>
            </View>
            {/* error text */}
            <View style={{opacity: props.password.length < 6 ? 1 : 0}}>
              <Text style={{color: colors.primary}}>
                *At least 6 characters
              </Text>
            </View>

            {/* Confirm Password */}
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Lock width={wp(6)} height={wp(6)} color={colors.white} />
                <TextInput
                  secureTextEntry={props.secureConfirmPass}
                  placeholder={local.passConfirmPlaceholder}
                  placeholderTextColor={colors.white}
                  style={styles.input}
                  autoCapitalize={false}
                  value={props.confirmPassword}
                  onChangeText={props.onChangeConfirmPassword}
                />
              </View>
              <TouchableOpacity
                onPress={props.showConfirmPass}
                style={styles.eye}
                activeOpacity={0.5}>
                <Eye width={wp(7)} height={wp(7)} color={colors.white} />
              </TouchableOpacity>
            </View>
            {/* error text */}
            <View
              style={{
                opacity:
                  props.confirmPassword.length < 6 ||
                  props.confirmPassword != props.password
                    ? 1
                    : 0,
              }}>
              <Text style={{color: colors.primary}}>
                * password does not match
              </Text>
            </View>

            {/*Reg Button */}
            <TouchableOpacity
              disabled={props.inValidRegister ? true : false}
              style={
                props.inValidRegister
                  ? [styles.btnWrapper, {opacity: 0.3}]
                  : styles.btnWrapper
              }
              activeOpacity={0.5}
              onPress={props.createAction}>
              <Text style={styles.btnText}>{local.createAcc}</Text>
            </TouchableOpacity>

            {/* Login */}
            <View style={styles.loginBtnContainer}>
              <Text style={styles.footerTxt}>{local.haveAccount}</Text>
              <TouchableOpacity
                style={styles.loginBtn}
                activeOpacity={0.5}
                onPress={props.loginAction}>
                <Text style={styles.loginBtnTxt}>{local.loginHere}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </GradientOverlay>
      </ImageBackground>
    </View>
  );
};

export default registerContent;
