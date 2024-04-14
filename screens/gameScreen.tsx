import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import { Button, Card, Title } from "../components/general";
import { randomNum } from "../utils/randomNumbers";
import { InstructionText, NumberContainer } from "../components/game";
import { errorMessage } from "../utils/alert-messages";
import { Colors } from "../components/helpers";

interface GameScreenProps {
  isNumber: string;
  setIsGameOver: Dispatch<SetStateAction<boolean>>;
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ isNumber, setIsGameOver }: GameScreenProps) => {
  const isNumberToNumber = Number(isNumber);
  const initialGuess = randomNum(minBoundary, maxBoundary, isNumberToNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

  // FUNCTION TO CHECK IF GUESS NUMBER IS TO BE LOWER BEFORE SETTING THE STATE
  const guessLowerHandler = () => {
    if (currentGuess < isNumberToNumber) {
      errorMessage(
        "Don't lie!",
        "Why lie to me to go lower when I should go higher?",
        "Sorry!"
      );
      return;
    }
    maxBoundary = currentGuess;
    const newRandomNum = randomNum(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandomNum);
  };

  // FUNCTION TO CHECK IF GUESS NUMBER IS TO BE HIGHER BEFORE SETTING THE STATE
  const guessHigherHandler = () => {
    if (currentGuess > isNumberToNumber) {
      errorMessage(
        "Don't lie!",
        "Why lie to me to go higher when I should go lower?",
        "Sorry!"
      );
      return;
    }
    minBoundary = currentGuess + 1;
    const newRandomNum = randomNum(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandomNum);
  };

  // NAVIGATE TO THE GAME OVER SCREEN AS SOON AS THE SYSTEM GUESSED THE NUMBER CORRECTLY
  useEffect(() => {
    if (currentGuess === isNumberToNumber) {
      setTimeout(() => {
        setIsGameOver(true);
      }, 3000);
    }
  }, [currentGuess, isNumberToNumber, setIsGameOver]);

  return (
    <View style={styles.gameScreenContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card>
        <InstructionText instructionStyle={styles.instructionStyle}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.lowerHigherBtnCon}>
          <Button handlePress={guessLowerHandler}>
            <Ionicons name="remove" size={24} color="white" />
          </Button>
          <Button handlePress={guessHigherHandler}>
            <Ionicons name="add" size={24} color="white" />
          </Button>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  instructionStyle: {
    color: Colors.accent500,
    fontWeight: "bold",
  },
  lowerHigherBtnCon: {
    flexDirection: "row",
    gap: 8,
    marginTop: 12,
  },
});
