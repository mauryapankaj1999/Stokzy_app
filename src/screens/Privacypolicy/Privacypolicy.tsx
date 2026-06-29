import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CommenHeader from '../../components/Header/CommenHeader';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {COLORS, FONTFAMILY} from '../../theme/theme';

export default function Privacypolicy() {
  return (
    <View style={styles.container}>
      <CommenHeader stackname="Privacy Policy" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        
        <Text style={styles.mainTitle}>
          Your Privacy. Our Commitment.
        </Text>

        <Text style={styles.description}>
          We are committed to protecting your personal information and
          ensuring transparency, security, and compliance.
        </Text>

        {/* Section 1 */}
        <View style={styles.section}>
          <Text style={styles.heading}>1. Scope & Applicability</Text>

          <Text style={styles.content}>
            This Privacy Policy governs the collection, use, storage, and
            disclosure of personal data of users accessing Stokzy’s website,
            applications, and services.
          </Text>

          <Text style={styles.content}>
            Stokzy is operated by Futurebulls Technologies Private Limited
            (“Company”, “we”, “us”, “our”).
          </Text>

          <Text style={styles.content}>
            By using our services, you explicitly consent to the practices
            described in this policy.
          </Text>
        </View>

        {/* Section 2 */}
        <View style={styles.section}>
          <Text style={styles.heading}>2. Information We Collect</Text>

          <Text style={styles.subHeading}>2.1 Personal Information</Text>

          <Text style={styles.bullet}>
            • Name, email address, phone number
          </Text>

          <Text style={styles.bullet}>
            • Account registration details
          </Text>

          <Text style={styles.bullet}>
            • Information shared through forms, emails, or support
            interactions
          </Text>

          <Text style={styles.subHeading}>2.2 Technical & Usage Data</Text>

          <Text style={styles.bullet}>
            • IP address, browser type, device information
          </Text>

          <Text style={styles.bullet}>
            • Operating system and access timestamps
          </Text>

          <Text style={styles.bullet}>
            • Pages visited, session duration, and interaction data
          </Text>

          <Text style={styles.subHeading}>
            2.3 Cookies & Tracking Technologies
          </Text>

          <Text style={styles.content}>
            We use cookies and similar technologies to improve functionality,
            personalize content, analyze traffic, and enhance user experience.
          </Text>

          <Text style={styles.content}>
            By continuing to use our platform, you consent to such usage unless
            disabled via browser settings.
          </Text>
        </View>

        {/* Section 3 */}
        <View style={styles.section}>
          <Text style={styles.heading}>3. Purpose of Data Collection</Text>

          <Text style={styles.bullet}>
            • To provide access to educational courses and learning tools
          </Text>

          <Text style={styles.bullet}>
            • To manage user accounts and customer support
          </Text>

          <Text style={styles.bullet}>
            • To process payments through authorized payment gateways
          </Text>

          <Text style={styles.bullet}>
            • To improve platform performance and security
          </Text>

          <Text style={styles.bullet}>
            • To comply with applicable laws and regulatory requirements
          </Text>
        </View>

        {/* Section 4 */}
        <View style={styles.section}>
          <Text style={styles.heading}>4. Legal Basis for Processing</Text>

          <Text style={styles.bullet}>• Explicit user consent</Text>

          <Text style={styles.bullet}>
            • Performance of contractual obligations
          </Text>

          <Text style={styles.bullet}>
            • Compliance with Indian laws including IT Act, 2000 and DPDP Act,
            2023
          </Text>

          <Text style={styles.bullet}>
            • Legitimate business interests such as fraud prevention and
            analytics
          </Text>
        </View>

        {/* Section 5 */}
        <View style={styles.section}>
          <Text style={styles.heading}>5. Data Sharing & Disclosure</Text>

          <Text style={styles.content}>
            Stokzy does not sell, rent, or commercially exploit user personal
            data.
          </Text>

          <Text style={styles.content}>
            All third-party processors are contractually bound to
            confidentiality and data protection standards.
          </Text>

          <Text style={styles.bullet}>
            • Authorized service providers (hosting, analytics, payment
            processors)
          </Text>

          <Text style={styles.bullet}>
            • Government or regulatory authorities when legally required
          </Text>

          <Text style={styles.bullet}>
            • Internal teams strictly on a need-to-know basis
          </Text>
        </View>

        {/* Section 6 */}
        <View style={styles.section}>
          <Text style={styles.heading}>6. Payment & Financial Data</Text>

          <Text style={styles.content}>
            All payment transactions are processed through secure,
            RBI-compliant third-party gateways.
          </Text>

          <Text style={styles.content}>
            Stokzy does not store sensitive payment information such as card
            numbers, CVV, or banking credentials.
          </Text>
        </View>

        {/* Section 7 */}
        <View style={styles.section}>
          <Text style={styles.heading}>7. Data Retention Policy</Text>

          <Text style={styles.bullet}>
            • Data is retained only as long as necessary for service delivery
          </Text>

          <Text style={styles.bullet}>
            • Retention as required by applicable Indian laws
          </Text>

          <Text style={styles.bullet}>
            • User-requested deletion subject to legal obligations
          </Text>
        </View>

        {/* Section 8 */}
        <View style={styles.section}>
          <Text style={styles.heading}>8. Data Security Measures</Text>

          <Text style={styles.content}>
            While we adopt industry-standard security practices, no digital
            system is completely immune from risks.
          </Text>

          <Text style={styles.content}>
            Users are responsible for maintaining confidentiality of their login
            credentials.
          </Text>

          <Text style={styles.bullet}>
            • SSL encryption and secure servers
          </Text>

          <Text style={styles.bullet}>
            • Access control and internal data governance
          </Text>

          <Text style={styles.bullet}>
            • Routine monitoring and system updates
          </Text>
        </View>

        {/* Section 9 */}
        <View style={styles.section}>
          <Text style={styles.heading}>9. User Rights</Text>

          <Text style={styles.content}>
            Requests can be sent to support@stokzy.com and will be addressed
            within a reasonable timeframe.
          </Text>

          <Text style={styles.bullet}>
            • Right to access and review personal data
          </Text>

          <Text style={styles.bullet}>
            • Right to correction or updating of data
          </Text>

          <Text style={styles.bullet}>
            • Right to withdraw consent
          </Text>

          <Text style={styles.bullet}>
            • Right to request erasure (subject to law)
          </Text>

          <Text style={styles.bullet}>
            • Right to opt out of non-essential communications
          </Text>
        </View>

        {/* Section 10 */}
        <View style={styles.section}>
          <Text style={styles.heading}>10. Educational Disclaimer</Text>

          <Text style={styles.content}>
            Stokzy is an educational platform. All content provided is for
            learning and informational purposes only and does not constitute
            financial, investment, or trading advice.
          </Text>

          <Text style={styles.content}>
            Users are solely responsible for their financial decisions.
          </Text>
        </View>

        {/* Section 11 */}
        <View style={styles.section}>
          <Text style={styles.heading}>11. Children’s Privacy</Text>

          <Text style={styles.content}>
            Our services are intended for users aged 18 years and above.
          </Text>

          <Text style={styles.content}>
            We do not knowingly collect personal data from minors. If such data
            is identified, it will be deleted promptly.
          </Text>
        </View>

        {/* Section 12 */}
        <View style={styles.section}>
          <Text style={styles.heading}>12. Third-Party Links</Text>

          <Text style={styles.content}>
            Our platform may contain links to external websites.
          </Text>

          <Text style={styles.content}>
            We are not responsible for the privacy practices or content of
            third-party platforms.
          </Text>
        </View>

        {/* Section 13 */}
        <View style={styles.section}>
          <Text style={styles.heading}>13. Grievance Redressal</Text>

          <Text style={styles.content}>
            This is in accordance with the Information Technology Rules, 2011
            and the Digital Personal Data Protection Act, 2023.
          </Text>

          <Text style={styles.bullet}>
            • Grievance Officer: Ankush Dabas
          </Text>

          <Text style={styles.bullet}>
            • Email: ankush@stokzy.com
          </Text>

          <Text style={styles.bullet}>
            • Contact: +91 98735 53113
          </Text>

          <Text style={styles.bullet}>
            • Resolution Timeline: Within 30 working days
          </Text>
        </View>

        {/* Section 14 */}
        <View style={styles.section}>
          <Text style={styles.heading}>14. Policy Updates</Text>

          <Text style={styles.content}>
            Stokzy reserves the right to modify this Privacy Policy at any time.
          </Text>

          <Text style={styles.content}>
            Updated versions will be published on this page, and continued
            usage constitutes acceptance of such changes.
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
    color: '#000',
    fontFamily: FONTFAMILY.HankenGrotesk_bold,
    marginBottom: hp(1),
  },

  description: {
    fontSize: wp(3.7),
    color: '#555',
    lineHeight: hp(3),
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
    marginBottom: hp(3),
  },

  section: {
    marginBottom: hp(3),
  },

  heading: {
    fontSize: wp(4.5),
    color: '#000',
    fontFamily: FONTFAMILY.HankenGrotesk_bold,
    marginBottom: hp(0.7),
  },

  subHeading: {
    fontSize: wp(4),
    color: '#000',
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
    marginTop: hp(1),
    marginBottom: hp(0.7),
  },

  content: {
    fontSize: wp(3.7),
    color: '#555',
    lineHeight: hp(3),
    fontFamily: FONTFAMILY.HankenGrotesk_medium,
    marginBottom: hp(1),
  },

  bullet: {
    fontSize: wp(3.7),
    color: '#555',
    // lineHeight: hp(1),
    fontFamily: FONTFAMILY.HankenGrotesk_regular,
    marginBottom: hp(0.8),
  },
});