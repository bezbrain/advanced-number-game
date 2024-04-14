import React, { Dispatch, SetStateAction } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, Title } from "../components/general";
import { Colors } from "../components/helpers";

interface GameOverProps {
  isNumber: string;
  clickedTimes: number;
  setIsStartGame: Dispatch<SetStateAction<boolean>>;
  setIsGameOver: Dispatch<SetStateAction<boolean>>;
  setIsNumber: Dispatch<SetStateAction<string>>;
}

const GameOver = ({
  isNumber,
  clickedTimes,
  setIsStartGame,
  setIsGameOver,
  setIsNumber,
}: GameOverProps) => {
  const handleStartGame = () => {
    setIsStartGame(false);
    setIsGameOver(false);
    setIsNumber("");
  };

  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.resultText}>
        Your phone needed <Text style={styles.numberText}>{clickedTimes}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.numberText}>{isNumber || 0}</Text>.
      </Text>
      <View style={styles.startGameBtnCon}>
        <Button handlePress={handleStartGame}>Start New Game</Button>
      </View>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary700,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultText: {
    color: Colors.accent500,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "open-sans",
  },
  numberText: {
    color: "white",
    fontFamily: "open-sans-bold",
  },
  startGameBtnCon: {
    marginVertical: 16,
  },
});
