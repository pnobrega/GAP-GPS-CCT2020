import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GpsSimple from './GpsSimple';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text>Mobile Project: GPS</Text>
      <StatusBar style='auto' />
      
      <GpsSimple />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 