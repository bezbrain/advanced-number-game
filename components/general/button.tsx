import React from "react";
import { Text, View } from "react-native";

interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default Button;
