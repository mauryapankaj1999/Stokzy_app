// import React from "react";

// export default function Refundpolicy(){
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

export default function Refundpolicy() {
  return (
    <View style={styles.container}>
      <CommenHeader stackname="Refund Policy" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        
        <Text style={styles.mainTitle}>
          Strict No Refund Policy
        </Text>

        <Text style={styles.description}>
          Please read this policy carefully before making any payment.
          All purchases on Stokzy are final.
        </Text>

        <Text style={styles.content}>
          Stokzy provides digital education services only. Due to the
          nature of online and instantly accessible content, we follow a
          strict no-refund and no-cancellation policy.
        </Text>

        {/* Section 1 */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            1. No Refund Policy (Strict)
          </Text>

          <Text style={styles.content}>
            All purchases made on Stokzy are final and non-refundable.
          </Text>

          <Text style={styles.content}>
            This includes online courses, recorded sessions, live programs,
            tools, subscriptions, mentorships, and any other digital or
            virtual services offered on the platform.
          </Text>
        </View>

        {/* Section 2 */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            2. No Cancellation After Payment
          </Text>

          <Text style={styles.content}>
            Once a payment is successfully completed, cancellation requests
            will not be accepted under any circumstances.
          </Text>

          <Text style={styles.content}>
            Access to digital content is considered immediate delivery.
          </Text>
        </View>

        {/* Section 3 */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            3. Digital Nature of Services
          </Text>

          <Text style={styles.content}>
            Due to the digital and intangible nature of our offerings,
            refunds or cancellations are not possible once access is granted.
          </Text>

          <Text style={styles.bullet}>
            • Instant access to digital content
          </Text>

          <Text style={styles.bullet}>
            • Irreversible delivery of educational material
          </Text>

          <Text style={styles.bullet}>
            • Allocation of platform resources and infrastructure
          </Text>
        </View>

        {/* Section 4 */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            4. No Exceptions Clause
          </Text>

          <Text style={styles.content}>
            No refunds will be provided for reasons including but not limited
            to change of mind, lack of usage, misunderstanding of course
            content, scheduling conflicts, technical issues on the user’s
            end, or dissatisfaction with learning outcomes.
          </Text>
        </View>

        {/* Section 5 */}
        <View style={styles.section}>
          <Text style={styles.heading}>5. Payment Errors</Text>

          <Text style={styles.content}>
            In the rare event of a duplicate payment or technical error
            resulting in multiple charges for the same transaction, users
            must notify us within 48 hours with valid proof.
          </Text>

          <Text style={styles.content}>
            If verified by the payment gateway, the excess amount (only)
            will be reversed.
          </Text>

          <Text style={styles.content}>
            This does not apply to valid single payments.
          </Text>
        </View>

        {/* Section 6 */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            6. Chargebacks & Disputes
          </Text>

          <Text style={styles.content}>
            Initiating chargebacks or payment disputes without valid grounds
            is a violation of these terms and may result in suspension or
            permanent termination of access.
          </Text>

          <Text style={styles.content}>
            Stokzy reserves the right to contest chargebacks with full
            transaction and access logs.
          </Text>
        </View>

        {/* Section 7 */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            7. Legal & Regulatory Compliance
          </Text>

          <Text style={styles.content}>
            This policy is framed in accordance with the Consumer Protection
            Act, 2019 and Indian e-commerce guidelines applicable to digital
            goods and online educational services.
          </Text>
        </View>

        {/* Section 8 */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            8. Contact & Grievance Redressal
          </Text>

          <Text style={styles.content}>
            By making a payment on Stokzy, you acknowledge that you have
            read, understood, and agreed to this strict no-refund and
            no-cancellation policy.
          </Text>

          <Text style={styles.bullet}>
            • Email: support@stokzy.in
          </Text>

          <Text style={styles.bullet}>
            • Grievance Officer: Ankush Dabas
          </Text>

          <Text style={styles.bullet}>
            • Response Time: Within 30 working days
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF',
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
    color:  '#000',
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