import React, { Dispatch, SetStateAction } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
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
  const { width, height } = useWindowDimensions();

  const handleStartGame = () => {
    setIsStartGame(false);
    setIsGameOver(false);
    setIsNumber("");
  };

  let imageSize = 300;

  if (width < 360) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/success.png")}
            style={[styles.image, imageStyle]}
          />
        </View>
        <Text style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.numberText}>{clickedTimes}</Text> rounds to guess
          the number <Text style={styles.numberText}>{isNumber || 0}</Text>.
        </Text>
        <View style={styles.startGameBtnCon}>
          <Button handlePress={handleStartGame}>Start New Game</Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default GameOver;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
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
