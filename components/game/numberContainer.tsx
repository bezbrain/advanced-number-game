import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Colors } from "../helpers";

interface NumberContainerProps {
  children: number;
}

const NumberContainer = ({ children }: NumberContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary600,
    padding: deviceWidth > 360 ? 24 : 16,
    margin: deviceWidth > 360 ? 24 : 16,
    borderRadius: 8,
    alignItems: "center",
  },
  numberText: {
    color: Colors.primary600,
    fontSize: deviceWidth > 360 ? 36 : 24,
    fontFamily: "open-sans-bold",
  },
});
