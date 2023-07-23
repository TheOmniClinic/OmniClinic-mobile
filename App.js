import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import theme from './src/global/style/theme';
import HomePage from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={theme.primaryColorWheel[700]} />
      <HomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
