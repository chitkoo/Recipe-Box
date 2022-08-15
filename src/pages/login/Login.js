import React, {useContext, useState, useEffect} from 'react';

import {View, Text, ToastAndroid} from 'react-native';
import {useLocal} from '@hook/useLocal';

import {appStorage} from '@utils/appStorage';

import {AuthContext} from '@context/context';

import LoginContent from '@components/login/loginContent';

import styles from './Style';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [storeData, setStoreData] = useState(null);

  const {changeAuth, changeUserInfo} = useContext(AuthContext);
  const local = useLocal();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const accInfo = appStorage.getItem('@user.data');
    setStoreData(accInfo);
  };

  const loginHandler = () => {
    const token = '123';

    //no data in local storage at first install or reinstall
    if (storeData === undefined) {
      ToastAndroid.show(local.accNotfound, ToastAndroid.SHORT);
    } else {
      //after register, data is stored in local storage,
      //check with input values
      if (email && password) {
        const formatData = JSON.parse(storeData);

        if (email === formatData.email && password === formatData.password) {
          changeAuth(true);
          appStorage.setItem('@user.token', token);
          ToastAndroid.show(local.loginSuccess, ToastAndroid.SHORT);
        } else {
          ToastAndroid.show(local.incorrect, ToastAndroid.SHORT);
        }
      } else {
        ToastAndroid.show(local.empty, ToastAndroid.SHORT);
      }
    }
  };

  const goRegister = () => {
    navigation.push('RegisterScreen');
  };
  return (
    <View style={styles.container}>
      <LoginContent
        regAction={goRegister}
        loginAction={loginHandler}
        email={email}
        onChangeEmail={value => setEmail(value)}
        password={password}
        onChangePassword={value => setPassword(value)}
      />
    </View>
  );
};

export default Login;
