import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView,} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import { FONTFAMILY } from '../../theme/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function ExitLogic() {
  const [targetProfit, setTargetProfit] = useState(2.0);
  const [stopLoss, setStopLoss] = useState(1.0);

  const increaseValue = (type:any) => {
    if (type === 'profit') {
      setTargetProfit(prev => +(prev + 0.5).toFixed(1));
    } else {
      setStopLoss(prev => +(prev + 0.5).toFixed(1));
    }
  };

  const decreaseValue = (type:any) => {
    if (type === 'profit' && targetProfit > 0) {
      setTargetProfit(prev => +(prev - 0.5).toFixed(1));
    } else if (type === 'loss' && stopLoss > 0) {
      setStopLoss(prev => +(prev - 0.5).toFixed(1));
    }
  };

  const CounterBox = ({ title, value, onPlus, onMinus } : any) => {
    return (
      <View style={styles.card}>
        <Text style={styles.label}>{title}</Text>

        <View style={styles.counterContainer}>
          
          {/* Minus */}
          <TouchableOpacity
            style={styles.sideButton}
            onPress={onMinus}>
            <Text style={styles.iconText}>−</Text>
          </TouchableOpacity>

          {/* Value */}
          <View style={styles.valueContainer}>
            <Text style={styles.valueText}>{value}</Text>
          </View>

          {/* Plus */}
          <TouchableOpacity
            style={styles.sideButton}
            onPress={onPlus}>
            <Text style={styles.iconText}>+</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>

    
      {/* Target Profit */}
      <CounterBox
        title="Target Profit (%)"
        value={targetProfit}
        onPlus={() => increaseValue('profit')}
        onMinus={() => decreaseValue('profit')}
      />

      {/* Stop Loss */}
      <CounterBox
        title="Stop Loss (%)"
        value={stopLoss}
        onPlus={() => increaseValue('loss')}
        onMinus={() => decreaseValue('loss')}
      />

      {/* Bottom Buttons */}
      <View style={styles.bottomContainer}>

        <TouchableOpacity style={styles.cancelBtn}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextBtn}>
          <Text style={styles.nextText}>Next Step</Text>

          <Feather
            name="arrow-right"
            size={20}
            color="#4D5B00"
            style={{ marginLeft: 8 }}
          />
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    marginTop: 20,
},
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  headerText: {
    marginLeft: 10,
    fontSize: 22,
    fontWeight: '700',
    color: '#6B7280',
    letterSpacing: 1,
  },

  card: {
    backgroundColor: '#F3F4F1',
    borderRadius: 14,
    padding: 14,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  label: {
    fontFamily:FONTFAMILY.HankenGrotesk_medium,
    color: '#5B5B5B',
    marginBottom: 12,
  },

  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },

  sideButton: {
    width: hp(5),
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#E5E7EB',
  },

  iconText: {
    fontSize: hp(2.5),
      fontFamily:FONTFAMILY.HankenGrotesk_medium,
    color: '#6B7280',
  },

  valueContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  valueText: {
    fontSize: hp(2),
          fontFamily:FONTFAMILY.HankenGrotesk_semibold,

    color: '#1F2937',
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: 20,
  },

  cancelBtn: {
    paddingVertical: 14,
    paddingHorizontal: 10,
  },

  cancelText: {
    fontSize: hp(2),
    fontFamily:FONTFAMILY.HankenGrotesk_medium,
    color: '#4B5563',
  },

  nextBtn: {
    backgroundColor: '#B6FF1A',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },

  nextText: {
    fontSize: hp(2),
    fontFamily:FONTFAMILY.HankenGrotesk_semibold,
    color: '#4D5B00',
  },
});