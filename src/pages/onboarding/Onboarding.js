import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {images} from '@assets/index';
import {AuthContext} from '@context/context';
import StatusBar from '@global/statusBar/statusBar';
import {font} from '@global/fontstyle/index';
import {colors} from '@global/colors/index';
import styles from './Style';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: wp(5)}} {...props}>
    <Text style={{fontSize: 16}}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: wp(5)}} {...props}>
    <Text style={{fontSize: 16}}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: wp(5)}} {...props}>
    <Text style={{fontSize: 16}}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  const {changeLaunch} = useContext(AuthContext);

  return (
    <>
      <StatusBar />
      <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => changeLaunch(false)}
        onDone={() => changeLaunch(false)}
        pages={[
          {
            backgroundColor: '#a6e4d0',
            image: (
              <Image source={images.onboardingSecond} style={styles.img} />
            ),
            title: 'Search Your Meal',
            subtitle: 'Explore various recipes',
            titleStyles: {
              fontFamily: font.bold,
              color: colors.dark,
            },
            subTitleStyles: {
              fontFamily: font.regular,
            },
          },
          {
            backgroundColor: '#fdeb93',
            image: <Image source={images.onboardingFirst} style={styles.img} />,
            title: 'Prepare Your Favorites',
            subtitle: 'Easily prepare your dishes',
            titleStyles: {
              fontFamily: font.bold,
              color: colors.dark,
            },
            subTitleStyles: {
              fontFamily: font.regular,
            },
          },
          {
            backgroundColor: '#e9bcbe',
            image: <Image source={images.onboardingLast} style={styles.img} />,
            title: 'Enjoy Your Meal',
            subtitle: 'Make Life Easy',
            titleStyles: {
              fontFamily: font.bold,
              color: colors.dark,
            },
            subTitleStyles: {
              fontFamily: font.regular,
            },
          },
        ]}
      />
    </>
  );
};

export default OnboardingScreen;
