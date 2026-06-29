import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import CommenHeader from '../../components/Header/CommenHeader';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTFAMILY} from '../../theme/theme';
import LiveDot from '../../components/LiveDot/LiveDot';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
export default function CourseDetails() {
        const navigation: any = useNavigation();
    
  return (
    <View style={styles.container}>
      <CommenHeader stackname="Course Details" />
      <ScrollView style={{paddingBottom:hp(3)}}>
        <Image
          source={require('../../assets/img/couse_img.webp')}
          style={styles.courseimg}
        />
        <View style={{paddingHorizontal: hp(2)}}>
          <View style={{flexDirection: 'row', gap: 4, marginVertical: 10}}>
            <View style={styles.listcontainer}>
              <Feather
                name="clock"
                size={14}
                color={COLORS.btncolor}
                style={{marginLeft: wp(1)}}
              />
              <Text style={styles.listcontainertext}>300h 0m</Text>
            </View>
            <View style={styles.listcontainer}>
              <View style={styles.listcontainer}>
                <Feather
                  name="corner-left-up"
                  size={14}
                  color={COLORS.btncolor}
                  style={{marginLeft: wp(1)}}
                />
                <Text style={styles.listcontainertext}>Beginner</Text>
              </View>
              <FontAwesome
                name="language"
                size={14}
                color={COLORS.btncolor}
                style={{marginLeft: wp(1)}}
              />
              <Text style={styles.listcontainertext}>Hindi & English</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <Feather name="users" size={16} color="#000" />
            <Text
              style={{
                fontSize: hp(2),
                fontFamily: FONTFAMILY.HankenGrotesk_semibold,
                color: '#000',
              }}>
              {/* <LiveDot />  */}
              Limited seats available
            </Text>
          </View>
          <View>
            <Text style={styles.heading}>
              PropFirm Funded Account Clearance by Varun Sir
            </Text>
            <Text style={styles.descr}>
              The PropFirm Funded Account Clearance Program is a structured,
              step-by-step training designed to help traders successfully clear
              1-Step and 2-Step PropFirm challenges. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Omnis, quae alias delectus suscipit
              dolor unde distinctio adipisci ullam dolorum ratione, rem tempora
              autem ipsam. The PropFirm Funded Account Clearance Program is a
              structured, step-by-step training designed to help traders
              successfully clear 1-Step and 2-Step PropFirm challenges. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit.Consequatur ipsa
              laboriosam recusandae debitis quasi?
              The PropFirm Funded Account Clearance Program is a structured,
              step-by-step training designed to help traders successfully clear
              1-Step and 2-Step PropFirm challenges. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Omnis, quae alias delectus suscipit
              dolor unde distinctio adipisci ullam dolorum ratione, rem tempora
              autem ipsam. The PropFirm Funded Account Clearance Program is a
              structured, step-by-step training designed to help traders
              successfully clear 1-Step and 2-Step PropFirm challenges. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit.Consequatur ipsa
              laboriosam recusandae debitis quasi?
            </Text>
            <View style={styles.listtab}>
              <SimpleLineIcons name="check" size={14} color={COLORS.btncolor} />
              <Text style={styles.textlist}>Understanding PropFirm Models</Text>
            </View>
            <View style={styles.listtab}>
              <SimpleLineIcons name="check" size={14} color={COLORS.btncolor} />
              <Text style={styles.textlist}>Risk of Ruin Calculation</Text>
            </View>
           
            <View style={styles.listtab}>
              <SimpleLineIcons name="check" size={14} color={COLORS.btncolor} />
              <Text style={styles.textlist}>Risk Per Trade Framework</Text>
            </View>
          </View>
        </View>
      <View style={{height:hp(3)}}></View>
      </ScrollView>
      <View style={styles.bottomview}>
        <View style={[styles.leftbtn, {flex:1}]}>
            {/* <Text style={{}}>Course fee</Text> */}
            <View style={{paddingLeft:hp(2)}}>
              <Text style={styles.mainprice}>₹25000</Text>
              <Text style={styles.oldprice}>₹50000</Text>
            </View>
        </View>
        <View style={[ {flex:1}]}>
            <TouchableOpacity style={styles.rightbtn} onPress={() => navigation.navigate('Checkout')}>
              <Text style={styles.rightbtntext}>Enroll Now</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  courseimg: {
    width: '100%',
    height: hp(24),
    objectFit: 'cover',
  },
  listcontainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  listcontainertext: {
    fontSize: hp(2),
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
    color: COLORS.btncolor,
  },
  heading: {
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
    color: COLORS.primaryDarkGreyHex,
    fontSize: hp(2),
    marginTop: hp(2),
  },
  descr: {
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
    marginTop: hp(1),
    fontSize: hp(1.7),
    marginBottom: hp(3),
    color:COLORS.primaryDarkGreyHex
  },
  listtab: {
    backgroundColor: '#fff',
    paddingHorizontal: hp(1),
    paddingVertical: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.01,
    shadowRadius: 2,

    // Android Shadow
    elevation: 0.3,
    marginBottom: 2,
    borderRadius: 10,
  },
  textlist: {
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
    fontSize: hp(2),
    color:COLORS.primaryDarkGreyHex
  },
  bottomview:{
    backgroundColor:'#fff',
    paddingHorizontal:10,
    paddingVertical:hp(0.2),
    borderTopColor:'#f3f2f2',
    borderTopWidth:0.3,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  rightbtn:{
    backgroundColor:COLORS.btncolor,
    borderRadius:hp(1),
},
rightbtntext:{
    textAlign:'center',
    paddingHorizontal:hp(1.4),
    paddingVertical:hp(2),
    color:'#fff',
    fontFamily:FONTFAMILY.HankenGrotesk_semibold
  },
  leftbtn:{
    borderRightColor:'#f3f2f2',
    borderRightWidth:0.2,
    marginRight:13
  },
  mainprice:{
    fontFamily:FONTFAMILY.HankenGrotesk_semibold,
    color:'#000',
    fontSize:hp(3)
  },
  oldprice:{
    fontFamily:FONTFAMILY.HankenGrotesk_medium,
    color:COLORS.primaryDarkGreyHex,
    fontSize:hp(2),
    textDecorationLine:'line-through'
  }
});
