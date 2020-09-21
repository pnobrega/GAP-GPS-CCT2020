import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Style from './Style/Style';

export default class Gps extends Component {
	state = {
		location: null
	};

	findCoordinates = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
				const location = JSON.stringify(position);

				this.setState({ location });
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
	};

	render() {
		return (
			<View  >
				<TouchableOpacity onPress={this.findCoordinates} style={styles.container}>
					<Text >Find My Coords?</Text>
					<Text>Location: {this.state.location}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: "lightgray",
	  borderWidth:1,
	  borderColor: '#55',
	  width:150,
	  alignItems: 'center',
	  justifyContent: 'center',
	},
  });