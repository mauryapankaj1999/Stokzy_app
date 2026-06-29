import React from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS, FONTFAMILY } from '../../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header/Header';
const portfolioData = [
  {
    id: '1',
    title: 'NIFTY 50',
    value: '22,514.65',
    change: '+145.20 (0.65%)',
  },
  {
    id: '2',
    title: 'SENSEX',
    value: '74,221.80',
    change: '+415.60 (0.58%)',
  },
  {
    id: '3',
    title: 'BANK NIFTY',
    value: '48,110.45',
    change: '+210.40 (0.43%)',
  },
  {
    id: '4',
    title: 'MIDCAP',
    value: '12,450.30',
    change: '+120.20 (0.35%)',
  },
];

const verticalData = [
  {
    id: '1',
    title: 'Learn Trading',
    desc: 'Master options trading with easy modules.',
  },
  {
    id: '2',
    title: 'Stock Analysis',
    desc: 'Understand charts and candlestick patterns.',
  },
  {
    id: '3',
    title: 'Crypto Basics',
    desc: 'Learn crypto investing step by step.',
  },
  {
    id: '4',
    title: 'Mutual Funds',
    desc: 'Start SIP and long-term investing.',
  },
];

export default function HomeScreen({ navigation }: any) {
  const renderHorizontalItem = ({ item }: any) => {
    return (
      <View style={styles.marketCard}>
        <View style={styles.marketGraphContainer}>
          <Text style={styles.marketTitle}>{item.title}</Text>
          <Image
            source={require('../../assets/img/new_graph.png')}
            style={styles.marketGraph}
          />
        </View>

        <Text style={styles.marketValue}>{item.value}</Text>

        <Text style={styles.marketChange}>{item.change}</Text>
      </View>
    );
  };

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
  ];

  const renderCourseItem = ({ item }: any) => {
    return (
      <TouchableOpacity style={styles.courseItem}>
        <Image source={item.courseimg} style={styles.courseImage} />
        <View style={styles.courseItemContent}>
          <Text style={styles.courseItemTitle} numberOfLines={2}>
            {item.title}
          </Text>

          <Text style={styles.courseItemDesc} numberOfLines={1}>
            {item.desc}
          </Text>
          <TouchableOpacity style={styles.exploreButton}>
            <Text style={styles.exploreButtonText}>Explore Now </Text>
            <Feather name="arrow-right" size={20} color={COLORS.btncolor} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    //  <LinearGradient
    //       colors={['#ffffff', '#F5FFD9']}
    //       start={{ x: 0, y: 0 }}
    //       end={{ x: 1, y: 1 }}
    //       style={styles.gradient}
    //     >

    <View style={styles.container}>
      <Header navigation={navigation} />
{/* <Text>sdfasdfasdfasdfas</Text> */}
      <FlatList
        data={[1]}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={() => null}
        ListHeaderComponent={
          <>
            <View style={styles.greetingContainer}>
              <Text style={styles.greeting}>Good Morning, John</Text>

              <Text style={styles.subText}>
                Markets are open. Let’s make some moves today.
              </Text>
            </View>

            <View style={styles.portfolioCard}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View>
                  <Text style={styles.portfolioLabel}>
                    Total Portfolio Value
                  </Text>

                  <Text style={styles.portfolioAmount}>₹14,25,890.00</Text>
                </View>

                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      backgroundColor: '#efffd5',
                      padding: 8,
                      borderRadius: 10,
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      source={require('../../assets/img/trend.png')}
                      style={styles.trendImage}
                    />

                    <Text
                      style={{
                        fontFamily: FONTFAMILY.HankenGrotesk_semibold,
                        fontSize: hp(1.5),
                      }}
                    >
                      +2.4%
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.portfoliobox}>
                <View style={styles.smallBox}>
                  <Text style={styles.smallBoxheading}>Today's P&L</Text>

                  <Text style={styles.smallBoxlabel}>+₹12,450.50</Text>
                </View>

                <View style={styles.smallBox}>
                  <Text style={styles.smallBoxheading}>Invested</Text>

                  <Text style={styles.smallBoxlabel}>₹50,000.00</Text>
                </View>

                <View style={styles.smallBox}>
                  <Text style={styles.smallBoxheading}>Available Cash</Text>

                  <Text style={styles.smallBoxlabel}>₹45,300.00</Text>
                </View>

                <View style={styles.smallBox}>
                  <Text style={styles.smallBoxheading}>Active Trades</Text>

                  <Text style={styles.smallBoxlabel}>4 Positions</Text>
                </View>
              </View>
            </View>

            <LinearGradient
              colors={['#D7F7B8', '#DDEEF8', '#E6E6FF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.courseCard}
            >
              <View style={styles.badge}>
                <Text style={styles.badgeText}>NEW COURSE</Text>
              </View>

              <Text style={styles.heading}>Level up your skills</Text>

              <Text style={styles.description}>
                Master Options Trading strategies with our interactive modules.
              </Text>

              <TouchableOpacity
                style={[styles.button, { flexDirection: 'row' }]}
              >
                <Text style={styles.buttonText}>Start Options Course</Text>

                <Feather
                  name="arrow-right"
                  size={22}
                  style={{ color: '#fff' }}
                />
              </TouchableOpacity>
            </LinearGradient>

            {/* Market Overview */}

            {/* Courses */}

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Popular Courses</Text>

              <TouchableOpacity style={styles.viewAllbtn}  onPress={() => navigation.navigate('Course')}>
                <Text style={styles.viewAllText}>View All</Text>

                <Feather
                  name="chevron-right"
                  size={19}
                  color={COLORS.btncolor}
                />
              </TouchableOpacity>
            </View>

            <FlatList
              data={courseData}
              horizontal
              keyExtractor={item => item.id}
              renderItem={renderCourseItem}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
                paddingBottom: hp(3),
              }}
            />

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Market Overview</Text>

              <TouchableOpacity style={styles.viewAllbtn}>
                <Text style={styles.viewAllText}>View All</Text>

                <Feather
                  name="chevron-right"
                  size={19}
                  color={COLORS.btncolor}
                />
              </TouchableOpacity>
            </View>

            <FlatList
              data={portfolioData}
              horizontal
              keyExtractor={item => item.id}
              renderItem={renderHorizontalItem}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
              }}
            />
          </>
        }
        contentContainerStyle={{
          paddingBottom: hp(2),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  smallBoxheading: {
    color: '#414a35',
    fontSize: hp(1.6),
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
  },
  smallBoxlabel: {
    color: '#426900',
    fontSize: hp(2),
    marginTop: hp(0.5),
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
  },
  smallBox: {
    width: '48%',
    alignItems: 'center',
    backgroundColor: '#f2f4f3',
    marginBottom: hp(1.5),
    padding: hp(2),
    borderRadius: hp(1),
  },
  portfoliobox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  greetingContainer: {
    paddingHorizontal: 20,
    marginTop: 25,
  },

  greeting: {
    fontSize: hp(2.2),
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
    color: '#000',
  },
  viewAllbtn: {
    flexDirection: 'row',
  },
  viewAllText: {
    fontSize: hp(1.8),
    color: COLORS.btncolor,
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
  },
  subText: {
    // marginTop: 8,
    fontSize: hp(1.5),
    color: '#555',
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
  },

portfolioCard: {
  marginHorizontal: 10,
  marginTop: hp(3),
  marginBottom: hp(3.5),
  backgroundColor: '#fff',
  borderRadius: 18,
  padding: 10,

  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.01,
  shadowRadius: 2,

  // Android Shadow
  elevation: 0.8
},

  portfolioLabel: {
    fontSize: hp(2),
    color: COLORS.primaryDarkGreyHex,
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
  },

  portfolioAmount: {
    marginTop: 4,
    fontSize: hp(2.8),
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
    color: '#000',
  },

  sectionHeader: {
    paddingHorizontal: 10,
    marginVertical: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  sectionTitle: {
    fontSize: hp(2.4),
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
    color: '#000',
  },

  marketCard: {
    width: 170,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginRight: 15,
  },

  marketTitle: {
    fontSize: hp(1.6),
    color: COLORS.primaryDarkGreyHex,
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
  },

  marketValue: {
    marginTop: hp(0.5),
    fontSize: hp(2),
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
    color: '#000',
  },

  marketChange: {
    marginTop: hp(0.8),
    color: '#5C8D0D',
    fontSize: hp(1.3),
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
  },

  courseHeading: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 30,
    marginBottom: 15,
    paddingHorizontal: 20,
  },

  courseCard: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginBottom: 18,
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  courseTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },

  courseDesc: {
    marginTop: 10,
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },

  badge: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },

  badgeText: {
    fontSize: hp(1.68),
    fontFamily: FONTFAMILY.HankenGrotesk_bold,
    color: '#222',
  },

  heading: {
    fontSize: hp(2.5),
    fontFamily: FONTFAMILY.HankenGrotesk_bold,
    color: '#111',
    marginTop: hp(1.4),
  },

  description: {
    fontSize: hp(1.7),
    lineHeight: hp(3),
    color: '#3F4A42',
    marginTop: hp(1.4),
  },

  button: {
    marginTop: hp(3),
    backgroundColor: '#426900',
    // height: hp(2),
    borderRadius: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(1.5),
  },

  buttonText: {
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
    color: '#fff',
    fontSize: hp(2),
  },
  marketGraphContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  marketGraph: {
    width: hp(2),
    height: hp(2),
    objectFit: 'contain',
  },
  trendImage: {
    width: hp(2),
    height: hp(2),
    objectFit: 'contain',
    marginRight: hp(1),
  },

  courseItemContent: {
    paddingHorizontal: hp(1),
    paddingBottom: hp(1),
  },
  courseItem: {
    width: wp(55),
    backgroundColor: '#fff',
borderTopLeftRadius: hp(1.5),
    borderTopRightRadius: hp(1.5),
    borderBottomLeftRadius: hp(1),
    borderBottomRightRadius: hp(1),
    // borderRadius: hp(2),
    // padding: hp(2),
    marginRight: hp(2),
    marginTop: hp(1),
     shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.01,
  shadowRadius: 2,

  // Android Shadow
  elevation: 0.8
  },

  courseImage: {
    width: '100%',
    height: hp(12),
    borderRadius: hp(1.5),
    resizeMode: 'cover',
  },

  courseItemTitle: {
    marginTop: hp(1),
    fontSize: hp(1.8),
    color: '#111',
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
  },

  courseItemDesc: {
    marginTop: hp(0.8),
    fontSize: hp(1.5),
    color: '#666',
    lineHeight: hp(2.4),
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
  },
  exploreButton: {
    marginTop: hp(2),
    borderRadius: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(0.8),
    borderWidth: 0.4,
    borderColor: '#426900',
    flexDirection: 'row',
  },
  exploreButtonText: {
    fontFamily: FONTFAMILY.HankenGrotesk_regular,
    color: COLORS.btncolor,
    fontSize: hp(1.7),
  },
});
