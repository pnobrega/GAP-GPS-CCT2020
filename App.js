import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Gps from './Gps';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        style={{ color: 'black' }}
        backgroundColor='#169B62'
        color='red'
        barStyle='dark-content'
      />
      <View style={styles.container_logo}>
        <Image
          style={styles.logo}
          source={{
            uri:
              'https://www.cct.ie/wp-content/themes/hdcct/img/atoms/logo.jpg',
          }}
        />
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>Mobile Project: GPS</Text>
        <Gps />
      </View>
      <View style={styles.foot_container}>
        <Text style={styles.foot_text}>Developers:</Text>
        <Text style={styles.foot_text}>
          Alessandro, Junior, Leandro & Paulo.
        </Text>
        <Text style={styles.foot_text}>©</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  container_logo: {},
  logo: {
    marginTop: 25,
    resizeMode: 'contain',
    width: 250,
    height: 50,
  },
  body: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 20,
  },
  foot_container: {
    marginTop: '10%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FF8200',
  },
  foot_text: {
    fontSize: 12,
  },
});
