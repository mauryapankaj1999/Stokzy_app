// import React from 'react';
// import {ScrollView, StyleSheet, View} from 'react-native';
// import CommenHeader from '../../components/Header/CommenHeader';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// export default function Termsconditions() {
//   return (
//     <>
//       <View style={styles.container}>
//         <CommenHeader stackname="Terms & Conditions" />

//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={styles.scrollContainer}></ScrollView>
//       </View>
//     </>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   scrollContainer: {
//     paddingHorizontal: wp(5),
//     paddingBottom: hp(5),
//     paddingTop: hp(2),
//   },
// });



import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CommenHeader from '../../components/Header/CommenHeader';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {COLORS, FONTFAMILY} from '../../theme/theme';

export default function Termsconditions() {
  return (
    <View style={styles.container}>
      <CommenHeader stackname="Terms & Conditions" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        
        <Text style={styles.mainTitle}>Terms of Use</Text>

        <Text style={styles.description}>
          These Terms define your rights, responsibilities, and limitations
          while using Stokzy’s learning platform.
        </Text>

        {/* Section 1 */}
        <View style={styles.section}>
          <Text style={styles.heading}>1. Acceptance of Terms</Text>

          <Text style={styles.content}>
            By accessing or using Stokzy’s website, mobile application, or
            services (“Platform”), you agree to be legally bound by these Terms
            & Conditions (“Terms”), along with our Privacy Policy and other
            applicable policies.
          </Text>

          <Text style={styles.content}>
            If you do not agree, you must discontinue use immediately.
          </Text>
        </View>

        {/* Section 2 */}
        <View style={styles.section}>
          <Text style={styles.heading}>2. Eligibility</Text>

          <Text style={styles.bullet}>
            • You must be at least 18 years of age.
          </Text>

          <Text style={styles.bullet}>
            • You must be legally capable of entering into a binding contract
            under Indian law.
          </Text>

          <Text style={styles.bullet}>
            • Users accessing the platform from outside India do so at their
            own risk and are responsible for local legal compliance.
          </Text>
        </View>

        {/* Section 3 */}
        <View style={styles.section}>
          <Text style={styles.heading}>3. Nature of Services</Text>

          <Text style={styles.content}>
            Stokzy is an educational and learning platform focused on financial
            literacy, trading concepts, and skill development.
          </Text>

          <Text style={styles.bullet}>
            • All content is provided strictly for educational and informational
            purposes.
          </Text>

          <Text style={styles.bullet}>
            • Stokzy does NOT provide investment advice, portfolio management,
            brokerage services, or financial recommendations.
          </Text>
        </View>

        {/* Section 4 */}
        <View style={styles.section}>
          <Text style={styles.heading}>4. Educational Disclaimer</Text>

          <Text style={styles.content}>
            All content, courses, tools, and demonstrations are intended solely
            for learning purposes.
          </Text>

          <Text style={styles.content}>
            Nothing on the platform constitutes financial, investment, trading,
            or legal advice.
          </Text>

          <Text style={styles.content}>
            Stokzy does not guarantee profits, returns, accuracy, or outcomes.
          </Text>

          <Text style={styles.content}>
            Users are solely responsible for their financial decisions and
            should consult SEBI-registered professionals before acting on any
            information.
          </Text>
        </View>

        {/* Section 5 */}
        <View style={styles.section}>
          <Text style={styles.heading}>5. User Responsibilities</Text>

          <Text style={styles.bullet}>
            • Provide accurate, current, and complete information.
          </Text>

          <Text style={styles.bullet}>
            • Use the platform only for lawful, personal, and non-commercial
            educational purposes.
          </Text>

          <Text style={styles.bullet}>
            • Maintain confidentiality of account credentials.
          </Text>

          <Text style={styles.bullet}>
            • Refrain from misuse, abuse, or disruptive activities.
          </Text>
        </View>

        {/* Section 6 */}
        <View style={styles.section}>
          <Text style={styles.heading}>6. Account Security</Text>

          <Text style={styles.bullet}>
            • You are responsible for all activity conducted through your
            account.
          </Text>

          <Text style={styles.bullet}>
            • Stokzy shall not be liable for unauthorized access caused by user
            negligence.
          </Text>

          <Text style={styles.bullet}>
            • Any security breach must be reported immediately.
          </Text>
        </View>

        {/* Section 7 */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            7. Subscriptions, Payments & Refunds
          </Text>

          <Text style={styles.bullet}>
            • Certain offerings may require payment.
          </Text>

          <Text style={styles.bullet}>
            • Fees are displayed in INR and processed via third-party payment
            gateways.
          </Text>

          <Text style={styles.bullet}>
            • Stokzy does not store sensitive payment information.
          </Text>

          <Text style={styles.bullet}>
            • Refunds, if applicable, are governed strictly by our Refund
            Policy.
          </Text>
        </View>

        {/* Section 8 */}
        <View style={styles.section}>
          <Text style={styles.heading}>8. Intellectual Property Rights</Text>

          <Text style={styles.bullet}>
            • All platform content is owned by Futurebulls Technologies Pvt Ltd
            or its licensors.
          </Text>

          <Text style={styles.bullet}>
            • No content may be copied, reproduced, distributed, or resold
            without written permission.
          </Text>

          <Text style={styles.bullet}>
            • Violation may result in suspension, termination, and legal action.
          </Text>
        </View>

        {/* Section 9 */}
        <View style={styles.section}>
          <Text style={styles.heading}>9. Prohibited Activities</Text>

          <Text style={styles.bullet}>
            • Illegal, fraudulent, abusive, or harmful activities
          </Text>

          <Text style={styles.bullet}>
            • Reverse engineering, scraping, or data mining
          </Text>

          <Text style={styles.bullet}>
            • Impersonation or misrepresentation
          </Text>

          <Text style={styles.bullet}>
            • Uploading malicious or misleading content
          </Text>
        </View>

        {/* Section 10 */}
        <View style={styles.section}>
          <Text style={styles.heading}>10. Platform Availability</Text>

          <Text style={styles.content}>
            Stokzy does not guarantee uninterrupted access to the platform.
          </Text>

          <Text style={styles.content}>
            Services may be suspended for maintenance, upgrades, technical
            issues, or circumstances beyond our control.
          </Text>
        </View>

        {/* Section 11 */}
        <View style={styles.section}>
          <Text style={styles.heading}>11. Limitation of Liability</Text>

          <Text style={styles.content}>
            To the maximum extent permitted by law, Stokzy and Futurebulls
            Technologies Pvt Ltd shall not be liable for any direct, indirect,
            incidental, consequential, or financial losses arising from the use
            or inability to use the platform or reliance on educational
            content.
          </Text>
        </View>

        {/* Section 12 */}
        <View style={styles.section}>
          <Text style={styles.heading}>12. Indemnification</Text>

          <Text style={styles.content}>
            You agree to indemnify and hold harmless Stokzy, its directors,
            employees, and affiliates against any claims, damages, losses, or
            expenses arising from your violation of these Terms or misuse of the
            platform.
          </Text>
        </View>

        {/* Section 13 */}
        <View style={styles.section}>
          <Text style={styles.heading}>13. Suspension & Termination</Text>

          <Text style={styles.bullet}>
            • Stokzy reserves the right to suspend or terminate access without
            notice for violations.
          </Text>

          <Text style={styles.bullet}>
            • Legal action may be initiated in case of fraud or misuse.
          </Text>

          <Text style={styles.bullet}>
            • Users may request account closure via official support channels.
          </Text>
        </View>

        {/* Section 14 */}
        <View style={styles.section}>
          <Text style={styles.heading}>14. Force Majeure</Text>

          <Text style={styles.content}>
            Stokzy shall not be liable for failure to perform obligations due
            to events beyond reasonable control, including natural disasters,
            government actions, technical failures, or internet disruptions.
          </Text>
        </View>

        {/* Section 15 */}
        <View style={styles.section}>
          <Text style={styles.heading}>15. Governing Law & Jurisdiction</Text>

          <Text style={styles.bullet}>
            • These Terms are governed by the laws of India.
          </Text>

          <Text style={styles.bullet}>
            • Courts located in Gurugram, Haryana shall have exclusive
            jurisdiction.
          </Text>
        </View>

        {/* Section 16 */}
        <View style={styles.section}>
          <Text style={styles.heading}>16. Modifications to Terms</Text>

          <Text style={styles.content}>
            Stokzy reserves the right to modify these Terms at any time.
          </Text>

          <Text style={styles.content}>
            Continued use of the platform after updates constitutes acceptance
            of revised Terms.
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
    color: '#000',
    fontFamily: FONTFAMILY.HankenGrotesk_bold,
    marginBottom: hp(1),
  },

  description: {
    fontSize: wp(3.8),
    color: '#555',
    lineHeight: hp(3),
    fontFamily: FONTFAMILY.HankenGrotesk_regular,
    marginBottom: hp(3),
  },

  section: {
    marginBottom: hp(3),
  },

  heading: {
    fontSize: wp(4.5),
    color:'#000',
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
    // lineHeight: hp(3),
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
    marginBottom: hp(0.8),
  },
});