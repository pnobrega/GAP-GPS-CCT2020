import React, { Component, useState, useEffect} from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import Moment from "moment";


export default class Gps extends Component {
  
  state = {
    location: null,
    latitude: null,
    longitude:null,
    accuracy:0,
    timestamp:0,
    spped: null,
    passiveMode: false,
  };
  
  
  getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = JSON.stringify(position);
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);
        const accuracy = JSON.stringify(position.coords.accuracy);
        const speed = JSON.stringify(position.coords.speed);

        const timestamp = JSON.stringify(position.timestamp);
        
        this.setState({ location });
        this.setState({latitude});
        this.setState({longitude});
        this.setState({accuracy});
        this.setState({speed});
        this.setState({timestamp});
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
  pressButton =()=>{
    if (this.state.passiveMode) {
      this.setState({passiveMode:false})
      clearTimeout(this.clockCall);

    }
    else {
      this.setState({passiveMode:true})
      this.clockCall = setInterval(() => {
        this.getCoordinates();
      }, 1000);       
      }
    }
   
     /*  componentDidMount() {
      if(this.state.passiveMode){                        <<<<<<<<<<<<<<<<<<<<<< no IDEA HOW TO DEAL WITH IT   (YET)
      this.clockCall = setInterval(() => {
        this.getCoordinates();
      }, 1000);
     }
    } */
     /* componentDidUpdate(){
      if(this.state.passiveMode){
         console.log('componentDiUpdate') 
       this.clockCall = setInterval(() => {     <<<<<<<<<<<<<<<<<<<<<< no IDEA HOW TO DEAL WITH IT   (YET)
          this.getCoordinates();
        }, 1000);
       }
       else{
        clearTimeout(this.clockCall);


       }
      }   */

  render() {
    
    const accuracy_format = parseFloat(this.state.accuracy);
   
   
    return (
      <View>
        <TouchableOpacity onPress={this.getCoordinates}>
          <Text>Using Geolocation in React Native.</Text>
          {console.log(this.state.location)}
         {/*  <Text style={styles.title}>Location: {this.state.location}</Text> */}
          <Text style={styles.title}>Latitude: {this.state.latitude}</Text>
          <Text style={styles.title}>Longitude: {this.state.longitude}</Text>
          <Text style={styles.title}>Accuracy: {(accuracy_format!=0?accuracy_format.toFixed(2):null)} </Text>
          <Text style={styles.title}>Speed: {this.state.speed}</Text>
          <Text style={styles.title}>Time: {(this.state.timestamp!=0 ? Moment(parseInt(this.state.timestamp)).format('h:mm:ss a'):null)}</Text>
                  </TouchableOpacity>
        
        <Button

                   onPress = {this.pressButton}
          title = {'Passive Mode: '+ (this.state.passiveMode?'ON':'OFF')}
        />
                      
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
  },
  title: {
    marginTop: 26,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});

