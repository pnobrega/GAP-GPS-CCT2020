import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Gps from './Gps';

export default function MainScreen() {
  
  
  
  return (
    <View style={styles.container}>
        <StatusBar style={{color: "black"}} 
            backgroundColor= '#FFB146'
            color= 'red'
        />
        <View>
          <Image style={styles.logo} source={{ uri: 'https://www.cct.ie/wp-content/themes/hdcct/img/atoms/logo.jpg'}} /> 
        </View>
        
        <View style={styles.body}>
          <Text style={styles.title}>Mobile Project: GPS</Text>
            
          <Gps />
        </View>
        <View style={styles.foot.container}>
            <Text style={styles.text}>Developers:</Text>
            <Text style={styles.text}>Alessandro, Junior, Leandro e Paulo.</Text>
            <Text style={styles.text}>©</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  logo: {
    marginTop:50, 
    width: 300,
    height: 60,
  },
  body: {
    flex:0,
    marginTop:40,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title:{
    fontSize:30,
    alignItems: 'baseline',
  },
  foot:{
    container: {
      justifyContent: 'flex-end',
      alignItems: '',
      
    },
    text:{
      fontSize:10,
    
    }, 
  },
  
});
 