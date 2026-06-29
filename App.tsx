import React from 'react';
import { StatusBar, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Root from './src/navigation/Stack/Root';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar 
        barStyle="light-content" backgroundColor="#57a846" />
        <Root />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}