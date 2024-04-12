import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps) => {
  const pressHandler = () => {
    //
  };

  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: "#331725" }}
        style={({ pressed }) =>
          pressed
            ? [styles.pressedBtn, styles.btnInnerContainer]
            : styles.btnInnerContainer
        }
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 28,
    marginVertical: 4,
    overflow: "hidden",
  },
  btnInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 10,
    paddingHorizontal: 16,
    elevation: 8,
  },
  btnText: {
    color: "#f1f1f1",
    textAlign: "center",
  },
  pressedBtn: {
    opacity: 0.75,
  },
});
