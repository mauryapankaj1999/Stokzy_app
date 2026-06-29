// import React, { useEffect } from 'react';
// import {
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import SplashScreen from 'react-native-splash-screen';

// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

// import {globalStyles} from '../../theme/StyleComponents/GlobalStyle';
// import {COLORS} from '../../theme/theme';

// import Feather from '@react-native-vector-icons/Feather';
// import LinearGradient from 'react-native-linear-gradient';

// export default function Splash() {
//   const navigation = useNavigation();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       SplashScreen.hide();
//       navigation.navigate('Login');
//     }, 2500);

//     return () => clearTimeout(timer);
//   }, [navigation]);

//   const handleGetStarted = () => {
//     SplashScreen.hide();
//     navigation.navigate('Login');
//   };

//   return (
//     <LinearGradient
//       colors={['#ffffff', '#F5FFD9']}
//       start={{x: 0, y: 0}}
//       end={{x: 1, y: 1}}
//       style={styles.gradient}>

//       <View style={{flex: 1}}>

//         <View style={globalStyles.container}>

//           <View style={{height: hp(20)}} />

//           <View
//             style={{
//               height: hp(60),
//               justifyContent: 'space-between',
//               paddingVertical: hp(5),
//             }}>

//             {/* Logo */}
//             <View
//               style={{
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>

//               <Image
//                 source={require('../../assets/img/stokzy_logo.png')}
//                 style={{
//                   width: wp(50),
//                   height: wp(14),
//                   resizeMode: 'contain',
//                 }}
//               />
//             </View>

//             {/* Feature List */}
//             <View style={styles.featureContainer}>

//               <View style={styles.featureRow}>
//                 <Feather
//                   name="trending-up"
//                   size={18}
//                   color="#7CB518"
//                 />

//                 <Text style={styles.featureText}>
//                   Trade with structure
//                 </Text>
//               </View>

//               <View style={styles.featureRow}>
//                 <Feather
//                   name="cpu"
//                   size={18}
//                   color="#7CB518"
//                 />

//                 <Text style={styles.featureText}>
//                   Automate with discipline
//                 </Text>
//               </View>

//               <View style={styles.featureRow}>
//                 <Feather
//                   name="activity"
//                   size={18}
//                   color="#7CB518"
//                 />

//                 <Text style={styles.featureText}>
//                   Scale with confidence
//                 </Text>
//               </View>

//             </View>

//             {/* Button */}
//             <TouchableOpacity style={styles.button} onPress={handleGetStarted}>

//               <Text style={styles.btntextcolor}>
//                 Get Started
//               </Text>

//               <Feather
//                 name="arrow-right"
//                 size={22}
//                 color={COLORS.btncolor}
//                 style={{marginLeft: wp(1)}}
//               />
//             </TouchableOpacity>

//           </View>

//           <View style={{height: hp(20)}} />

//         </View>

//       </View>

//      </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({

//   gradient: {
//     flex: 1,
//   },

//   btntextcolor: {
//     color: COLORS.btncolor,
//     fontSize: wp(4),
//     fontWeight: '600',
//   },

//   featureRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: hp(1.2),
//   },

//   featureText: {
//     fontSize: wp(4.2),
//     color: '#6B7280',
//     marginLeft: wp(3),
//   },

//   featureContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   button: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: hp(1),
//     backgroundColor: COLORS.ligngreenbtncolor,
//     borderRadius: wp(2),
//     flexDirection: 'row',
//     paddingVertical: hp(1.8),
//   },
// });


import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

export default function Splash() {

  const navigation = useNavigation();

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {

    if (imageLoaded) {

      const timer = setTimeout(() => {
        SplashScreen.hide();
        navigation.navigate('Login');
      }, 2500);

      return () => clearTimeout(timer);
    }

  }, [imageLoaded]);

  return (
    <View style={{ flex: 1 }}>

      <Image
        source={require('../../assets/img/splash.png')}
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode="cover"

        onLoadEnd={() => {
          setImageLoaded(true);
        }}
      />

    </View>
  );
}