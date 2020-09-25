import React, { Component, useState} from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import Moment from "moment";




  //const [passiveMode,setPassive_mode] = useState(false);

export default class Gps extends Component {
  
  state = {
    location: null,
    latitude: null,
    longitude:null,
    accuracy:0,
    timestamp:0,
    passiveMode: false,
  };
  
  
  getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = JSON.stringify(position);
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);
        const accuracy = JSON.stringify(position.coords.accuracy);
        const timestamp = JSON.stringify(position.timestamp);
        
        this.setState({ location });
        this.setState({latitude});
        this.setState({longitude});
        this.setState({accuracy});
        this.setState({timestamp});
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
  pressButton =()=>{
    if (this.state.passiveMode) {
      this.setState({passiveMode:false})
    
    }
    else 
       this.setState({passiveMode:true})
      }

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
          <Text style={styles.title}>Time: {(this.state.timestamp!=0 ? Moment(parseInt(this.state.timestamp)).format('h:mm:ss a'):null)}</Text>
        </TouchableOpacity>
        <br/>
        <Button

          //onPress = {(this.state.passiveMode? this.setState({passiveMode:false}):this.setState({passiveMode:true}))}
          onPress = {this.pressButton}
          title = {'Passive Mode: '+ (this.state.passiveMode?'ON':'OFF')}
        />
           
             {/* {  {!this.state.ready && <Text>Using Geolocation in React Native.</Text>}
              {this.state.error && <Text>{this.state.error}</Text>}
              {this.state.ready && 
              ( 
                <>
                  <Text
                    style={styles.title}
                  >{`Latitude: ${this.state.where.lat}`}</Text>
                  <br />
                  /* <Text
                    style={styles.title}
                  >{` Longitude: ${this.state.where.lng}`}</Text>
                  <br />
                  <Text
                    style={styles.title}
                  >{`accuracy: ${this.state.where.acc}`}</Text>
                  <br />
                  <Text style={styles.title}>{`Speed: ${this.state.where.spe}`}</Text>
                  <br />
                  <Text style={styles.title}>{"Time: " + this.localTime()}</Text>'' 
                </>
               )}  */}
            
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

