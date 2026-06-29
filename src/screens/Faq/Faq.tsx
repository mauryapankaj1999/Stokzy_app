import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CommenHeader from '../../components/Header/CommenHeader';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {COLORS, FONTFAMILY} from '../../theme/theme';

export default function Faq() {
  const faqData = [
    {
      question: 'Is Stokzy suitable for beginners?',
      answer:
        'Yes. Stokzy offers beginner-friendly programs alongside advanced modules, making it useful for learners at every stage.',
    },
    {
      question: 'Will I get regular learning resources or updates?',
      answer:
        'Yes. You’ll receive structured lessons, updated study materials, and simplified workflows such as no-code algo learning examples.',
    },
    {
      question:
        'Do the courses cover different areas of financial knowledge?',
      answer:
        'Yes. Stokzy covers multiple domains including equities, commodities, indices, and more — to broaden your overall understanding.',
    },
    {
      question: 'What tools will I need to follow Stokzy’s programs?',
      answer:
        'You just need a laptop or smartphone with internet access. For practice activities, freely available simulation or charting tools may be suggested.',
    },
    {
      question: 'Do you provide live market calls or signals?',
      answer:
        'No. Stokzy focuses only on education, skill-building, and strategy awareness — not buy/sell recommendations.',
    },
    {
      question: 'At what time are live classes or sessions held?',
      answer:
        'Most live classes are scheduled in the evenings IST, and recordings are available 24/7 so you can learn at your own pace.',
    },
    {
      question:
        'Does Stokzy cover short-term and long-term concepts?',
      answer:
        'Yes. Our courses include a variety of learning modules so that learners can explore different timeframes and approaches academically.',
    },
    {
      question: 'Can I apply this learning in real markets?',
      answer:
        'Stokzy is an educational platform. The knowledge you gain can help you understand financial concepts better. Application in real markets should always be done independently, at your discretion.',
    },
    {
      question: 'Is there a refund policy?',
      answer:
        'Due to the digital nature of our courses, we do not offer refunds. Please review the curriculum and free previews before enrolling.',
    },
    {
      question: 'Will I get one-on-one mentorship?',
      answer:
        'Our standard plans include group sessions and community support. One-on-one mentorship may be available in select premium programs.',
    },
  ];

  return (
    <View style={styles.container}>
      <CommenHeader stackname="FAQ" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        
        <Text style={styles.mainTitle}>
          Clear Your Doubts
        </Text>

        <Text style={styles.description}>
          Find answers to the most common questions learners ask about
          Stokzy.
        </Text>

        {faqData.map((item, index) => (
          <View key={index} style={styles.faqCard}>
            
            <Text style={styles.question}>
              Q. {item.question}
            </Text>

            <Text style={styles.answer}>
              A. {item.answer}
            </Text>

          </View>
        ))}

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
    paddingTop: hp(2),
    paddingBottom: hp(5),
  },

  mainTitle: {
    fontSize: wp(6),
    color: '#000',
    fontFamily: FONTFAMILY.HankenGrotesk_bold,
    marginBottom: hp(1),
  },

  description: {
    fontSize: wp(3.8),
    color: '#666',
    lineHeight: hp(3),
    fontFamily: FONTFAMILY.HankenGrotesk_regular,
    marginBottom: hp(3),
  },

  faqCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: wp(3),
    padding: wp(4),
    marginBottom: hp(2),
  },

  question: {
    fontSize: wp(4.2),
    color:  '#000',
    fontFamily: FONTFAMILY.HankenGrotesk_bold,
    lineHeight: hp(3),
    marginBottom: hp(1),
  },

  answer: {
    fontSize: wp(3.8),
    color: '#555',
    lineHeight: hp(3),
    fontFamily: FONTFAMILY.HankenGrotesk_regular,
  },
});