import React, { Dispatch, SetStateAction, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, InputField } from "../components/general";
import { errorMessage } from "../utils/alert-messages";
import { Colors } from "../components/helpers";

interface StartGameScreenProps {
  setIsStartGame: Dispatch<SetStateAction<boolean>>;
  isNumber: string;
  setIsNumber: Dispatch<SetStateAction<string>>;
}

const StartGameScreens = ({
  isNumber,
  setIsNumber,
  setIsStartGame,
}: StartGameScreenProps) => {
  const restInputHandler = () => {
    setIsNumber("");
  };

  //   HANDLE THE CONFIRM BUTTON CLICK
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
      errorMessage(
        "Invalid Number!",
        "Input value must be a number",
        "Okay",
        restInputHandler
      );
      return;
    }
    // Check if number is between 0 and 100
    if (toNumberValue < 1 || toNumberValue > 99) {
      errorMessage(
        "Invalid Number!",
        "Input value must be between 0 and 100",
        "Okay",
        restInputHandler
      );
      return;
    }

    setIsStartGame(true);
  };

  //   HANDLE THE RESET BUTTON CLICK
  const handleResetPress = () => {
    setIsNumber("");
  };

  return (
    <View style={styles.inputContainer}>
      <InputField isNumber={isNumber} setIsNumber={setIsNumber} />

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
    backgroundColor: Colors.primary500,
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
