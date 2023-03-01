import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthorizationStack } from 'screens/Authorization';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from 'theme';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const Application: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={style.rootView}>
          <NavigationContainer>
            <AuthorizationStack />
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

const style = StyleSheet.create({
  rootView: { flex: 1 },
});
