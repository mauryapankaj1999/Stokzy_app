import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// import Feather from '@react-native-vector-icons/Feather';

import Feather from 'react-native-vector-icons/Feather';

import {DrawerActions, useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Header(props: any) {
  const navigation: any = props.navigation ?? useNavigation();

  return (
    <View style={styles.header}>

      {/* MENU */}
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}>

        <Feather name="menu" size={23} color="black" />

      </TouchableOpacity>

      {/* LOGO */}
      <View>
        <Image
          source={require('../../assets/img/stokzy_logo.png')}
          style={{
            width: wp(22),
            height: wp(7),
            resizeMode: 'contain',
          }}
        />
      </View>

      {/* BELL */}
      <TouchableOpacity>
        <Feather name="bell" size={23} color="black" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(3),
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
  },
});