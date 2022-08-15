import React, {useEffect, useState, useContext} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as actionRecipe from '@store/action/recipe';
import {useLocal} from '@hook/useLocal';

import {launchImageLibrary} from 'react-native-image-picker';
import {View, Text, ToastAndroid, Alert} from 'react-native';

import {appStorage} from '@utils/appStorage';

import {AuthContext} from '@context/context';

import styles from './Style';
import LinearGradient from 'react-native-linear-gradient';
//comp
import ProfileHeader from '@components/profile/profileHeader';
import RecipeHeader from '@components/profile/recipeHeader';
import EmptyRecipe from '@components/profile/emptyRecipe';
import UserRecipe from '@components/profile/userRecipe';
import AlertModal from '@components/profile/alertModal';

const Profile = ({navigation, route}) => {
  // const [userInfo, setUserInfo] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [profilePic, setProfilePic] = useState('');

  const {changeAuth, userInfo, changeLang, profileImg, changeProifleImg} =
    useContext(AuthContext);

  const ownRecipes = useSelector(state => state.recipeList.recipes);

  const dispatch = useDispatch();
  const local = useLocal();

  useEffect(() => {
    // getUserInfo();
    getUserImg();
  }, []);

  //profile header fns
  const getUserImg = () => {
    const data = appStorage.getItem('@user.profile');
    setProfilePic(data);
  };

  const passToggleHandler = () => {
    setShowPass(!showPass);
  };

  let options = {
    mediaType: 'photo',
  };
  const changeProfilePicHandler = async () => {
    const result = await launchImageLibrary(options);
    if (!result.didCancel) {
      setProfilePic(result.assets[0].uri);

      appStorage.setItem('@user.profile', result.assets[0].uri);
    }
  };

  const logoutHandler = () => {
    Alert.alert(
      local.wantToExit,
      ' ',
      [
        {
          text: local.cancel,
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: local.ok,
          onPress: () => {
            appStorage.removeItem('@user.token');
            changeAuth(false);
            ToastAndroid.show(local.exit, ToastAndroid.SHORT);
          },
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  //go to create, upate,  screens
  const goCreateRecipe = () => {
    navigation.push('CreateRecipeScreen', {action: 'create'});
  };

  const goUpdateRecipe = data => {
    navigation.push('CreateRecipeScreen', {
      action: 'update',
      currentData: data,
    });
  };

  //delete
  const deleteRecipe = id => {
    dispatch(actionRecipe.deleteRecipe(id));
    ToastAndroid.show(local.formDelete, ToastAndroid.SHORT);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const langHandler = value => {
    changeLang(value);
    appStorage.setItem('@lang', value);
    setShowModal(false);
  };

  return (
    <LinearGradient
      colors={['#F6D285', '#BBF0F3']}
      // version 1.0.0 colors={['#7EE8FA', '#EEC0C6']}
      useAngle={true}
      angle={360}
      style={styles.container}>
      <ProfileHeader
        logoutAction={logoutHandler}
        togglePass={passToggleHandler}
        showPass={showPass}
        data={userInfo}
        changeProfilePic={changeProfilePicHandler}
        profilePic={profilePic}
        showModal={openModal}
      />
      <RecipeHeader goCreateRecipe={goCreateRecipe} />
      {ownRecipes.length > 0 ? (
        <UserRecipe
          data={ownRecipes}
          upDateRecipeAction={goUpdateRecipe}
          deleteRecipeAction={deleteRecipe}
        />
      ) : (
        <EmptyRecipe />
      )}

      {showModal ? <AlertModal langAction={langHandler} /> : null}
    </LinearGradient>
  );
};

export default Profile;

