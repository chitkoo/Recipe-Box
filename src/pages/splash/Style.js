import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {font} from '@global/fontstyle';
import {colors} from '@global/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBg: {
    flex: 1,
    width: wp(100),
    height: hp(100),
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  titleContainer: {
    marginTop: hp(50),
  },
  title: {
    color: colors.white,
    fontSize: wp(10),
    fontFamily: 'Kalam-Bold',
  },
  subTitle: {
    color: colors.white,
    fontFamily: font.medium,
  },
});
export default styles;
