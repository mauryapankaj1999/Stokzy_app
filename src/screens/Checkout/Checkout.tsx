import React from 'react';
import {Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CommenHeader from '../../components/Header/CommenHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTFAMILY} from '../../theme/theme';
import Feather from 'react-native-vector-icons/Feather';
import {Image} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';


export default function Checkout() {
  const handlePayment = () => {
  const options = {
    description: 'Course Purchase',
    image: 'https://i.imgur.com/3g7nmJC.jpg',
    currency: 'INR',
    key: 'rzp_test_SuhF6TWIWTZ1yF',
    amount: '49900',
    name: 'Stokzy Payment',
    prefill: {
      email: 'test@gmail.com',
      contact: '9999999999',
      name: 'Pankaj',
    },
    theme: { color: '#57a846' },
  };

  RazorpayCheckout.open(options)
    .then(data => {
      console.log('SUCCESS:', data);
      Alert('Payment Success');
    })
    .catch(error => {
      console.log('ERROR:', error);
      Alert('Payment Cancelled');
    });
};

  return (
    <>
      <View style={styles.container}>
        <CommenHeader stackname="Checkout" />
        <ScrollView style={{paddingBottom: hp(3)}}>
          <Image
            source={require('../../assets/img/couse_img.webp')}
            style={styles.courseimg}
          />
          <View style={{paddingHorizontal:15,}}>

          <Text style={styles.heading}>PropFirm Funded Account Clearance By Varun Sir</Text>
          <Text style={styles.pricedetailssec}>Price Details</Text>
          <View style={styles.pricedetailsbox}>

          <View style={styles.detilstablist}>
            <Text style={styles.detilstablistr}>Time Duration</Text>
            <Text style={styles.detilstablistrmin}>300h 0m</Text>
          </View>
          <View style={styles.detilstablist}>
            <Text style={styles.detilstablistr}>Original Price</Text>
            <Text style={styles.detilstablistrmin}>₹50,000</Text>
          </View>
          <View style={styles.detilstablist}>
            <Text style={styles.detilstablistr}>Discount</Text>
            <Text style={styles.detilstablistrmin}>-₹25,000</Text>
          </View>
          <View style={[styles.detilstablist, {marginTop:hp(3)}]}>
            <Text style={[styles.detilstablistr,{color:'#000'}]}>Total Amount</Text>
            <Text style={[styles.detilstablistrmin,{color:'#000', fontFamily:FONTFAMILY.HankenGrotesk_bold}]}>₹25,000</Text>
          </View>


          </View>
          <Text style={styles.paymentsecure}>🔒 100% Secure Payments Powered by Razorpay</Text>
          </View>
        </ScrollView>
         <View style={styles.bottomview}>
                <View style={[styles.leftbtn, {flex:1}]}>
                    {/* <Text style={{}}>Course fee</Text> */}
                    <View style={{paddingLeft:hp(2)}}>
                      <Text style={styles.mainprice}>₹25000</Text>
                    </View>
                </View>
                <View style={[ {flex:1}]}>
                    <TouchableOpacity style={styles.rightbtn} onPress={handlePayment}>
                      <Text style={styles.rightbtntext}>Continue Payment</Text>
                    </TouchableOpacity>
                </View>
              </View>
      </View>
    </>
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
   bottomview:{
    backgroundColor:'#fff',
    paddingHorizontal:10,
    paddingVertical:hp(2),
    borderTopColor:'#f3f2f2',
    borderTopWidth:0.3,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
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
  },
   heading: {
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
    color: COLORS.primaryDarkGreyHex,
    fontSize: hp(2),
    marginTop: hp(2),
  },
  pricedetailssec:{
    fontFamily: FONTFAMILY.HankenGrotesk_bold,
    color:'#000',
    fontSize: hp(2.5),
    marginVertical: hp(2),
  },
  pricedetailsbox:{
    backgroundColor:'#fff',
     shadowColor: '#000',

    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.01,
    // shadowRadius: 2,

    // elevation: 8,
    // marginBottom: 2,
    borderRadius: 10,
  },
  detilstablist:{
    paddingHorizontal:hp(1),
    paddingVertical:hp(1),
    borderBottomWidth:1,
    borderColor:'#d7d6d6',
    borderStyle:'dotted',
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:hp(1)
  },
  detilstablistr:{
    fontSize:hp(2),
    fontFamily:FONTFAMILY.HankenGrotesk_bold,
    color:'#7a7a7a'
  },
  detilstablistrmin:{
     fontSize:hp(2),
    fontFamily:FONTFAMILY.HankenGrotesk_medium,
    color:'#7a7a7a',
  },
  paymentsecure:{
    fontSize:hp(2),
    fontFamily:FONTFAMILY.HankenGrotesk_medium,
    color:'#7a7a7a',
    marginTop:hp(2)
  }
});
