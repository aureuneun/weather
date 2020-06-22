import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Weather = ({ temp, condition }) => {
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <Text>{temp}</Text>
        <Text>{condition}</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text>nice</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Weather;
