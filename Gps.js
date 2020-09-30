import React, { Component, useState, useEffect} from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import Moment from "moment";


export default class Gps extends Component {
  
  
    // State object 
    // Where is an object that later on will get values from the navigator
  state = {
    location: null,
    latitude: null,
    longitude:null,
    accuracy:0,
    timestamp:0,
    speed: null,
    passiveMode: false,
  };
  
  getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // getting the specific parameters
        const location = JSON.stringify(position); //<<< used initially for dev purposes
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);
        const accuracy = JSON.stringify(position.coords.accuracy);
        const speed = JSON.stringify(position.coords.speed);
        const timestamp = JSON.stringify(position.timestamp);

        // the object state get a value for each parameter bellow.
        this.setState({location});
        this.setState({latitude});
        this.setState({longitude});
        this.setState({accuracy});
        this.setState({speed});
        this.setState({timestamp});
      },
      // call a error message if something goes wrong.
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  //function called when the button is pressed
  pressButton =()=>{
    // check if the button is in passive mode is true
    // in other other, if it is true, the variable clockCall, which
    //contains a setInterval, is stopped ("cleaned").
    if (this.state.passiveMode) {
      this.setState({passiveMode:false})
      clearTimeout(this.clockCall);

    }
    // If passive mode is false
    // the variable clockcall is called, and start running
    // setInterval, calling the function getCoordinates
    // every 1 second.
    else {
      this.setState({passiveMode:true})
      this.clockCall = setInterval(() => {
        this.getCoordinates();
      }, 1000);       
      }
    }
   
  render() {
    
    // both accuracy and speed are converted to float, to be late formatted.
    const accuracy_format = parseFloat(this.state.accuracy);
    const speed_format = parseFloat(this.state.speed);
   
    
    return (
      <View>
        <Text style={styles.title}>Using Geolocation in React Native.</Text>
        <TouchableOpacity onPress={this.getCoordinates}>
      {/*   for dev purposes*/ }   
      { /* console.log(this.state.location) */ }
          <Text style={styles.text}>Latitude: {this.state.latitude}</Text>
          <Text style={styles.text}>Longitude: {this.state.longitude}</Text>
      {/*  to stylish the value of accuracy, if the value is 0, the text will be blank, otherwise, it's formated to have only 2 decimal places*/}
          <Text style={styles.text}>Accuracy: {(accuracy_format!=0?accuracy_format.toFixed(2):null)} </Text>
      {/*  to stylish the value of speed, if the value is NAn and 'null', the text will be blank, otherwise, it's formated to have only 2 decimal places*/}    
          <Text style={styles.text}>Speed: {(!isNaN(speed_format) ?speed_format.toFixed(2): (this.state.speed=="null"?0:null))}</Text>
      {/* It was used an API called Moment to convert the timestamp to the format of Hours, minutes and seconds*/}
          <Text style={styles.text}>Time: {(this.state.timestamp!=0 ? Moment(parseInt(this.state.timestamp)).format('h:mm:ss a'):null)}</Text>
        </TouchableOpacity>
          <View style={styles.button}>
            <Button 
              onPress = {this.pressButton}
              /* if the state object has the passiveMode set to true, so the button shows ON, otherwise, OFF. */
              title = {'Passive Mode: '+ (this.state.passiveMode?'ON':'OFF')}
            />
          </View>                
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
  title: {
    marginTop: 26,
    paddingVertical: 8,
    color: "#20232a",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
  text: {
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
  button: {
    marginTop: 50,
   
  },
});

