import React from "react";
import { StyleSheet, Text, View } from "react-native";
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

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary600,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
  },
  numberText: {
    color: Colors.primary600,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});
