import Feather from 'react-native-vector-icons/Feather';
import React, {useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {loginApi} from '../../api/authApi';
import {saveToken} from '../../storage/authStorage';
import {ActivityIndicator} from 'react-native';
import {COLORS, FONTFAMILY, SPACING} from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import InputComponent from '../../components/FormElement/InputComponent';
import notifee, {AndroidImportance} from '@notifee/react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Login({setIsAuthenticated}: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation: any = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    setEmailError('');
    setPasswordError('');

    let isValid = true;

    // Email Validation
    if (email.trim() === '') {
      setEmailError('Enter your email');
      isValid = false;
    }

    // Password Validation
    if (password.trim() === '') {
      setPasswordError('Enter your password');
      isValid = false;
    }

    if (!isValid) {
      setLoading(false);

      return;
    }

    console.log('EMAIL => ', email);
    console.log('PASSWORD => ', password);

    try {
      const response: any = await loginApi({
        email,
        password,
      });

      console.log('LOGIN RESPONSE => ', response);

      console.log('TOKEN => ', response.token);

      await saveToken(response.token);

      console.log('TOKEN SAVED');
await showNotification();
      setLoading(false);

      setIsAuthenticated(true);
    } catch (error: any) {
      setLoading(false);

      console.log('LOGIN ERROR => ', error);

      setPasswordError('Invalid Email or Password');
    }
  };

  const showNotification = async () => {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    importance: AndroidImportance.HIGH,
  });

  await notifee.displayNotification({
    title: 'Welcome Back Stokzy🎉',
    body: 'Login Successful  ',
    android: {
      channelId,
      pressAction: {
        id: 'default',
      },
    },
  });
};
  return (
    <LinearGradient
      colors={['#ffffff', '#F5FFD9']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.gradient}>
      <View style={styles.container}>
        {/* LOGO */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: hp(3),
          }}>
          <Image
            source={require('../../assets/img/stokzy_logo.png')}
            style={{
              width: wp(40),
              height: wp(14),
              resizeMode: 'contain',
            }}
          />
        </View>

        <Text
          style={{
            fontSize: wp(SPACING.space_8),
            fontFamily: FONTFAMILY.HankenGrotesk_bold,
            color: '#131b2e',
            alignSelf: 'center',
            marginBottom: hp(2),
          }}>
          Welcome Back
        </Text>

        <View
          style={{
            alignItems: 'center',
            marginBottom: hp(2),
          }}>
          <Text style={styles.textlogin}>
            Enter your credentials to access your
          </Text>

          <Text style={styles.textlogin}>Stokzy account</Text>
        </View>

        <InputComponent
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={text => {
            setEmail(text);

            if (emailError) {
              setEmailError('');
            }
          }}
          type="email-address"
          error={emailError}
        />
        <View style={{height: hp(2)}} />
        <View style={{width: '100%'}}>
          <View style={styles.passwordHeader}>
            <Text style={styles.textlabel}>Password</Text>
            <TouchableOpacity>
              <Text style={styles.textforget}>Forget Password</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: hp(SPACING.space_2)}}>
            <View
              style={[
                styles.inputstyle,
                passwordError && styles.errorInput,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                },
              ]}>
              <TextInput
                placeholder="Enter your password"
                value={password}
                onChangeText={text => {
                  setPassword(text);

                  if (passwordError) {
                    setPasswordError('');
                  }
                }}
                style={styles.passwordbox}
                secureTextEntry={!showPassword}
                placeholderTextColor="#888"
              />

              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={22}
                  color="#666"
                />
              </TouchableOpacity>
            </View>
          </View>
          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <>
              <Text style={styles.btntextcolor}>Sign In</Text>

              <Feather
                name="arrow-right"
                size={22}
                color={'#fff'}
                style={{marginLeft: wp(1)}}
              />
            </>
          )}
        </TouchableOpacity>
      </View>

      {/* FOOTER */}
      <View
        style={[
          styles.flexRow,
          {
            justifyContent: 'center',
            marginTop: hp(2),
          },
        ]}>
        <Text style={styles.donthaveacc}>{"Don't have an account? "}</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          //  onPress={handleLogin}
        >
          <Text style={styles.textforget}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: wp(5),
  },

  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(2),
  },

  passwordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(3),
    backgroundColor: COLORS.btncolor,
    borderRadius: wp(2),
    flexDirection: 'row',
    paddingVertical: hp(1.8),
  },

  btntextcolor: {
    color: '#fff',
    fontSize: wp(4),
    fontWeight: '600',
  },

  textlogin: {
    color: '#6B7280',
    fontSize: wp(3.5),
  },
  errorInput: {
    borderColor: 'red',
  },
  inputstyle: {
    marginTop: hp(1),
    borderColor: '#d1d1d1',
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: wp(2),
    // paddingVertical: hp(1),
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
    color: '#131b2e',
    // backgroundColor:'red',
    margin: 0,
    padding: 0,
    height: hp(SPACING.space_6),
  },

  textlabel: {
    color: '#131b2e',
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
  },

  textforget: {
    color: COLORS.btncolor,
    fontSize: wp(4.2),
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
  },
  errorText: {
    color: 'red',
    fontSize: wp(3.2),
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
  },
  passwordContainer: {
    marginTop: hp(1),
    borderColor: '#d1d1d1',
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
  },

  passwordInput: {
    flex: 1,
    paddingVertical: hp(1.5),
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
    color: '#131b2e',
  },
  passwordbox: {
    flex: 1,
    color: '#000',
    paddingLeft: 0,
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
  },
  donthaveacc: {
    color: '#000',
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
  },
});
