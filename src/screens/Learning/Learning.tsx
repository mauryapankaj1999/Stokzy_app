import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Header from '../../components/Header/Header';
import Feather from 'react-native-vector-icons/Feather';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {FONTFAMILY} from '../../theme/theme';
import CommenHeader from '../../components/Header/CommenHeader';

const categoryData = [
  'All',
  'Beginner',
  'Options',
  'Crypto',
  'Advanced',
];

const courseData = [
  {
    id: '1',
    level: 'Beginner',
    title: 'Market Fundamentals',
    desc:
      'Understand the core mechanics of equity markets and portfolio basics.',
    lessons: '12 Lessons',
    duration: '2h 15m',
    progress: 65,
  },
  {
    id: '2',
    level: 'Intermediate',
    title: 'Technical Indicators',
    desc:
      'Master MACD, RSI, and Bollinger Bands to identify trends.',
    lessons: '8 Lessons',
    duration: '3h 20m',
    progress: '',
  },
  {
    id: '3',
    level: 'Advanced',
    title: 'Options Greeks',
    desc:
      'Deep dive into Delta, Gamma, Theta, and Vega.',
    lessons: '15 Lessons',
    duration: '4h 30m',
    progress: 80,
  },
  {
    id: '4',
    level: 'Intermediate',
    title: 'Trading Psychology',
    desc:
      'Learn emotional discipline and risk management.',
    lessons: '10 Lessons',
    duration: '2h 40m',
    progress: 30,
  },
];

export default function Learning() {
  const [activeTab, setActiveTab] = useState('All');

  const renderCategoryItem = ({item}: any) => {
    const isActive = activeTab === item;

    return (
      <TouchableOpacity
        onPress={() => setActiveTab(item)}
        style={[
          styles.categoryBtn,
          isActive && styles.activeCategoryBtn,
        ]}>
        <Text
          style={[
            styles.categoryText,
            isActive && styles.activeCategoryText,
          ]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderCourseItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={[
          styles.courseCard,

          item.level === 'Beginner' && {
            borderTopColor: '#84CC16',
          },

          item.level === 'Intermediate' && {
            borderTopColor: '#3B82F6',
          },

          item.level === 'Advanced' && {
            borderTopColor: '#EF4444',
          },
        ]}>
        {/* Top Row */}

        <View style={styles.levelContainer}>
          <Text
            style={[
              styles.levelText,

              item.level === 'Beginner' && {
                backgroundColor: '#E8FFD7',
                color: '#4D8B00',
              },

              item.level === 'Intermediate' && {
                backgroundColor: '#DDEBFF',
                color: '#2563EB',
              },

              item.level === 'Advanced' && {
                backgroundColor: '#FFE2E2',
                color: '#DC2626',
              },
            ]}>
            {item.level}
          </Text>

          <Text style={styles.lessonText}>
            {item.lessons}
          </Text>
        </View>

        {/* Title */}

        <Text
          style={styles.courseTitle}
          numberOfLines={1}>
          {item.title}
        </Text>

        {/* Description */}

        <Text
          style={styles.courseDesc}
          numberOfLines={2}>
          {item.desc}
        </Text>


{item.progress ? (
  <View style={styles.progressContainer}>
    <View style={styles.progressHeader}>
      <Text style={styles.progressText}>
        Course Progress
      </Text>

      <Text style={styles.progressPercent}>
        {item.progress}%
      </Text>
    </View>

    <View style={styles.progressBarBackground}>
      <View
        style={[
          styles.progressBarFill,

          {
            width: `${item.progress}%`,
          },

          item.level === 'Beginner' && {
            backgroundColor: '#84CC16',
          },

          item.level === 'Intermediate' && {
            backgroundColor: '#3B82F6',
          },

          item.level === 'Advanced' && {
            backgroundColor: '#EF4444',
          },
        ]}
      />
    </View>
  </View>
) : null}

        {/* Bottom */}

        <View style={styles.bottomContainer}>
          <Text style={styles.durationText}>
            ⏱ {item.duration}
          </Text>

          <TouchableOpacity style={styles.startBtn}>
            <Text style={styles.startBtnText}>
              Start
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <CommenHeader stackname="Learning Hub" />

      <FlatList
        data={courseData}
        keyExtractor={item => item.id}
        renderItem={renderCourseItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: hp(3),
        }}
        ListHeaderComponent={
          <View style={styles.topContainer}>
            <Text style={styles.heading}>
              Learning Hub
            </Text>

            <Text style={styles.subHeading}>
              Master market fundamentals and
              advanced trading strategies with our
              curated curriculum.
            </Text>

            {/* Search */}

            <View style={styles.searchContainer}>
              <Feather
                name="search"
                size={18}
                color="#777"
              />

              <TextInput
                placeholder="Search for courses..."
                placeholderTextColor="#777"
                style={styles.searchInput}
              />
            </View>

            {/* Horizontal Tabs */}

            <FlatList
              data={categoryData}
              horizontal
              keyExtractor={(item, index) =>
                index.toString()
              }
              renderItem={renderCategoryItem}
              showsHorizontalScrollIndicator={
                false
              }
              contentContainerStyle={{
                paddingTop: hp(1),
              }}
            />
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  topContainer: {
    paddingHorizontal: wp(5),
    paddingTop: hp(2),
  },

  heading: {
    fontSize: hp(3.2),
    fontFamily: FONTFAMILY.HankenGrotesk_bold,
    color: '#111',
  },

  subHeading: {
    fontSize: hp(1.6),
    color: '#666',
    marginTop: hp(0.8),
    lineHeight: hp(2.5),
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
  },

  searchContainer: {
    height: hp(6),
    backgroundColor: '#fff',
    borderRadius: hp(1.5),
    marginTop: hp(2.5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  searchInput: {
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
    flex: 1,
    marginLeft: wp(2),
    fontSize: hp(1.7),
    color: '#111',
  },

  categoryBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: wp(5),
    paddingVertical: hp(1),
    borderRadius: hp(3),
    marginRight: wp(2),
    marginTop: hp(2),
  },

  activeCategoryBtn: {
    backgroundColor: '#B6FF3B',
  },

  categoryText: {
    color: '#444',
    fontSize: hp(1.5),
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
  },

  activeCategoryText: {
    color: '#111',
  },

  courseCard: {
    backgroundColor: '#fff',
    marginHorizontal: wp(5),
    marginTop: hp(2),
    borderRadius: hp(2),
    padding: hp(2),

    borderTopWidth: hp(0),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  levelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  levelText: {
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.5),
    borderRadius: hp(1),
    fontSize: hp(1.2),
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
  },

  lessonText: {
    fontSize: hp(1.3),
    color: '#000',
    fontFamily: FONTFAMILY.HankenGrotesk_bold,
  },

  courseTitle: {
    fontSize: hp(2.3),
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
    color: '#111',
    marginTop: hp(1.5),
  },

  courseDesc: {
    fontSize: hp(1.5),
    color: '#666',
    lineHeight: hp(2.4),
    marginTop: hp(1),
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
  },

  progressContainer: {
    marginTop: hp(2),
  },

  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(0.8),
  },

  progressText: {
    fontSize: hp(1.3),
    color: '#666',
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
  },

  progressPercent: {
    fontSize: hp(1.3),
    color: '#111',
    fontFamily:
      FONTFAMILY.HankenGrotesk_semibold,
  },

  progressBarBackground: {
    width: '100%',
    height: hp(0.4),
    backgroundColor: '#ECECEC',
    borderRadius: hp(1),
    overflow: 'hidden',
  },

  progressBarFill: {
    height: '100%',
    borderRadius: hp(1),
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(2),
  },

  durationText: {
    fontSize: hp(1.4),
    color: '#777',
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
  },

  startBtn: {
    backgroundColor: '#F2F2F2',
    paddingHorizontal: wp(5),
    paddingVertical: hp(0.8),
    borderRadius: hp(1),
  },

  startBtnText: {
    color: '#111',
    fontSize: hp(1.5),
    fontFamily:
      FONTFAMILY.HankenGrotesk_semibold,
  },
});