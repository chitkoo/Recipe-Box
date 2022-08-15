import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {launchImageLibrary} from 'react-native-image-picker';
import {useLocal} from '@hook/useLocal';

import * as actionRecipe from '@store/action/recipe';
import {useDispatch} from 'react-redux';

import {ToastAndroid} from 'react-native';
import styles from './Style';
import LinearGradient from 'react-native-linear-gradient';
import Form from '@components/createRecipe/form';

const CreateRecipe = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [meat, setMeat] = useState('');
  const [recipeImg, setRecipeImg] = useState('');

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const local = useLocal();

  const {action, currentData} = route.params;

  //create
  const createRecipeHandler = () => {
    if (name && cuisine && meat && recipeImg) {
      let recipeData = {
        name: name,
        cuisine: cuisine,
        meat: meat,
        date: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        image: recipeImg,
      };
      dispatch(actionRecipe.createRecipe(recipeData));
      ToastAndroid.show(local.formCreatSuccess, ToastAndroid.SHORT);
      navigation.goBack();
    } else {
      ToastAndroid.show(local.formEmpty, ToastAndroid.SHORT);
    }
  };

  //update
  const updateRecipeHander = () => {
    if (name && cuisine && meat && recipeImg) {
      let newData = {
        id: currentData.id,
        name: name,
        cuisine: cuisine,
        meat: meat,
        date: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        image: recipeImg,
      };
      dispatch(actionRecipe.updateRecipe(newData));
      ToastAndroid.show(local.formUpdateSuccess, ToastAndroid.SHORT);
      navigation.goBack();
    } else {
      ToastAndroid.show(local.formEmpty, ToastAndroid.SHORT);
    }
  };

  //img picker
  let options = {
    mediaType: 'photo',
  };
  const uploadImgHandler = async () => {
    const result = await launchImageLibrary(options);

    if (!result.didCancel) {
      setRecipeImg(result.assets[0].uri);
    }
  };

  //date picker
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showDatePickerHandler = () => {
    setShow(true);
  };

  //back
  const goBackHandler = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={['#F6D285', '#BBF0F3']}
      // version 1.0.0 colors={['#7EE8FA', '#EEC0C6']}
      useAngle={true}
      angle={360}
      style={styles.container}>
      <Form
        name={name}
        onChangeName={value => setName(value)}
        cuisine={cuisine}
        onChangeCuisine={value => setCuisine(value)}
        meat={meat}
        onChangeMeat={value => setMeat(value)}
        date={date}
        uploadImg={uploadImgHandler}
        recipeImg={recipeImg}
        goBack={goBackHandler}
        //action
        btnAction={action}
        //create
        createAction={createRecipeHandler}
        showDatePicker={showDatePickerHandler}
        //update
        updateAction={updateRecipeHander}
        currentData={currentData}
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </LinearGradient>
  );
};

export default CreateRecipe;
