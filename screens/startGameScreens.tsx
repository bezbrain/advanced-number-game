import React, { Dispatch, SetStateAction } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
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
  const { width, height } = useWindowDimensions();

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

  const marginVerticalDisdance = height > 500 ? 48 : 24;

  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View
          style={[
            styles.startGameContainer,
            { marginVertical: marginVerticalDisdance },
          ]}
        >
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
      </KeyboardAvoidingView>
    </ScrollView>
    // </TouchableWithoutFeedback>
  );
};

export default StartGameScreens;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  startGameContainer: {
    paddingHorizontal: 24,
    alignItems: "center",
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
