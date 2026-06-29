import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Text } from 'react-native'
import DrawerNavigator from '../Drawer/DrawerNavigator';
import Demopage from '../../screens/Demopage/Demopage';
import Course from '../../screens/Course/Course';
import CourseDetails from '../../screens/CourseDetails/CourseDetails';
import Checkout from '../../screens/Checkout/Checkout';
import Privacypolicy from '../../screens/Privacypolicy/Privacypolicy';
import Termsconditions from '../../screens/Termsconditions/Termsconditions';
import Refundpolicy from '../../screens/Refundpolicy/Refundpolicy';
import Shippingexchange from '../../screens/Shippingexchange/Shippingexchange';
import Disclaimer from '../../screens/Disclaimer/Disclaimer';
import Faq from '../../screens/Faq/Faq';

export default function AuthStack() {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator
      initialRouteName="DrawerNavigator"
      screenOptions={{
        headerShown: false,
        gestureDirection: 'horizontal',
      }}>
      <AuthStack.Screen name="DrawerNavigation" component={DrawerNavigator} />
      <AuthStack.Screen name="Demopage" component={Demopage} />
      <AuthStack.Screen name="Course" component={Course} />
      <AuthStack.Screen name="CourseDetails" component={CourseDetails} />
      <AuthStack.Screen name="Checkout" component={Checkout} />
      <AuthStack.Screen name="Privacypolicy" component={Privacypolicy} />
      <AuthStack.Screen name="Termsconditions" component={Termsconditions} />
      <AuthStack.Screen name="Refundpolicy" component={Refundpolicy} />
      <AuthStack.Screen name="Shippingexchange" component={Shippingexchange} />
      <AuthStack.Screen name="Disclaimer" component={Disclaimer} />
      <AuthStack.Screen name="Faq" component={Faq} />

      
    </AuthStack.Navigator>
  )
}
