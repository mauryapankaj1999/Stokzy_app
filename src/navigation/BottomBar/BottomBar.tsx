import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Home from '../../screens/Home/Home';
import About from '../../screens/About/About';
import Learning from '../../screens/Learning/Learning';
import PortfolioAnalytics from '../../screens/PortfolioAnalytics/PortfolioAnalytics';
import StrategyBuilder from '../../screens/StrategyBuilder/StrategyBuilder';
import Profile from '../../screens/Profile/Profile';

const Tab = createBottomTabNavigator();

export default function BottomBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarShowLabel: false,

        tabBarActiveBackgroundColor: 'transparent',

        tabBarInactiveBackgroundColor: 'transparent',

        tabBarStyle: {
          height: hp(9),

          paddingHorizontal: wp(2),

          paddingTop: hp(1),

          borderTopWidth: 0,

          elevation: 10,

          backgroundColor: '#fff',
        },
      }}
    >
      {/* Home */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabContainer,
                {
                  backgroundColor: focused ? '#E8F8C8' : 'transparent',
                },
              ]}
            >
              <Feather
                name="home"
                size={22}
                color={focused ? '#6B9E00' : '#6B7280'}
              />

              <Text
                style={[
                  styles.tabText,
                  {
                    color: focused ? '#6B9E00' : '#6B7280',
                  },
                ]}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Learn"
        component={Learning}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabContainer,
                {
                  backgroundColor: focused ? '#E8F8C8' : 'transparent',
                },
              ]}
            >
              <Feather
                name="book-open"
                size={22}
                color={focused ? '#6B9E00' : '#6B7280'}
              />

              <Text
                style={[
                  styles.tabText,
                  {
                    color: focused ? '#6B9E00' : '#6B7280',
                  },
                ]}
              >
                Learn
              </Text>
            </View>
          ),
        }}
      />

      {/* Markets */}
      <Tab.Screen
        name="Markets"
        component={PortfolioAnalytics}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabContainer,
                {
                  backgroundColor: focused ? '#E8F8C8' : 'transparent',
                },
              ]}
            >
              <Feather
                name="trending-up"
                size={22}
                color={focused ? '#6B9E00' : '#6B7280'}
              />

              <Text
                style={[
                  styles.tabText,
                  {
                    color: focused ? '#6B9E00' : '#6B7280',
                  },
                ]}
              >
                Markets
              </Text>
            </View>
          ),
        }}
      />

      {/* Strategy */}
      <Tab.Screen
        name="Strategy"
        component={StrategyBuilder}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabContainer,
                {
                  backgroundColor: focused ? '#E8F8C8' : 'transparent',
                },
              ]}
            >
              <Feather
                name="activity"
                size={22}
                color={focused ? '#6B9E00' : '#6B7280'}
              />

              <Text
                style={[
                  styles.tabText,
                  {
                    color: focused ? '#6B9E00' : '#6B7280',
                  },
                ]}
              >
                Strategy
              </Text>
            </View>
          ),
        }}
      />

      {/* Profile */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabContainer,
                {
                  backgroundColor: focused ? '#E8F8C8' : 'transparent',
                },
              ]}
            >
              <Feather
                name="user"
                size={22}
                color={focused ? '#6B9E00' : '#6B7280'}
              />

              <Text
                style={[
                  styles.tabText,
                  {
                    color: focused ? '#6B9E00' : '#6B7280',
                  },
                ]}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    justifyContent: 'center',
    alignItems: 'center',

    paddingVertical: hp(1),
    paddingHorizontal: wp(3),

    borderRadius: wp(4),

    minWidth: wp(18),
  },

  tabText: {
    fontSize: wp(3),
    
    marginTop: hp(0.5),

    fontWeight: '600',
  },
});
