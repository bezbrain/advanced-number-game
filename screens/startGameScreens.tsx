import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Button, InputField } from "../components/general";
import { errorMessage } from "../utils/alert-messages";

const StartGameScreens = () => {
  const [isNumber, setIsNumber] = useState<string>("");

  const restInputHandler = () => {
    setIsNumber("");
  };

  const handleConfirmPress = () => {
    const toNumberValue = Number(isNumber);
    // Check if the input field is empty
    if (!isNumber) {
      errorMessage(
        "Empty input field!",
        "Input field cannot be empty",
        "Okay",
        restInputHandler
      );
      return;
    }
    // Check if string converted to number is actually a number and not NaN
    if (isNaN(toNumberValue)) {
      console.log("Only number is allowed");
      return;
    }
    // Check if number is between 0 and 100
    if (toNumberValue < 1 || toNumberValue > 99) {
      console.log("Type a number between 0 and 100");
      return;
    }
  };

  const handleResetPress = () => {
    //
  };

  return (
    <View style={styles.inputContainer}>
      <InputField numberValue={isNumber} setIsNumber={setIsNumber} />

      {/* Buttons container */}
      <View style={styles.btnsContainer}>
        <Button handlePress={handleResetPress}>Reset</Button>
        <Button handlePress={handleConfirmPress}>Confirm</Button>
      </View>
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
    alignItems: "center",
  },
  btnsContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 16,
  },
});
