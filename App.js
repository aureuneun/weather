import React from "react";
import { StyleSheet, Alert, Text, View } from "react-native";
import Loader from "./Loader";
import * as Location from "expo-location";
import Weather from "./Weather";

const WEATHER_API_KEY = "049e77411f0a31b8b2a4e2653b968699";
const WEAEHER_API = "https://api.openweathermap.org/data/2.5/weather?";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = (latitude, longitude) => {
    try {
      fetch(
        `${WEAEHER_API}lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((json) => {
          const {
            main: { temp },
            weather: [{ main: condition }],
            name,
          } = json;
          this.setState({
            isLoading: false,
            temp,
            condition,
            name,
          });
          console.log(json);
        });
    } catch (error) {
      console.log(error);
    }
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      this.getWeather(latitude, longitude);
    } catch (error) {
      console.log(error);
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition, name } = this.state;
    return isLoading ? (
      <Loader />
    ) : (
      <Weather temp={temp} condition={condition} name={name} />
    );
  }
}
