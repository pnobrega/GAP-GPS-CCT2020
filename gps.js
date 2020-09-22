import React, { Component } from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View } from "react-native";
// import "./Style/style.css";

export default class Gps extends React.Component {
  constructor() {
    super();

    // State object
    this.state = {
      ready: false,
      // Where is an object that later on will get values from the navigator
      where: { lat: null, lng: null, acc: null, spe: null, tim: null },
      error: null,
    };
  }

  // Life cycle function (It is called after render based)
  componentDidMount() {
    let geoOptions = {
      enableHighAccuracy: true,
      timeOut: 20000,
      maximumAge: 10000,
    };

    this.setState({ ready: false, error: null });
    navigator.geolocation.getCurrentPosition(
      this.successCallback,
      this.errorCallback,
      geoOptions
    );
  }

  // In case
  successCallback = (position) => {
    console.log(position);

    //
    this.setState({
      ready: true,
      where: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        acc: position.coords.accuracy,
        spe: position.coords.speed,
        tim: position.timestamp,
      },
    });
  };

  localTime = () => {
    let unix_timestamp = this.state.where.tim;
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    let formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

    return formattedTime;
  };

  // In case something goes wrong calls this function
  errorCallback = (err) => {
    this.setState({ error: err.message });
  };

  render() {
    return (
      <View>
        {!this.state.ready && <Text>Using Geolocation in React Native.</Text>}
        {this.state.error && <Text>{this.state.error}</Text>}
        {this.state.ready && (
          <>
            <Text
              style={styles.title}
            >{`Latitude: ${this.state.where.lat}`}</Text>
            <br />
            <Text
              style={styles.title}
            >{` Longitude: ${this.state.where.lng}`}</Text>
            <br />
            <Text
              style={styles.title}
            >{`accuracy: ${this.state.where.acc}`}</Text>
            <br />
            <Text style={styles.title}>{`Speed: ${this.state.where.spe}`}</Text>
            <br />
            <Text style={styles.title}>{"Time: " + this.localTime()}</Text>
          </>
        )}
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
