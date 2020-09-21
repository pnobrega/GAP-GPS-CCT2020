import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Gps from './Gps';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Mobile Project: GPS</Text>
      <StatusBar style="auto" />
      <Gps />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
