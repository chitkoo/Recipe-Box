import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '@global/colors/index';

const styles = StyleSheet.create({
  customeTab: {
    marginHorizontal: wp(2.5),
    backgroundColor: '#D8EFF8',
    shadowColor: '#000',
    shadowOffset: {
      width: hp(1),
      height: hp(1),
    },
    shadowOpacity: 0.025,
    shadowRadius: hp(1),
    elevation: 3,
    marginBottom: hp(1),
    borderRadius: wp(3),
  },
});
export default styles;
