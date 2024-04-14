import React, { Dispatch, SetStateAction } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button, Card, InputField, Title } from "../components/general";
import { errorMessage } from "../utils/alert-messages";
import { InstructionText } from "../components/game";
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
  // FUNCTION TO CLEAR INPUT FIELD IF AN ERROR OCCURS
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.startGameContainer}>
        <View style={styles.titleContainer}>
          <Title>Guess My Number</Title>
        </View>
        <Card>
          <InstructionText instructionStyle={styles.instructionStyle}>
            Enter a Number
          </InstructionText>
          <InputField isNumber={isNumber} setIsNumber={setIsNumber} />

          {/* Buttons container */}
          <View style={styles.btnsContainer}>
            <Button handlePress={handleResetPress}>Reset</Button>
            <Button handlePress={handleConfirmPress}>Confirm</Button>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreens;

const styles = StyleSheet.create({
  startGameContainer: {
    marginVertical: 48,
    paddingHorizontal: 24,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  instructionStyle: {
    color: Colors.accent500,
  },
  btnsContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 16,
  },
});
