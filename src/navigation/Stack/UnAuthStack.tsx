// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React from 'react'
// import { Text } from 'react-native'
// import Splash from '../../screens/Splash/Splash';
// import Login from '../../screens/Login/Login';
// import Register from '../../screens/Register/Register';
// import BottomBar from '../BottomBar/BottomBar';
// import Home from '../../screens/Home/Home';
// import Demopage from '../../screens/Demopage/Demopage';
// import DrawerNavigator from '../Drawer/DrawerNavigator';

// export default function UnAuthStack() {
//   const UnAuthStack = createNativeStackNavigator();

//   return (
    
//   <UnAuthStack.Navigator
//       initialRouteName="Splash"
//       screenOptions={{
//         headerShown: false,
//         gestureDirection: 'horizontal',
//       }}>
//       <UnAuthStack.Screen name="Splash" component={Splash} />
//       <UnAuthStack.Screen name="Login" component={Login} />
//       <UnAuthStack.Screen name="Register" component={Register} />
//       <UnAuthStack.Screen name="DrawerNavigation" component={DrawerNavigator} />
//       <UnAuthStack.Screen name="Demopage" component={Demopage} />
//       {/* <UnAuthStack.Screen name="Home" component={Home} /> */}
//     </UnAuthStack.Navigator>
//   )
// }


import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../../screens/Splash/Splash';
import Login from '../../screens/Login/Login';
import Register from '../../screens/Register/Register';
import DrawerNavigator from '../Drawer/DrawerNavigator';
import Demopage from '../../screens/Demopage/Demopage';

const Stack = createNativeStackNavigator();

export default function UnAuthStack({ setIsAuthenticated }:any) {

  return (

    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        gestureDirection: 'horizontal',
      }}
    >

      <Stack.Screen
        name="Splash"
        component={Splash}
      />

      <Stack.Screen name="Login">
        {props => (
          <Login
            {...props}
            setIsAuthenticated={setIsAuthenticated}
          />
        )}
      </Stack.Screen>

      <Stack.Screen
        name="Register"
        component={Register}
      />

    
    </Stack.Navigator>
  );
}