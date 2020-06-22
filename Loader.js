import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Loader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the weather</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdf6aa",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
  },
});

export default Loader;
