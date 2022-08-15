import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
  titleWrapper: {
    marginTop: hp(15),
  },
  title: {
    color: colors.white,
    fontSize: wp(10),
    fontFamily: 'Kalam-Bold',
  },
  formContainer: {
    width: wp(80),
    marginTop: hp(20),
  },
  inputContainer: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: wp(2),
    marginTop: hp(3),
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  input: {
    marginLeft: wp(2),
    fontSize: wp(4.5),
    flex: 1,
    color: colors.white,
  },

  btnWrapper: {
    alignItems: 'center',
    padding: wp(3),
    backgroundColor: '#F2873A',
    borderRadius: wp(2),
    marginTop: hp(10),
    width: '100%',
  },
  btnText: {
    fontSize: wp(4.5),
    color: colors.white,
  },
  createBtnContainer: {
    flexDirection: 'row',
    marginTop: hp(5),
  },
  createBtn: {
    marginLeft: wp(1),
  },
  createBtnTxt: {
    color: colors.primary,
    fontSize: wp(4.5),
  },
  footerTxt: {
    color: colors.white,
    fontSize: wp(4.5),
  },
});
export default styles;
