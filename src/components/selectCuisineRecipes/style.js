import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '@global/colors';
import {font} from '@global/fontstyle';

const styles = StyleSheet.create({
  //title
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
  //loading
  loadingContainer: {
    width: '100%',
    height: wp(43),
    alignItems: 'center',
    justifyContent: 'center',
  },
  //list
  card: {
    backgroundColor: colors.white,
    marginTop: hp(3),
    width: wp(85),
    borderRadius: wp(2),
    overflow: 'hidden',
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    //flashlist
    alignSelf: 'center',
    marginBottom: hp(2),
  },
  imgWrapper: {},
  img: {
    width: '100%',
    height: wp(45),
    resizeMode: 'cover',
  },
  descrWrapper: {
    paddingVertical: hp(1.8),
    paddingHorizontal: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  recipeTitle: {
    color: colors.title,
    fontFamily: font.bold,
    fontSize: wp(4),
  },
  recipeDesc: {
    color: colors.secondary,
    fontFamily: font.medium,
  },
});
export default styles;
