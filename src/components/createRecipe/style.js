import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '@global/colors';
import {font} from '@global/fontstyle';

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: hp(6.8),
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: hp(5),
  },
  backBtn: {
    position: 'absolute',
    left: 0,
  },
  headerTitle: {
    fontSize: wp(5),
    color: colors.title,
    fontFamily: font.bold,
  },
  formContainer: {
    width: wp(80),
    marginTop: hp(1),
    alignSelf: 'center',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: wp(2),
    marginTop: hp(3),
  },
  input: {
    marginLeft: wp(5),
    fontSize: wp(4.5),
    color: colors.white,
    fontFamily: font.medium,
  },
  selectImgContainer: {
    width: '100%',
    height: wp(35),
    marginTop: hp(3),
    flexDirection: 'row',
  },
  recipeImgWrapper: {
    width: wp(40),
    height: wp(30),
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(3),
    overflow: 'hidden',
    marginRight: wp(3),
  },
  chooseBtn: {
    backgroundColor: colors.secondary,
    borderRadius: wp(2),
    marginTop: hp(3),
    width: wp(35),
    alignItems: 'center',
    paddingVertical: wp(3),
  },
  recipeImg: {
    width: wp(40),
    height: wp(30),
    resizeMode: 'cover',
    borderRadius: wp(3),
    marginRight: wp(5),
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: wp(10),
  },
  dateWrapper: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1),
    flex: 1,
    marginRight: wp(3),
  },
  dateBtn: {
    backgroundColor: colors.secondary,
    width: wp(30),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(2),
  },
  btnTxt: {
    fontFamily: font.medium,
    color: colors.white,
  },
  btnWrapper: {
    alignItems: 'center',
    padding: wp(3),
    backgroundColor: colors.secondary,
    borderRadius: wp(2),
    marginTop: hp(3),
    width: '100%',
  },
  btnText: {
    fontSize: wp(4.5),
    color: colors.white,
    fontFamily: font.medium,
  },
  cancelBtn: {
    alignItems: 'center',
    padding: wp(3),
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: wp(2),
    marginTop: hp(3),
    width: '100%',
    height: hp(6),
  },
  cancelTxt: {
    fontSize: wp(4.5),
    color: colors.secondary,
    fontFamily: font.medium,
  },
  chooseTxt: {
    color: colors.white,
  },
});
export default styles;
