import React from 'react';

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CommenHeader from '../../components/Header/CommenHeader';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS, FONTFAMILY, SPACING} from '../../theme/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
export default function Course() {
    const navigation: any = useNavigation();
  
  const courseData = [
    {
      id: '1',
      title: 'One on One Live Forex Trading with Varun Singh',
      desc: 'A personalized live trading mentorship program where you learn, execute, and refi',
      courseimg: require('../../assets/img/couse_img.webp'),
    },
    {
      id: '2',
      title: 'One on One Live Forex Trading with Varun Singh',
      desc: 'A personalized live trading mentorship program where you learn, execute, and refi',
      courseimg: require('../../assets/img/couse_img.webp'),
    },
    {
      id: '3',
      title: 'One on One Live Forex Trading with Varun Singh',
      desc: 'A personalized live trading mentorship program where you learn, execute, and refi',
      courseimg: require('../../assets/img/couse_img.webp'),
    },
    {
      id: '4',
      title: 'One on One Live Forex Trading with Varun Singh',
      desc: 'A personalized live trading mentorship program where you learn, execute, and refi',
      courseimg: require('../../assets/img/couse_img.webp'),
    },
    {
      id: '5',
      title: 'One on One Live Forex Trading with Varun Singh',
      desc: 'A personalized live trading mentorship program where you learn, execute, and refi',
      courseimg: require('../../assets/img/couse_img.webp'),
    },
    {
      id: '6',
      title: 'One on One Live Forex Trading with Varun Singh',
      desc: 'A personalized live trading mentorship program where you learn, execute, and refi',
      courseimg: require('../../assets/img/couse_img.webp'),
    },
    {
      id: '7',
      title: 'One on One Live Forex Trading with Varun Singh',
      desc: 'A personalized live trading mentorship program where you learn, execute, and refi',
      courseimg: require('../../assets/img/couse_img.webp'),
    },
    {
      id: '8',
      title: 'One on One Live Forex Trading with Varun Singh',
      desc: 'A personalized live trading mentorship program where you learn, execute, and refi',
      courseimg: require('../../assets/img/couse_img.webp'),
    },
  ];

  const renderCourseItem = ({item}: any) => {
    return (
      <TouchableOpacity style={styles.courseItem} onPress={() => navigation.navigate('CourseDetails')}>
        <View style={styles.courseItemimg}>
          <Image source={item.courseimg} style={styles.courseImage} />
        </View>
        <View style={styles.courseItemContent}>
          <Text style={styles.courseItemTitle} numberOfLines={1}>
            {item.title}
          </Text>

          <Text style={styles.courseItemDesc} numberOfLines={2}>
            {item.desc}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', gap: 2, alignItems: 'center'}}>
              <Feather
                name="clock"
                size={12}
                color={COLORS.btncolor}
                style={{marginLeft: wp(1)}}
              />
              <Text style={styles.durationtime}>300h</Text>
            </View>

            <TouchableOpacity style={styles.exploreButton}>
              <View style={styles.flexbtnview}>
                <Text style={styles.exploreButtonText}>Explore Now </Text>
                {/* <Feather name="arrow-right" size={13} color={COLORS.btncolor} /> */}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <CommenHeader stackname="All Course" />
        <FlatList
          data={courseData}
          keyExtractor={item => item.id}
          renderItem={renderCourseItem}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatlistContainer}
        />
        {/* <View style={{marginBottom:hp(5)}}></View> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  courseItemimg: {
    flex: 1,
    // backgroundColor: 'green',
  },
  courseItemContent: {
    flex: 2,
    // paddingVertical:hp(1),
    paddingRight: hp(2),
  },
  courseItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginBottom: hp(1),
    gap: wp(2),
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.01,
    shadowRadius: 2,

    // Android Shadow
    elevation: 0.8,
  },
  courseImage: {
    height: hp(13),
    width: '100%',
    objectFit: 'cover',
  },
  courseItemTitle: {
    marginTop: hp(1),
    fontSize: hp(1.7),
    color: '#111',
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
  },

  courseItemDesc: {
    marginTop: hp(0.2),
    fontSize: hp(1.3),
    color: '#666',
    lineHeight: hp(2),
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
  },
  exploreButton: {
    marginTop: hp(2),
    borderRadius: hp(1),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // backgroundColor:'red'
  },
  flexbtnview: {
    flexDirection: 'row',
    borderWidth: 0.8,
    borderColor: COLORS.btncolor,
    // backgroundColor:COLORS.btncolor,
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 3,
  },
  exploreButtonText: {
    fontFamily: FONTFAMILY.HankenGrotesk_regular,
    color: COLORS.btncolor,
    fontSize: hp(1.5),
  },
  flatlistContainer: {
    paddingHorizontal: wp(3),
    paddingTop: hp(2),
    paddingBottom: hp(3),
  },
  durationtime:{
    fontFamily: FONTFAMILY.HankenGrotesk_regular,
    fontSize:hp(1.6),
    color:COLORS.primaryDarkGreyHex
  }
});
