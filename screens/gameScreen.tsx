import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { Button, Card, Title } from "../components/general";
import { randomNum } from "../utils/randomNumbers";
import { InstructionText, NumberContainer } from "../components/game";
import { errorMessage } from "../utils/alert-messages";
import { Colors } from "../components/helpers";

interface GameScreenProps {
  isNumber: string;
  setIsGameOver: Dispatch<SetStateAction<boolean>>;
  clickedTimes: number;
  setClickedTimes: Dispatch<SetStateAction<number>>;
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({
  isNumber,
  setIsGameOver,
  clickedTimes,
  setClickedTimes,
}: GameScreenProps) => {
  const isNumberToNumber = Number(isNumber);
  const initialGuess = randomNum(minBoundary, maxBoundary, isNumberToNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [guessedRounds, setGuessedRounds] = useState([initialGuess]);

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
    setClickedTimes(clickedTimes + 1);
    setGuessedRounds((prevGuessedRounds) => [
      newRandomNum,
      ...prevGuessedRounds,
    ]);
    console.log(guessedRounds);
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
    setClickedTimes(clickedTimes + 1);
    setGuessedRounds((prevGuessedRounds) => [
      newRandomNum,
      ...prevGuessedRounds,
    ]);
    console.log(guessedRounds);
  };

  // NAVIGATE TO THE GAME OVER SCREEN AS SOON AS THE SYSTEM GUESSED THE NUMBER CORRECTLY
  useEffect(() => {
    // setIsGameOver(true);
    if (currentGuess === isNumberToNumber) {
      setIsGameOver(true);
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

      <View>
        <FlatList
          alwaysBounceVertical={false}
          data={guessedRounds}
          renderItem={(eachObj) => <Text>{eachObj.item}</Text>}
        />
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
