import React from "react";
import { Text, StyleSheet } from "react-native";
import { Colors } from "../helpers";

interface InstructionProps {
  children: string;
  instructionStyle: Object;
}

const InstructionText = ({ children, instructionStyle }: InstructionProps) => {
  return (
    <Text style={[styles.instructionText, instructionStyle]}>{children}</Text>
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 18,
    textAlign: "center",
  },
});
