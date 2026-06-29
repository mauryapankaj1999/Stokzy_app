import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../../components/Header/Header'
import Feather from 'react-native-vector-icons/Feather';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { FONTFAMILY } from '../../theme/theme';
import CommenHeader from '../../components/Header/CommenHeader';
import {useNavigation} from '@react-navigation/native';
import notifee, { AndroidImportance } from '@notifee/react-native';

export default function Profile() {
    const navigation: any = useNavigation();
 const showNotification = async () => {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    importance: AndroidImportance.HIGH,
  });

  await notifee.displayNotification({
    title: 'Stokzy',
    body: 'Course Purchase Successful 🎉 kjnkjnkjnkjnkjn',
    android: {
      channelId,
      pressAction: {
        id: 'default',
      },
    },
  });
};

  return (
    <>
         <View style={styles.container}>
             <CommenHeader stackname="Profile" />
            <ScrollView style={{paddingHorizontal:hp(2)}}>
            <View style={styles.imgcontainer}>
                <View>
                    <Image source={require('../../assets/img/userprofileimg1.png')} style={styles.imgprofile1} />
                </View>
                <TouchableOpacity style={styles.addiconbtn}>
                    <Feather name="camera" size={14} color="#000" />
                </TouchableOpacity>
            </View>

            <View style={styles.listprofilecard}>
                <TouchableOpacity style={styles.editprofilebtn} onPress={() => navigation.navigate('Demopage')}>
                    <Text style={styles.editprofiletext}>Edit Profile</Text>
                    <Feather name="chevron-right" size={20} color="#a19d9d" />
                </TouchableOpacity>
                <View style={styles.line}></View>

                <TouchableOpacity style={styles.editprofilebtn} onPress={() => navigation.navigate('Privacypolicy')}>
                    <Text style={styles.editprofiletext}>Privacy Policy</Text>
                    <Feather name="chevron-right" size={20} color="#a19d9d" />
                </TouchableOpacity>
                <View style={styles.line}></View>

                <TouchableOpacity style={styles.editprofilebtn} onPress={() => navigation.navigate('Termsconditions')}>
                    <Text style={styles.editprofiletext}>Terms & Conditions</Text>
                    <Feather name="chevron-right" size={20} color="#a19d9d" />
                </TouchableOpacity>
                <View style={styles.line}></View>

                <TouchableOpacity style={styles.editprofilebtn} onPress={() => navigation.navigate('Refundpolicy')}>
                    <Text style={styles.editprofiletext}>Refund Policy</Text>
                    <Feather name="chevron-right" size={20} color="#a19d9d" />
                </TouchableOpacity>
                <View style={styles.line}></View>

                <TouchableOpacity style={styles.editprofilebtn} onPress={() => navigation.navigate('Shippingexchange')}>
                    <Text style={styles.editprofiletext}>Shipping & Exchange Policy</Text>
                    <Feather name="chevron-right" size={20} color="#a19d9d" />
                </TouchableOpacity>
                <View style={styles.line}></View>

                <TouchableOpacity style={styles.editprofilebtn} onPress={() => navigation.navigate('Disclaimer')}>
                    <Text style={styles.editprofiletext}>Disclaimer</Text>
                    <Feather name="chevron-right" size={20} color="#a19d9d" />
                </TouchableOpacity>
                <View style={styles.line}></View>

                {/* <TouchableOpacity style={styles.editprofilebtn}>
                    <Text style={styles.editprofiletext}>About Us</Text>
                    <Feather name="chevron-right" size={20} color="#a19d9d" />
                </TouchableOpacity>
                <View style={styles.line}></View> */}

                <TouchableOpacity style={styles.editprofilebtn} onPress={() => navigation.navigate('Faq')}>
                    <Text style={styles.editprofiletext}>FAQs</Text>
                    <Feather name="chevron-right" size={20} color="#a19d9d" />
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.editprofilebtn}>
                    <Text style={styles.editprofiletext}>Contact</Text>
                    <Feather name="chevron-right" size={20} color="#a19d9d" />
                </TouchableOpacity>
                <View style={styles.line}></View>
            </View>



            </ScrollView>
        
        
        </View>
    </>
  )
}
const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  imgcontainer:{
    position:'relative'
  },

  imgprofile1:{
    width: 90,
    borderWidth:4,
    // backgroundColor:'red',
    height: 90,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 20,
    borderColor:'#fff',
    elevation:1
  },
  addiconbtn:{
    position:'absolute',
    borderWidth:1,
    borderColor:'#eeeeee',
    left:'50%',
    right:0,
    bottom:-12,
    margin:'auto',
    textAlign:'center',
    backgroundColor:'#fff',
    width:30,
    height:30,
    borderRadius:40,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
        shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.01,
    shadowRadius: 12,
    // Android Shadow
    elevation: 5,

  },
  listprofilecard:{
    backgroundColor:'#fff',
    marginTop:hp(4),
    padding:hp(1.5),
    borderRadius:10,
    marginBottom:hp(3)
  },
  editprofilebtn:{
    paddingBottom:hp(1),
    paddingTop:hp(1),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
   line: {
    width: '100%',
    height: hp(0.1),
    backgroundColor: '#f7f7f7',
    marginVertical: hp(1),
  },
  editprofiletext:{
    fontSize:hp(2),
    color:'#000',
    fontFamily:FONTFAMILY.HankenGrotesk_medium
  }
})