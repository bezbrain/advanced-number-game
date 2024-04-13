import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Title } from "../components/general";
import { randomNum } from "../utils/randomNumbers";
import { NumberContainer } from "../components/game";

interface GameScreenProps {
  isNumber: string;
}

const GameScreen = ({ isNumber }: GameScreenProps) => {
  const initialGuess = randomNum(Number(isNumber));
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.gameScreenContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
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
