// import { COLORS, FONTFAMILY, SPACING } from '@/theme/theme';
import {Dispatch, SetStateAction} from 'react';
import {Image, StyleSheet, Text, View, TextInput, KeyboardTypeOptions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS, FONTFAMILY, SPACING } from '../../theme/theme';


type InputProps = {
  label: string;
  placeholder?: string;
  value: string;
  maxLength?: number;
  type?: KeyboardTypeOptions | undefined;
  onChangeText: Dispatch<SetStateAction<string>>;
  error?: string;
};

const InputComponent: React.FC<InputProps> = ({
  label,
  placeholder = '',
  value,
  onChangeText,
  type,
  maxLength=255,
  error
}) => {
  return (
    <View style={{marginBottom: hp(SPACING.space_2)}}>
      <Text style={styles.label}>{label}</Text>
     <View
  style={[
    styles.flexinput,
    {
      borderColor: error ? 'red' : '#d1d1d1',
    },
  ]}>

  <TextInput
    style={styles.inputstyle}
    placeholder={`${placeholder}`}
    placeholderTextColor="#888888"
    value={value}
    onChangeText={onChangeText}
    keyboardType={`${type ? type : 'default'}`}
    maxLength={maxLength}
  />

</View>

{
  error ? (
    <Text style={styles.errorText}>
      {error}
    </Text>
  ) : null
}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color:'#131b2e',
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
    marginBottom: 5,
  
  },
  flexinput: {
    borderColor: '#d1d1d1',
    borderWidth: 1,
    padding: 5,
    borderRadius: 3,
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputstyle: {
    padding: 0,
    margin: 0,
    flex: 2,
    height: hp(SPACING.space_4),
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
    color:'#131b2e'
  },
  icon: {
    width: wp(SPACING.space_4),
    height: wp(SPACING.space_4),
  },
  errorText: {
  color: 'red',
  marginTop: hp(0.5),
  fontSize: wp(3.2),
  fontFamily: FONTFAMILY.HankenGrotesk_medium,
},
});
export default InputComponent;
