import Feather from 'react-native-vector-icons/Feather';

import React, { useState } from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { COLORS, FONTFAMILY, SPACING } from '../../theme/theme';

import InputComponent from '../../components/FormElement/InputComponent';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const navigation: any = useNavigation();

  return (
    <LinearGradient
      colors={['#ffffff', '#F5FFD9']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      {/* Header */}
      <View style={styles.headercontainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Feather name="arrow-left" size={22} color="#131b2e" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Create Account</Text>

        <View style={{ flex: 1 }} />
      </View>

      {/* Body */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Email Input */}
        <InputComponent
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          type="default"
        />
        <InputComponent
          label="Email"
          placeholder="Enter your email Id"
          value={email}
          onChangeText={setEmail}
          type="default"
        />
        <InputComponent
          label="Phone Number"
          placeholder="Enter your phone number"
          value={email}
          onChangeText={setEmail}
          type="default"
        />
        <InputComponent
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          type="default"
        />
        <InputComponent
          label="Confirm Password"
          placeholder="Enter your confirm password"
          value={password}
          onChangeText={setPassword}
          type="default"
        />

        <TouchableOpacity
          style={styles.termsContainer}
          onPress={() => setIsChecked(!isChecked)}
        >
          <View style={[styles.checkbox, isChecked && styles.checkedBox]}>
            {isChecked && <Feather name="check" size={14} color="#fff" />}
          </View>

          <Text style={styles.termsText}>
            I agree to the{' '}
            <Text style={styles.highlightText}>Terms of Service</Text> and{' '}
            <Text style={styles.highlightText}>Privacy Policy</Text>
          </Text>
        </TouchableOpacity>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntextcolor}>Sign Up</Text>

          <Feather
            name="arrow-right"
            size={22}
            color={COLORS.btncolor}
            style={{ marginLeft: wp(1) }}
          />
        </TouchableOpacity>

        {/* Bottom Text */}
        <View style={styles.bottomContainer}>
          <Text style={styles.textlogin}>Already have an account?</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: hp(3),
  },

  checkbox: {
    width: wp(5),
    height: wp(5),

    borderWidth: 1,
    borderColor: '#D1D5DB',

    borderRadius: 4,

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: wp(3),

    backgroundColor: '#fff',
  },

  checkedBox: {
    backgroundColor: '#B6FF1A',
    borderColor: '#B6FF1A',
  },

  termsText: {
    flex: 1,

    color: '#6B7280',

    fontSize: wp(3.5),

    fontFamily: FONTFAMILY.HankenGrotesk_medium,
  },

  highlightText: {
    color: '#426900',

    fontFamily: FONTFAMILY.HankenGrotesk_bold,
  },
  gradient: {
    flex: 1,
  },

  headercontainer: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: wp(5),
    paddingVertical: hp(2),

    backgroundColor: '#fff',

    borderBottomColor: '#E5E7EB',
    borderBottomWidth: 1,
  },

  backButton: {
    flex: 1,
  },

  headerTitle: {
    flex: 6,

    textAlign: 'center',

    fontFamily: FONTFAMILY.HankenGrotesk_medium,

    color: '#131b2e',

    fontSize: hp(2.5),
  },

  scrollContainer: {
    paddingHorizontal: wp(5),
    paddingTop: hp(4),
    paddingBottom: hp(1),
  },

  headingContainer: {
    marginBottom: hp(4),
  },

  heading: {
    fontSize: hp(3.5),

    color: '#131b2e',

    fontFamily: FONTFAMILY.HankenGrotesk_bold,
  },

  subHeading: {
    marginTop: hp(1),

    fontSize: hp(2),

    color: '#6B7280',

    fontFamily: FONTFAMILY.HankenGrotesk_regular,
  },

  passwordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(1),
  },

  textlabel: {
    color: '#131b2e',
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
  },

  textforget: {
    color: '#426900',
    fontSize: wp(3.7),
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
  },

  inputstyle: {
    borderColor: '#d1d1d1',
    borderWidth: 1,

    borderRadius: 5,

    paddingHorizontal: wp(3),

    height: hp(6),

    fontFamily: FONTFAMILY.HankenGrotesk_medium,

    color: '#131b2e',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: hp(4),

    backgroundColor: COLORS.ligngreenbtncolor,

    borderRadius: wp(2),

    flexDirection: 'row',

    paddingVertical: hp(2),
  },

  btntextcolor: {
    color: COLORS.btncolor,
    fontSize: wp(4),
    fontFamily: FONTFAMILY.HankenGrotesk_bold,
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: hp(4),
  },

  textlogin: {
    color: '#6B7280',
    fontSize: wp(4),
    fontFamily: FONTFAMILY.HankenGrotesk_regular,
  },

  loginText: {
    color: '#426900',
    marginLeft: wp(1.5),
    fontSize: wp(4),
    fontFamily: FONTFAMILY.HankenGrotesk_bold,
  },
});
