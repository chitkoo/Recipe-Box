import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useLocal} from '@hook/useLocal';


//style & icons
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
import Lock from '@assets/icons/Lock';

const loginContent = props => {
  const local = useLocal();

  return (
    <View style={styles.container}>
      <StatusBar />
      <ImageBackground source={images.loginBg} style={styles.imageBg}>
        <GradientOverlay>
          {/* Title */}
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Recipe Box</Text>
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
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

            {/* Password */}
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Lock width={wp(6)} height={wp(6)} color={colors.white} />
                <TextInput
                  secureTextEntry={true}
                  placeholder={local.passPlaceholder}
                  placeholderTextColor={colors.white}
                  style={styles.input}
                  autoCapitalize={false}
                  value={props.password}
                  onChangeText={props.onChangePassword}
                />
              </View>
            </View>

            {/* Button */}
            <TouchableOpacity
              style={styles.btnWrapper}
              activeOpacity={0.5}
              onPress={props.loginAction}>
              <Text style={styles.btnText}>{local.signin}</Text>
            </TouchableOpacity>

            {/* Create Account */}

            <View style={styles.createBtnContainer}>
              <Text style={styles.footerTxt}>{local.dontHaveAcc}</Text>
              <TouchableOpacity
                style={styles.createBtn}
                activeOpacity={0.5}
                onPress={props.regAction}>
                <Text style={styles.createBtnTxt}>{local.createHere}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </GradientOverlay>
      </ImageBackground>
    </View>
  );
};

export default loginContent;
