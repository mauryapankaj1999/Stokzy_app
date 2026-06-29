import {View, Text, StyleSheet} from 'react-native';
import {  widthPercentageToDP as wp, heightPercentageToDP as hp,} from 'react-native-responsive-screen';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme';

export const globalStyles = StyleSheet.create({
  bgwhite:{
    backgroundColor: COLORS.WhiteHexcolor,
  

  },
  heading1: {
    fontFamily: FONTFAMILY.HankenGrotesk_regular,
    fontSize: wp(SPACING.space_8),
  },
  heading2: {
    fontSize: wp(FONTSIZE.size_6 - 1),
    color: COLORS.primaryDarkGreyHex,
    marginVertical: hp(SPACING.space_2),
  },
  heading3: {},
  heading4: {
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
    fontSize: wp(FONTSIZE.size_4),
  },
  heading5: {},
  paragraph: {},
  bold: {},
  normal: {},
  container:{
    paddingHorizontal: hp(SPACING.space_2),
  }
,
  inputstyle: {
    color: COLORS.primaryDarkGreyHex,
    borderWidth: 1,
    borderColor: COLORS.primaryDarkGreyHex,
    padding: hp(SPACING.space_2),
    marginVertical: hp(SPACING.space_2),
  },
});
