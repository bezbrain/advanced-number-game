import React from "react";
import { Dimensions, Platform, StyleSheet, Text, View } from "react-native";
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

const deviceWidth = Dimensions.get("window").width;
const isAndroid = Platform.OS === "android";

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: deviceWidth > 360 ? 20 : 18,
    color: Colors.primary500,
    textAlign: "center",
    borderWidth: isAndroid ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: Colors.primary500,
    paddingVertical: 12,
    maxWidth: "80%",
    width: 300,
  },
});
