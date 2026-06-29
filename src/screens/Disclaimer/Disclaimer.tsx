
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CommenHeader from '../../components/Header/CommenHeader';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {COLORS, FONTFAMILY} from '../../theme/theme';

export default function Disclaimer() {
  return (
    <View style={styles.container}>
      <CommenHeader stackname="Disclaimer" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        
        <Text style={styles.mainTitle}>
          Important Legal Disclaimer
        </Text>

        <Text style={styles.description}>
          Please read this disclaimer carefully before using Stokzy.
          Your use of the platform implies acceptance of the terms stated
          below.
        </Text>

        <Text style={styles.content}>
          Stokzy is committed to responsible financial education.
        </Text>

        <Text style={styles.content}>
          By accessing or using our platform, you acknowledge that you
          understand and agree to the following disclaimers and limitations.
        </Text>

        {/* Section 1 */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            Educational Purpose Only (Strict)
          </Text>

          <Text style={styles.content}>
            All content available on Stokzy, including courses, videos,
            tools, articles, webinars, live sessions, and learning
            material, is provided strictly for educational and informational
            purposes only.
          </Text>

          <Text style={styles.content}>
            Nothing on this platform constitutes financial, investment,
            trading, legal, or tax advice.
          </Text>
        </View>

        {/* Section 2 */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            Not a SEBI-Registered Entity
          </Text>

          <Text style={styles.content}>
            Stokzy is not registered with the Securities and Exchange Board
            of India (SEBI) or any other financial regulatory authority.
          </Text>

          <Text style={styles.content}>
            We do not act as an investment advisor, research analyst,
            portfolio manager, broker, or intermediary.
          </Text>
        </View>

        {/* Section 3 */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            No Investment Advice or Recommendations
          </Text>

          <Text style={styles.content}>
            Stokzy does not provide stock tips, buy/sell recommendations,
            portfolio advice, or personalized financial guidance.
          </Text>

          <Text style={styles.content}>
            Any examples, demonstrations, or strategies shared are for
            learning illustration only.
          </Text>
        </View>

        {/* Section 4 */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            Independent Decision-Making Responsibility
          </Text>

          <Text style={styles.content}>
            Users are solely responsible for their financial decisions.
          </Text>

          <Text style={styles.content}>
            Any action taken based on knowledge gained from Stokzy is done
            entirely at the user’s own discretion and risk.
          </Text>
        </View>

        {/* Section 5 */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            Consult Licensed Professionals
          </Text>

          <Text style={styles.content}>
            Before making any investment, trading, or financial decision,
            users are strongly advised to consult SEBI-registered
            investment advisors, certified financial planners, or other
            licensed professionals.
          </Text>
        </View>

        {/* Section 6 */}
        <View style={styles.section}>
          <Text style={styles.heading}>No Guaranteed Returns</Text>

          <Text style={styles.content}>
            Stokzy does not promise, guarantee, or assure any profits,
            returns, income, or financial success.
          </Text>

          <Text style={styles.content}>
            Financial markets involve substantial risk, and losses are
            possible.
          </Text>
        </View>

        {/* Section 7 */}
        <View style={styles.section}>
          <Text style={styles.heading}>Risk Disclosure</Text>

          <Text style={styles.content}>
            Trading and investing in financial markets involves risk,
            including potential loss of capital.
          </Text>

          <Text style={styles.content}>
            Users should not trade or invest funds they cannot afford to
            lose.
          </Text>
        </View>

        {/* Section 8 */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            Accuracy & Limitation of Information
          </Text>

          <Text style={styles.content}>
            While reasonable efforts are made to keep content accurate and
            updated, Stokzy does not warrant the completeness, accuracy, or
            reliability of any information.
          </Text>

          <Text style={styles.content}>
            Market conditions, regulations, and data may change without
            notice.
          </Text>
        </View>

        {/* Section 9 */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            No Promotion of Financial Products
          </Text>

          <Text style={styles.content}>
            Stokzy does not sell, promote, or distribute any securities,
            investment schemes, financial products, or third-party
            financial services.
          </Text>

          <Text style={styles.content}>
            Revenue is generated solely through educational services.
          </Text>
        </View>

        {/* Section 10 */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            Impersonation & Fraud Warning
          </Text>

          <Text style={styles.content}>
            Stokzy communicates only via its official website, verified
            email addresses, and authorized channels.
          </Text>

          <Text style={styles.content}>
            We are not responsible for losses arising from impersonation,
            scams, or unauthorized communications.
          </Text>
        </View>

        {/* Section 11 */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            Limitation of Liability
          </Text>

          <Text style={styles.content}>
            To the maximum extent permitted by law, Stokzy and its
            operators shall not be liable for any direct, indirect,
            incidental, or consequential losses arising from the use of or
            reliance on educational content provided on the platform.
          </Text>
        </View>

        {/* Section 12 */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            Grievance Redressal
          </Text>

          <Text style={styles.content}>
            For questions or concerns regarding this disclaimer, please
            contact us at support@stokzy.com.
          </Text>

          <Text style={styles.content}>
            We are committed to transparency and responsible education.
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
});