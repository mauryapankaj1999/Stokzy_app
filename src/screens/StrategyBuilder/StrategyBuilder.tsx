import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS, FONTFAMILY } from '../../theme/theme';
import Feather from 'react-native-vector-icons/Feather';

import { Dropdown } from 'react-native-element-dropdown';
import ExitLogic from '../../components/ExitLogic/ExitLogic';
import CommenHeader from '../../components/Header/CommenHeader';

export default function StrategyBuilder() {
  const [activeMarket, setActiveMarket] = useState('NIFTY 50');
  const [activeTimeframe, setActiveTimeframe] = useState('5m');
  const marketTabs = ['NIFTY 50', 'BANKNIFTY', 'FINNIFTY', 'SENSEX'];
  const timeframeTabs = ['1m', '5m', '15m', '1h', '1d'];
  const [condition, setCondition] = useState(null);
  const [indicator, setIndicator] = useState(null);

  const conditionData = [
    { label: 'Price (Close)', value: 'price_close' },
    { label: 'Price (Open)', value: 'price_open' },
    { label: 'Volume', value: 'volume' },
  ];

  const indicatorData = [
    { label: 'SMA (20)', value: 'sma20' },
    { label: 'EMA (50)', value: 'ema50' },
    { label: 'RSI (14)', value: 'rsi14' },
  ];
  return (
    <>
      <View style={styles.container}>
         <CommenHeader stackname="Strategy Builder" />
        <ScrollView style={{ paddingHorizontal: 10 }}>
          <View style={styles.topContainer}>
            <Text style={styles.stepText}>STEP 1 OF 3</Text>

            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
          </View>
          <Text style={styles.heading}>Create Strategy</Text>

          <Text style={styles.subHeading}>
            Define your market, timeframe, and core entry conditions.
          </Text>

          <View style={styles.basicprament}>
            <Text style={styles.basicpramentText}>BASIC PARAMETERS</Text>
            <View style={styles.line}></View>
            <View>
              <Text style={styles.strategname}>Strategy Name</Text>
              <TextInput
                placeholder="e.g., Morning Breakout"
                style={styles.inputstyle}
              />
            </View>
            <Text style={[styles.strategname, { marginTop: hp(2) }]}>
              Target Market
            </Text>

            <View style={styles.tabslist}>
              {marketTabs.map(item => (
                <TouchableOpacity
                  key={item}
                  activeOpacity={0.8}
                  onPress={() => setActiveMarket(item)}
                  style={[
                    styles.tabBtn,

                    activeMarket === item && styles.activeTabBtn,
                  ]}
                >
                  <Text
                    style={[
                      styles.tabText,

                      activeMarket === item && styles.activeTabText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Timeframe */}

            <View style={styles.line}></View>

            <Text style={[styles.strategname, { marginBottom: hp(1) }]}>
              Timeframe
            </Text>

            <View style={styles.tabslistnumber}>
              {timeframeTabs.map(item => (
                <TouchableOpacity
                  key={item}
                  activeOpacity={0.8}
                  onPress={() => setActiveTimeframe(item)}
                  style={[
                    styles.timeBtn,

                    activeTimeframe === item && styles.activeTimeBtn,
                  ]}
                >
                  <Text
                    style={[
                      styles.timeText,

                      activeTimeframe === item && styles.activeTimeText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.basicprament}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather name="log-in" size={18} color="#6B7280" />
              <Text style={styles.entrylogic}>ENTRY LOGIC </Text>
            </View>
            <Text style={styles.line}></Text>
            <Text style={[styles.strategname, { marginBottom: hp(2.4) }]}>
              Execute a trade when these conditions are met:
            </Text>

            <View>
              {/* First Dropdown */}
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={conditionData}
                maxHeight={250}
                labelField="label"
                valueField="value"
                placeholder="Select Condition"
                value={condition}
                onChange={item => {
                  setCondition(item.value);
                }}
              />

              <Text style={styles.middleText}>crosses above</Text>

              {/* Second Dropdown */}
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={indicatorData}
                maxHeight={250}
                labelField="label"
                valueField="value"
                placeholder="Select Indicator"
                value={indicator}
                onChange={item => {
                  setIndicator(item.value);
                }}
              />

              <Text style={styles.addCondition}>+ Add Condition</Text>
            </View>
          </View>

          <View style={styles.basicprament}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather name="log-in" size={18} color="#6B7280" />
              <Text style={styles.entrylogic}>EXIT LOGIC </Text>
            </View>

            <ExitLogic />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  topContainer: {
    paddingHorizontal: wp(1),
    paddingVertical: hp(2),
  },

  stepText: {
    fontSize: hp(1.3),
    color: '#777',
    fontWeight: '600',
  },

  progressBar: {
    height: hp(0.6),
    backgroundColor: '#E5E7EB',
    borderRadius: hp(1),
    marginTop: hp(1),
    overflow: 'hidden',
  },

  progressFill: {
    width: '35%',
    height: '100%',
    backgroundColor: '#A3E635',
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
  basicprament: {
    marginTop: hp(2),
    backgroundColor: '#fff',
    padding: hp(2),
    borderRadius: hp(1),
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
  basicpramentText: {
    fontSize: hp(2),
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
    color: COLORS.primaryDarkGreyHex,
  },
  line: {
    width: '100%',
    height: hp(0.1),
    backgroundColor: '#f7f7f7',
    marginVertical: hp(1),
  },
  strategname: {
    color: '#6b7161',
    fontSize: hp(1.8),
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
  },
  inputstyle: {
    fontSize: hp(1.8),
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
    color: '#000',
    backgroundColor: '#eceeed',
    borderRadius: hp(0.5),
    height: hp(6),
    marginTop: hp(1),
    paddingHorizontal: hp(1),
    borderWidth: hp(0.2),
    borderColor: '#e9f7d4',
    // borderColor: 'red',
  },
  tabslist: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginTop: hp(1),
    flexWrap: 'wrap',
    gap: hp(1),
  },
  tabBtn: {
    paddingHorizontal: hp(1.4),
    paddingVertical: hp(1),
    borderWidth: 1.5,
    borderColor: '#DDE2D2',
    borderRadius: 50,
    marginRight: 1,
    marginBottom: 4,
    backgroundColor: '#fff',
  },

  activeTabBtn: {
    backgroundColor: '#B6FF3B',
    borderColor: '#B6FF3B',
  },

  tabText: {
    color: '#444',
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
    fontSize: hp(1.8),
  },

  activeTabText: {
    color: '#111',
  },

  tabslistnumber: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: hp(1),
  },

  timeBtn: {
    paddingHorizontal: hp(1.4),
    paddingVertical: hp(0.5),
    borderWidth: 1.5,
    borderColor: '#DDE2D2',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
    backgroundColor: '#fff',
  },

  activeTimeBtn: {
    backgroundColor: '#B6FF3B',
    borderColor: '#B6FF3B',
  },

  timeText: {
    color: '#444',
    fontSize: 15,
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
  },

  activeTimeText: {
    color: '#111',
  },
  entrylogic: {
    fontSize: hp(2),
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
    color: COLORS.primaryDarkGreyHex,
    marginLeft: hp(1),
  },
  strategname1: {
    fontSize: hp(2),
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
    color: COLORS.primaryDarkGreyHex,
  },

  //  container2: {
  //   padding: 16,
  //   backgroundColor: '#fff',
  //   flex: 1,
  // },

  dropdown: {
    height: hp(5.5),
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    backgroundColor: '#F9FAFB',
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
  },

  placeholderStyle: {
    fontSize: 16,
    color: '#6B7280',
  },

  selectedTextStyle: {
    fontSize: hp(2),
    color: '#111827',
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
  },

  middleText: {
    marginVertical: 14,
    fontSize: 16,
    color: '#6B7280',
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
  },

  addCondition: {
    marginTop: 24,
    fontSize: hp(2),
    color: '#65A30D',
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
  },
});
