import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Title } from "../components/general";

const GameScreen = () => {
  return (
    <View style={styles.gameScreenContainer}>
      <Title>Opponent's Guess</Title>
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
