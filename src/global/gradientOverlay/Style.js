import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  gradient: {
    width: wp(100),
    height: hp(100),
    alignItems: 'center',
    opacity: 0.95,
  },
  gradientColor: ['rgba(0,0,0,0.1)', '#090909'],
});
export default styles;
