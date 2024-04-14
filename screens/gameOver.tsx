import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";

const GameOver = () => {
  return (
    // <Modal animationType="slide">
    <View style={styles.container}>
      <Text>Game Over</Text>
    </View>
    // </Modal>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
