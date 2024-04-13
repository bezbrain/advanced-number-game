import React from "react";
import { StyleSheet, Text } from "react-native";
import { Colors } from "../helpers";

interface TitleProps {
  children: string;
}

const Title = ({ children }: TitleProps) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: Colors.primary500,
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.primary500,
    padding: 12,
  },
});
