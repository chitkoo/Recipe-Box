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
  //see all cuisines
  cuisineContainer: {
    backgroundColor: '#aaee',
    width: '100%',
    height: hp(10),
    marginTop: hp(3),
    borderRadius: wp(1.5),
    overflow: 'hidden',
    
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
