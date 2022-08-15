import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '@global/colors';
import {font} from '@global/fontstyle';

const styles = StyleSheet.create({
  //header
  container: {
    marginTop: hp(6.8),
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  headerTxtWrapper: {
    flex: 1,
  },
  headerTitle: {
    fontSize: wp(5),
    color: colors.title,
    fontFamily: font.bold,
  },
  subHeaderTitle: {
    color: colors.secondary,
    fontFamily: font.medium,
  },

  //popular title
  titleContainer: {
    marginTop: hp(3),
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  //popular carousel
  card: {
    backgroundColor: colors.white,
    marginTop: hp(3),
    width: wp(80),
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
    marginHorizontal: hp(1),
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

  //loading
  loadingContainer: {
    width: '100%',
    height: wp(43),
    alignItems: 'center',
    justifyContent: 'center',
  },

  //cuisine
  cuisineContainer: {
    backgroundColor: '#aaee',
    width: wp(30),
    height: hp(10),
    marginTop: hp(3),
    borderRadius: wp(1.5),
    overflow: 'hidden',
    marginHorizontal: hp(1),
    marginBottom: hp(3),
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cuisineImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.95,
  },
  cuisineTxt: {
    color: colors.white,
    fontFamily: font.medium,
  },
});
export default styles;
