import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '@global/colors';
import {font} from '@global/fontstyle';

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: hp(7),
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  imgWrapper: {
    width: wp(25),
    height: wp(25),
    position: 'relative',
    borderRadius: wp(2),
    borderWidth: 1,
    borderColor: colors.primary,
  },
  imgPicker: {
    position: 'absolute',
    bottom: -5,
    right: wp(1),
    backgroundColor: colors.primary,
    width: wp(5),
    height: wp(5),
    borderRadius: wp(1),
  },
  profileImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: wp(1),
  },
  infoWrapper: {
    marginLeft: wp(5),
    flex: 1,
    position: 'relative',
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  password: {
    marginRight: wp(5),
    color: colors.title,
    fontFamily: font.medium,
  },
  langWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1),
  },
  recipeWrapper: {
    flexDirection: 'row',
    marginTop: wp(4),
  },
  recipe: {
    alignItems: 'center',
  },
  save: {
    alignItems: 'center',
    marginLeft: wp(10),
  },
  txt: {
    color: colors.title,
    fontFamily: font.medium,
    marginBottom: wp(1),
  },

  recipeHeaderWrapper: {
    borderTopWidth: 0.6,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp(4),
    paddingVertical: hp(0.8),
    borderColor: colors.primary,
    position: 'relative',
    width: '100%',
    height: hp(5),
  },
  recipeTitle: {
    color: colors.title,
    fontFamily: font.medium,
  },
  createBtn: {
    position: 'absolute',
    right: wp(4),
    top: wp(1.2),
  },

  emptyImgContainer: {
    width: wp(80),
    height: hp(35),
    alignSelf: 'center',
    borderRadius: wp(2),
    overflow: 'hidden',
    alignItems: 'center',
  },
  emptyImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  createItemWrapper: {
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

    alignSelf: 'center',
    marginBottom: hp(2),
  },
  createImg: {
    width: '100%',
    height: wp(45),
    resizeMode: 'cover',
  },
  descTxtWrapper: {
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    position: 'relative',
  },
  itemImgWrapper: {
    position: 'relative',
  },
  editBtn: {
    position: 'absolute',
    right: wp(3),
    bottom: hp(2),
  },
  deleteBtn: {
    position: 'absolute',
    right: wp(2),
    top: hp(2),
  },
  logoutBtn: {
    position: 'absolute',
    right: 0,
    top: 0,
  },

  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(127,127, 127, 0.6)',
    width: wp(100),
    height: hp(100),
    position: 'absolute',
  },
  modalWrapper: {
    width: wp(50),
    height: hp(18),
    backgroundColor: colors.white,
    borderRadius: hp(3),
    alignItems: 'center',
    padding: wp(3),
  },
  selectLangWrapper: {
    flexDirection: 'row',
    marginTop: hp(2),
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: wp(30),
    height: hp(3.5),
  },
  langTxt: {
    marginLeft: wp(3),
    color: colors.secondary,
    fontFamily: font.medium,
  },
  langTitle: {
    color: colors.secondary,
    fontFamily: font.medium,
  },
  developerContactWrapper: {
    flexDirection: 'row',
    marginTop: hp(3),
    alignItems: 'center',
  },
  developerTxt: {
    color: colors.title,
    fontFamily: font.medium,
  },
  contactBtn: {
    marginHorizontal: wp(2),
  },
  versionContainer: {
    marginTop: hp(1),
  },
});
export default styles;
