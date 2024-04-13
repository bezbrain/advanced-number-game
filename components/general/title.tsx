import React from "react";
import { StyleSheet, Text } from "react-native";

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
    color: "#53253c",
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#53253c",
    padding: 12,
  },
});
