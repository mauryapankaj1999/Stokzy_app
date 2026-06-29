import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from './AuthStack';
import UnAuthStack from './UnAuthStack';

const Stack = createNativeStackNavigator();

export default function Root() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false }}>

        {isAuthenticated ? (

          <Stack.Screen name="AuthStack">
            {props => (
              <AuthStack {...props} />
            )}
          </Stack.Screen>

        ) : (

          <Stack.Screen name="UnAuthStack">
            {props => (
              <UnAuthStack
                {...props}
                setIsAuthenticated={setIsAuthenticated}
              />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}