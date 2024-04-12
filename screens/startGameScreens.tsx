import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, InputField } from "../components/general";

const StartGameScreens = () => {
  const [isNumber, setIsNumber] = useState<string>("");

  return (
    <View style={styles.inputContainer}>
      <InputField numberValue={isNumber} setIsNumber={setIsNumber} />

      {/* Buttons container */}
      <View style={styles.btnsContainer}>
        <Button>Reset</Button>
        <Button>Confirm</Button>
      </View>
    </View>
  );
};

export default StartGameScreens;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#53253c",
    borderRadius: 8,
    elevation: 10,
    shadowColor: "red",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
  },
  btnsContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 16,
  },
});
