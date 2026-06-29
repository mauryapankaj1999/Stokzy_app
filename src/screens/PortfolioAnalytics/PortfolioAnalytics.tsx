import React from 'react';
import {
    FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Header from '../../components/Header/Header';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  LineChart,
  PieChart,
} from 'react-native-gifted-charts';
import { FONTFAMILY } from '../../theme/theme';
import Feather from 'react-native-vector-icons/Feather';

import CommenHeader from '../../components/Header/CommenHeader';

export default function PortfolioAnalytics() {
const lineData = [
  {value: 20},
  {value: 70},
  {value: 28},
  {value: 25},
  {value: 60},
  {value: 10},
  {value: 49},
];

// const lineData = [
//   {value: 20, label: 'Jan'},
//   {value: 45, label: 'Feb'},
//   {value: 30, label: 'Mar'},
//   {value: 60, label: 'Apr'},
//   {value: 25, label: 'May'},
//   {value: 10, label: 'Jun'},
// ];

  // Donut Chart Dummy Data

  const pieData = [
    {
      value: 55,
      color: '#5A8F00',
    },
    {
      value: 25,
      color: '#84CC16',
    },
    {
      value: 20,
      color: '#E5E7EB',
    },
  ];


  const recentActivity = [
  {
    id: '1',
    stock: 'INFY',
    type: 'Buy • Equity',
    amount: '+₹4,250',
    date: 'Today, 10:45 AM',
    color: '#5A8F00',
    bgColor: '#E8F7C8',
    icon: 'arrow-up-right',
  },
  {
    id: '2',
    stock: 'TCS',
    type: 'Sell • Options',
    amount: '-₹1,120',
    date: 'Yesterday',
    color: '#DC2626',
    bgColor: '#FDE8E8',
    icon: 'arrow-down-right',
  },
  {
    id: '3',
    stock: 'HDFCBANK',
    type: 'Buy • Equity',
    amount: '+₹8,900',
    date: 'May 12',
    color: '#5A8F00',
    bgColor: '#E8F7C8',
    icon: 'arrow-up-right',
  },
];
  const renderActivityItem = ({item}) => {
  return (
    <View style={styles.activityRow}>
      {/* Left */}

      <View style={styles.activityLeft}>
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor: item.bgColor,
            },
          ]}>
          <Feather
            name={item.icon}
            size={18}
            color={item.color}
          />
        </View>

        <View style={{marginLeft: wp(3)}}>
          <Text style={styles.stockName}>
            {item.stock}
          </Text>

          <Text style={styles.stockType}>
            {item.type}
          </Text>
        </View>
      </View>

      {/* Right */}

      <View style={{alignItems: 'flex-end'}}>
        <Text
          style={[
            styles.amountText,
            {
              color: item.color,
            },
          ]}>
          {item.amount}
        </Text>

        <Text style={styles.dateText}>
          {item.date}
        </Text>
      </View>
    </View>
  );
};

  return (
    <View style={styles.container}>
     <CommenHeader stackname="Analytics" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: hp(3),
        }}>
        {/* Portfolio Graph Card */}

        <View style={styles.graphCard}>
          <Text style={styles.totalLabel}>
            TOTAL VALUE
          </Text>

          <Text style={styles.totalAmount}>
            ₹14,25,890
          </Text>

            <Text style={[styles.totalLabel, {marginTop: hp(1)}]}>
                ALL-TIME P&L
          </Text>
          <View style={[styles.pnlContainer,]}>
            <Text style={styles.pnlText}>
              +₹12,450
            </Text>



            <View style={styles.percentBox}>
              <Text style={styles.percentText}>
                +17.5%
              </Text>
            </View>
          </View>

          {/* Graph */}

          <View style={[styles.chartContainer, {backgroundColor: '#f0f4ee'}]}>
             <LineChart
                    areaChart
                    curved
                    data={lineData}
                    height={hp(22)}
                    thickness={2}
                    color="#5A8F00"
                    startFillColor="#84CC16"
                    endFillColor="#D9F99D"
                    startOpacity={0.3}
                    endOpacity={0.05}
                    hideRules
                    hideYAxisText
                    hideAxesAndRules
                    hideDataPoints={false}
                    dataPointsColor="#5A8F00"
                    dataPointsRadius={4}
                    initialSpacing={0}
                    endSpacing={0}
                    adjustToWidth
                    disableScroll
                    focusEnabled
                    showStripOnFocus
                    showTextOnFocus
                    showDataPointOnFocus
                    stripColor="#84CC16"
                    stripHeight={hp(20)}
                    stripWidth={1}
                    textColor="#111"
                    textFontSize={14}
                    textShiftY={-30}
                    textShiftX={-15}
                    spacing={45}
                    />
          </View>

          {/* Bottom Tabs */}

          <View style={styles.timeContainer}>
            {['1D', '1W', '1M', '3M', '1Y'].map(
              item => (
                <View
                  key={item}
                  style={[
                    styles.timeBtn,

                    item === '1Y' && {
                      backgroundColor:
                        '#E5E7EB',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.timeText,

                      item === '1Y' && {
                        color: '#111',
                      },
                    ]}>
                    {item}
                  </Text>
                </View>
              ),
            )}
          </View>
        </View>



            <View style={styles.bestTradeCard}>
                <View style={styles.bestTradeContainer}>
                    <Feather
                    name="award"
                    size={25}
                    color="#4B5D7A"
                    />
                    <Text style={styles.bestTradeTitle}>Best Trade</Text>
                    <Text style={styles.bestTradeAmount}>+₹45k</Text>
                    <Text style={styles.bestTradeCompany}>RELIANCE</Text>
                </View>
                <View style={styles.bestTradeContainer}>
                    <Feather
                    name="pie-chart"
                    size={25}
                    color="#4B5D7A"
                    />
                    <Text style={styles.bestTradeTitle}>Win Rate</Text>
                    <Text style={[styles.bestTradeAmount, {color: '#000000'}]}>68%</Text>
                    <Text style={[styles.bestTradeCompany, {color: '#426900'}]}>+2.4%</Text>
                </View>

                <View style={styles.bestTradeContainer}>
                    <Feather
                    name="file-text"
                    size={25}
                    color="#4B5D7A"
                    />
                    <Text style={styles.bestTradeTitle}>Profit Factor</Text>
                    <Text style={[styles.bestTradeAmount, {color: '#000000'}]}>2.1</Text>
                    <Text style={[styles.bestTradeCompany, {color: '#565e74'}]}>Healthy</Text>
                </View>
                <View style={styles.bestTradeContainer}>
                    <Feather
                    name="droplet"
                    size={25}
                    color="#4B5D7A"
                    />
                    <Text style={styles.bestTradeTitle}>Max Drawdown</Text>
                    <Text style={[styles.bestTradeAmount, {color: '#ba1a1a'}]}>-4.2%</Text>
                    <Text style={[styles.bestTradeCompany, {color: '#565e74'}]}>Last 30d</Text>
                </View>
               
            </View>



        {/* Allocation Card */}

        <View style={styles.allocationCard}>
            <View style={styles.allocationHeader}>

          <Text style={styles.allocationTitle}>
            Allocation
          </Text>
          <TouchableOpacity>

          <Feather
                name="more-vertical"
                size={20}
                color="#4B5D7A"
                />
                </TouchableOpacity>
            </View>
            <View style={[styles.pieChartContainer,{alignSelf:'center'}]}>
          <PieChart
            donut
            radius={80}
            innerRadius={55}
            data={pieData}
            centerLabelComponent={() => {
              return (
                <View
                style={{
                    alignItems: 'center',
                }}>
                  <Text
                    style={{
                      fontSize: hp(1.4),
                      color: '#666',
                    }}>
                    Largest
                  </Text>

                  <Text
                    style={{
                      fontSize: hp(2.5),
                      fontWeight: '700',
                      color: '#111',
                    }}>
                    55%
                  </Text>
                </View>
              );
            }}
            />
            </View>

          {/* Legends */}

          <View style={styles.legendContainer}>
            <View style={styles.legendRow}>
              <View
                style={[
                  styles.dot,
                  {backgroundColor: '#5A8F00'},
                ]}
              />

              <Text style={styles.legendText}>
                Equity
              </Text>

              <Text style={styles.legendValue}>
                55%
              </Text>
            </View>

            <View style={styles.legendRow}>
              <View
                style={[
                  styles.dot,
                  {backgroundColor: '#84CC16'},
                ]}
              />

              <Text style={styles.legendText}>
                Options
              </Text>

              <Text style={styles.legendValue}>
                25%
              </Text>
            </View>

            <View style={styles.legendRow}>
              <View
                style={[
                  styles.dot,
                  {backgroundColor: '#E5E7EB'},
                ]}
              />

              <Text style={styles.legendText}>
                Cash
              </Text>

              <Text style={styles.legendValue}>
                20%
              </Text>
            </View>
          </View>
        </View>






        <View style={styles.activityCard}>
  <View style={styles.activityHeader}>
    <Text style={styles.activityTitle}>
      Recent Activity
    </Text>

    <TouchableOpacity>
      <Text style={styles.viewAllText}>
        View All
      </Text>
    </TouchableOpacity>
  </View>

  <FlatList
    data={recentActivity}
    keyExtractor={item => item.id}
    renderItem={renderActivityItem}
    scrollEnabled={false}
    ItemSeparatorComponent={() => (
      <View style={styles.separator} />
    )}
  />
</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  graphCard: {
    marginHorizontal: wp(5),
    marginTop: hp(2),
    // backgroundColor: '#F4FBE8',
    borderRadius:10,
    padding: hp(2),
    backgroundColor:'#fff',
     shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 0.5,

  },

  totalLabel: {
    fontSize: hp(1.7),
    color: '#666',
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
  },

  totalAmount: {
    fontSize: hp(3.5),
    color: '#111',
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
    marginTop: hp(0.5),
  },

  pnlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1),
  },

  pnlText: {
    color: '#5A8F00',
  fontFamily: FONTFAMILY.HankenGrotesk_semibold,
    fontSize: hp(2),
  },

  percentBox: {
    backgroundColor: '#D9F99D',
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.4),
    borderRadius: hp(1),
    marginLeft: wp(2),
  },

  percentText: {
    color: '#5A8F00',
    fontWeight: '700',
    fontSize: hp(1.3),
  },

  chartContainer: {
    marginTop: hp(1),
    alignItems: 'center',
  width: '100%',
    borderRadius:4
  },

  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2),
  },

  timeBtn: {
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.7),
    borderRadius: hp(1),
  },

  timeText: {
    color: '#666',
    fontSize: hp(1.3),
    fontWeight: '600',
  },

  allocationCard: {
    backgroundColor: '#fff',
    marginHorizontal: wp(5),
    marginTop: hp(2),
    borderRadius: hp(2),
    padding: hp(2),
  },

  allocationTitle: {
    fontSize: hp(2.2),
    fontFamily: FONTFAMILY.HankenGrotesk_semibold,
    color: '#111',
  },

  legendContainer: {
    marginTop: hp(3),
  },

  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(1.5),
  },

  dot: {
    width: hp(1.2),
    height: hp(1.2),
    borderRadius: hp(1),
    marginRight: wp(3),
  },

  legendText: {
    flex: 1,
    fontSize: hp(1.7),
    color: '#444',
  },

  legendValue: {
    fontSize: hp(1.7),
    color: '#111',
    fontWeight: '700',
  },
  bestTradeCard:{
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-between',
  marginHorizontal:wp(5),
  marginTop:hp(2),
},
bestTradeContainer:{
  width:'48%',
  backgroundColor:'#fff',
  padding:hp(2),
  borderRadius:hp(1),
  marginBottom:hp(2),
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.05,
  shadowRadius: 5,
  elevation: 0.5,
    },
    bestTradeTitle:{
        color:'#565e86',
        fontFamily:FONTFAMILY.HankenGrotesk_medium,
        fontSize:hp(1.8),
    },
    bestTradeAmount:{
        color:'#426900',
        fontFamily:FONTFAMILY.HankenGrotesk_semibold,
        fontSize:hp(2.9),
        marginTop:hp(0.5),
    },
    bestTradeCompany:{
        color:'#414a35',
        fontFamily:FONTFAMILY.HankenGrotesk_medium,
        fontSize:hp(1.8),
        marginTop:hp(0.5),

    },
    allocationHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:hp(2),
        // marginHorizontal:wp(5)
    },
   activityCard: {
  backgroundColor: '#fff',
  marginHorizontal: wp(5),
  marginTop: hp(2),
  borderRadius: hp(2),
  padding: hp(2),

  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.05,
  shadowRadius: 5,
  elevation:  0.5,
},

activityHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: hp(2),
},

activityTitle: {
  fontSize: hp(2.5),
  color: '#111',
  fontWeight: '700',
},

viewAllText: {
  fontSize: hp(1.5),
  color: '#5A8F00',
  fontWeight: '600',
},

activityRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: hp(1.5),
},

activityLeft: {
  flexDirection: 'row',
  alignItems: 'center',
},

iconContainer: {
  width: hp(5),
  height: hp(5),
  borderRadius: hp(5),
  justifyContent: 'center',
  alignItems: 'center',
},

stockName: {
  fontSize: hp(1.9),
  color: '#111',
  fontWeight: '600',
},

stockType: {
  fontSize: hp(1.4),
  color: '#666',
  marginTop: hp(0.3),
},

amountText: {
  fontSize: hp(1.8),
  fontWeight: '700',
},

dateText: {
  fontSize: hp(1.3),
  color: '#666',
  marginTop: hp(0.3),
},

separator: {
  height: 1,
  backgroundColor: '#F1F1F1',
},

});