// import React from "react";
// export default function Shippingexchange(){
//     return(
//         <>
        
//         </>
//     )
// }

import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CommenHeader from '../../components/Header/CommenHeader';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {COLORS, FONTFAMILY} from '../../theme/theme';

export default function Shippingexchange() {
  return (
    <View style={styles.container}>
      <CommenHeader stackname="Shipping & Exchange Policy" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        
        <Text style={styles.mainTitle}>
          Digital Delivery Only
        </Text>

        <Text style={styles.description}>
          Stokzy follows a fully digital delivery model. No physical shipping
          or exchange applies to any purchase.
        </Text>

        <Text style={styles.content}>
          This Shipping & Exchange Policy explains the digital nature of
          Stokzy’s services and clarifies why shipping and product exchange
          terms do not apply.
        </Text>

        {/* Section 1 */}
        <View style={styles.section}>
          <Text style={styles.heading}>1. Digital-Only Services</Text>

          <Text style={styles.content}>
            Stokzy is a digital education platform.
          </Text>

          <Text style={styles.content}>
            All courses, programs, tools, live sessions, recorded content,
            and subscriptions are provided exclusively in electronic format
            through our website or application.
          </Text>
        </View>

        {/* Section 2 */}
        <View style={styles.section}>
          <Text style={styles.heading}>2. No Physical Shipping</Text>

          <Text style={styles.content}>
            There is no physical product involved in any transaction on
            Stokzy.
          </Text>

          <Text style={styles.content}>
            Therefore, shipping, courier, logistics, or postal delivery
            services are not applicable.
          </Text>
        </View>

        {/* Section 3 */}
        <View style={styles.section}>
          <Text style={styles.heading}>3. Instant Access Delivery</Text>

          <Text style={styles.content}>
            Upon successful payment, access to the purchased digital service
            is granted instantly or within a short activation period via the
            user’s registered Stokzy account.
          </Text>

          <Text style={styles.content}>
            This is considered successful delivery.
          </Text>
        </View>

        {/* Section 4 */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            4. No Exchange Policy (Strict)
          </Text>

          <Text style={styles.content}>
            Digital services once accessed, activated, or delivered cannot
            be exchanged for any other course, program, subscription, or
            service.
          </Text>

          <Text style={styles.content}>
            Exchange requests will not be entertained under any
            circumstances.
          </Text>
        </View>

        {/* Section 5 */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            5. User Responsibility Before Purchase
          </Text>

          <Text style={styles.content}>
            Users are responsible for reviewing course descriptions,
            curriculum details, eligibility, and suitability before
            completing a purchase.
          </Text>

          <Text style={styles.content}>
            Stokzy shall not be liable for incorrect selection or change of
            preference.
          </Text>
        </View>

        {/* Section 6 */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            6. Technical Access Support
          </Text>

          <Text style={styles.content}>
            If a user faces genuine technical issues accessing purchased
            content due to platform-related errors, assistance will be
            provided to restore access.
          </Text>

          <Text style={styles.content}>
            This does not constitute an exchange, refund, or cancellation.
          </Text>
        </View>

        {/* Section 7 */}
        <View style={styles.section}>
          <Text style={styles.heading}>7. Legal Compliance</Text>

          <Text style={styles.content}>
            This policy is framed in accordance with the Consumer Protection
            Act, 2019 and Indian e-commerce guidelines applicable to digital
            goods and online educational services.
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scrollContainer: {
    paddingHorizontal: wp(5),
    paddingBottom: hp(5),
    paddingTop: hp(2),
  },

  mainTitle: {
    fontSize: wp(6),
    color:  '#000',
    fontFamily: FONTFAMILY.HankenGrotesk_bold,
    marginBottom: hp(1),
  },

  description: {
    fontSize: wp(3.8),
    color: '#555',
    lineHeight: hp(3),
    fontFamily: FONTFAMILY.HankenGrotesk_regular,
    marginBottom: hp(2),
  },

  section: {
    marginBottom: hp(3),
  },

  heading: {
    fontSize: wp(4.5),
    color: '#000',
    fontFamily: FONTFAMILY.HankenGrotesk_bold,
    marginBottom: hp(1),
  },

  content: {
    fontSize: wp(3.8),
    color: '#555',
    lineHeight: hp(3),
    fontFamily: FONTFAMILY.HankenGrotesk_regular,
    marginBottom: hp(1),
  },

  bullet: {
    fontSize: wp(3.8),
    color: '#555',
    lineHeight: hp(3),
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
    marginBottom: hp(0.8),
  },
});