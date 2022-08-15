import React, {useContext, useState} from 'react';

import {View, Text, ToastAndroid} from 'react-native';
import {useLocal} from '@hook/useLocal';

import {appStorage} from '@utils/appStorage';

import {AuthContext} from '@context/context';

import RegisterContent from '@components/register/registerContent';

import styles from './Style';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [hideConfirmPass, setHideConfirmPass] = useState(true);

  const {changeAuth, changeUserInfo} = useContext(AuthContext);

  const local = useLocal();

  const inValidRegister =
    username === '' ||
    email === !email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/) ||
    password.length < 6 ||
    confirmPassword.length < 6 ||
    password != confirmPassword;

  const goLogin = () => {
    navigation.goBack('LoginScreen');
  };

  const registerHandler = () => {
    const token = '123';
    const userData = {
      username: username,
      email: email,
      password: password,
    };
    appStorage.setItem('@user.data', JSON.stringify(userData));
    appStorage.setItem('@user.token', token);
    changeAuth(true);
    changeUserInfo(userData);
    ToastAndroid.show(local.accCreated, ToastAndroid.SHORT);
  };

  const showPassHandler = () => {
    setHidePass(!hidePass);
  };
  const showConfirmPassHandler = () => {
    setHideConfirmPass(!hideConfirmPass);
  };

  return (
    <View style={styles.container}>
      <RegisterContent
        // email input
        email={email}
        onChangeEmail={value => setEmail(value)}
        //pass
        password={password}
        onChangePassword={value => setPassword(value)}
        //confirm pass
        confirmPassword={confirmPassword}
        onChangeConfirmPassword={value => setConfirmPassword(value)}
        //username
        username={username}
        onChangeUsername={value => setUsername(value)}
        //btn
        createAction={registerHandler}
        loginAction={goLogin}
        //invalid action
        inValidRegister={inValidRegister}
        //password show/hide toggle
        securePass={hidePass}
        showPass={showPassHandler}
        secureConfirmPass={hideConfirmPass}
        showConfirmPass={showConfirmPassHandler}
      />
    </View>
  );
};

export default Register;
