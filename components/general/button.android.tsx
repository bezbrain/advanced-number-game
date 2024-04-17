import React, { ReactNode } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { Colors } from "../helpers";

interface ButtonProps {
  children: string | ReactNode;
  handlePress: () => void;
}

const Button = ({ children, handlePress }: ButtonProps) => {
  const { primary700 } = Colors;

  const { width } = useWindowDimensions();
  const btnWidth = width > 600 ? 150 : "50%";

  return (
    <View style={[styles.btnOuterContainer, { width: btnWidth }]}>
      <Pressable
        onPress={handlePress}
        android_ripple={{ color: primary700 }}
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
    // width: ,
  },
  btnInnerContainer: {
    backgroundColor: Colors.primary600, //Android Style
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
