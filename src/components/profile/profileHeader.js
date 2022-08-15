import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  ToastAndroid,
} from 'react-native';
import {useLocal} from '@hook/useLocal';
import {AuthContext} from '@context/context';
import {appStorage} from '../../utils/appStorage';

import styles from './style';
import Animated, {FadeIn} from 'react-native-reanimated';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '@global/colors';
import {images} from '@assets';
import Eye from '@assets/icons/Eye';
import ImageIcon from '@assets/icons/Image';
import Exit from '@assets/icons/Exit';
import En from '@assets/icons/En';
import Mm from '@assets/icons/Mm';
import Telegram from '@assets/icons/Telegram';
import Linkedin from '@assets/icons/Linkedin';
import Phone from '@assets/icons/Phone';

const profileHeader = props => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getuser();
  }, []);

  const getuser = () => {
    const data = appStorage.getItem('@user.data');
    if (data) {
      setUserData(JSON.parse(data));
    }
  };

  const local = useLocal();
  const {lang} = useContext(AuthContext);
  const img = props.profilePic;

  const phone = '09751510604';

  const openTelegram = () => {
    Linking.openURL(`https://t.me/chitkodev`);
  };

  const openLinkedin = () => {
    Linking.openURL(`https://www.linkedin.com/in/chit-ko-92a8921ab/`);
  };

  const openCall = () => {
    Linking.openURL(`tel:${phone}`);
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <Animated.View style={styles.imgWrapper} entering={FadeIn.delay(300)}>
          <Image
            source={img ? {uri: img} : images.profile}
            style={styles.profileImg}
          />
          <TouchableOpacity
            style={styles.imgPicker}
            onPress={props.changeProfilePic}>
            <ImageIcon width={wp(5)} height={wp(5)} color={colors.white} />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={styles.infoWrapper} entering={FadeIn.delay(400)}>
          <View>
            <Text style={styles.txt}>
              {local.username} : {userData?.username}
            </Text>
            <Text style={styles.txt}>{userData?.email}</Text>
            <View style={styles.passwordWrapper}>
              <Text style={styles.password}>
                {props.showPass ? userData.password : '******'}
              </Text>
              <TouchableOpacity onPress={props.togglePass}>
                <Eye width={wp(6)} height={wp(6)} color={colors.title} />
              </TouchableOpacity>
            </View>

            {/* language  */}
            <View style={styles.langWrapper}>
              <Text style={styles.password}>{local.lang}</Text>
              {lang === 'mm' ? (
                <TouchableOpacity onPress={props.showModal} activeOpacity={0.5}>
                  <Mm width={wp(6)} height={wp(6)} color={colors.secondary} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={props.showModal} activeOpacity={0.5}>
                  <En width={wp(6)} height={wp(6)} color={colors.secondary} />
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.versionContainer}>
              {/* <Text style={styles.developerTxt}>Version - 1.0.0</Text> */}

              <Text style={styles.developerTxt}>Version - 1.0.1</Text>
              <Text style={styles.developerTxt}>
                (Background gradient changed)
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={props.logoutAction}
            activeOpacity={0.5}
            style={styles.logoutBtn}>
            <Exit width={wp(6)} height={wp(6)} color={colors.danger} />
          </TouchableOpacity>
        </Animated.View>
      </View>

      <Animated.View
        style={styles.developerContactWrapper}
        entering={FadeIn.delay(500)}>
        <Text style={styles.developerTxt}>( Contact Developer - </Text>

        <TouchableOpacity
          onPress={openTelegram}
          activeOpacity={0.5}
          style={styles.contactBtn}>
          <Telegram width={wp(6)} height={wp(6)} color={colors.secondary} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={openLinkedin}
          activeOpacity={0.5}
          style={styles.contactBtn}>
          <Linkedin width={wp(6)} height={wp(6)} color={colors.secondary} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={openCall}
          activeOpacity={0.5}
          style={styles.contactBtn}>
          <Phone width={wp(6)} height={wp(6)} color={colors.secondary} />
        </TouchableOpacity>

        <Text style={styles.developerTxt}> )</Text>
      </Animated.View>
    </>
  );
};

export default profileHeader;
