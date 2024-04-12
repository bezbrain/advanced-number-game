import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Button, InputField } from "../components/general";

const StartGameScreens = () => {
  return (
    <View style={styles.inputContainer}>
      <InputField />
      <Button>Reset</Button>
      <Button>Confirm</Button>
    </View>
  );
};

export default StartGameScreens;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#53253c",
    borderRadius: 8,
    elevation: 10,
    shadowColor: "red",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
