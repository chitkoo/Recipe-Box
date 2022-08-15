import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '@global/colors';
import {font} from '@global/fontstyle';

const styles = StyleSheet.create({
  //header
  headerContainer: {
    marginTop: hp(6.8),
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: hp(10),
  },
  backBtn: {
    position: 'absolute',
    left: 0,
  },
  headerTitle: {
    fontSize: wp(5),
    color: colors.title,
    fontFamily: font.bold,
    marginLeft: wp(8),
  },
  //loading
  loadingContainer: {
    width: '100%',
    height: hp(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(2),
  },
  //recipeDetail
  recipeDetailContainer: {
    backgroundColor: colors.white,
    width: wp(85),
    marginVertical: hp(5),
    alignSelf: 'center',
    borderRadius: wp(2),
    elevation: 3,
    padding: wp(1),
  },
  recipeImg: {
    width: '100%',
    height: hp(30),
    resizeMode: 'cover',
    borderRadius: wp(2),
  },
  descriptionContainer: {
    paddingHorizontal: wp(1),
    marginVertical: hp(1),
  },
  text: {
    color: colors.secondary,
    fontFamily: font.medium,
  },
  detailTxt: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1),
    width: '80%',
  },
  descript: {
    color: colors.title,
    fontFamily: font.medium,
  },
  youtubeBtn: {
    marginTop: hp(3),
    flexDirection: 'row',
  },
  youtubeBtnTxt: {
    color: colors.secondary,
    fontFamily: font.medium,
    marginRight: wp(2),
    textDecorationLine: 'underline',
  },
});
export default styles;
