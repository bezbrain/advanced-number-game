import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../helpers";

interface TitleProps {
  children: string;
}

const Title = ({ children }: TitleProps) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.primary500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.primary500,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
