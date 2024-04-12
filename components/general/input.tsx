import React from "react";
import { StyleSheet, TextInput } from "react-native";

const InputField = () => {
  return (
    <TextInput
      keyboardType="number-pad"
      style={styles.numberInput}
      maxLength={2}
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
};

export default InputField;

const styles = StyleSheet.create({
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
