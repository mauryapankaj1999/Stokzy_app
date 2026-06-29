
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Feather from '@react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/Feather';

import { TouchEventType } from 'react-native-gesture-handler/lib/typescript/TouchEventType';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS, FONTFAMILY } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';

export default function CommenHeader(props:any) {
      const navigation: any = useNavigation();
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity  onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={23} color="black" />
        </TouchableOpacity>
        <View>
          {props.stackname && (
            <Text style={styles.stackname}>
              {props.stackname}
            </Text>
          )}
        </View>
        <TouchableOpacity>
          <Feather name="bell" size={23} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    stackname:{
        fontSize:hp(2.4),
        fontFamily:FONTFAMILY.HankenGrotesk_semibold,
        color:COLORS.primaryDarkGreyHex
    },
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
