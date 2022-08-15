import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  img: {
    width: wp(70),
    height: wp(70),
    resizeMode: 'cover',
  },
});
export default styles;
