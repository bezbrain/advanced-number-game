import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Title } from "../components/general";
import { randomNum } from "../utils/randomNumbers";
import { NumberContainer } from "../components/game";
import { errorMessage } from "../utils/alert-messages";

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
    // if (currentGuess === isNumberToNumber) {
    //   setIsGameOver(true);
    //   return;
    // }

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
    // if (currentGuess === isNumberToNumber) {
    //   setIsGameOver(true);
    //   return;
    // }

    minBoundary = currentGuess + 1;
    const newRandomNum = randomNum(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandomNum);
  };

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

      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <Button handlePress={guessLowerHandler}>-</Button>
          <Button handlePress={guessHigherHandler}>+</Button>
        </View>
      </View>
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
});
