import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, TextInput } from "react-native";

interface InputFieldProps {
  numberValue: string;
  setIsNumber: Dispatch<SetStateAction<string>>;
}

const InputField = ({ numberValue, setIsNumber }: InputFieldProps) => {
  const handleNumberInputChange = (inputValue: string) => {
    // console.log(inputValue);
    setIsNumber(inputValue);
  };

  return (
    <TextInput
      keyboardType="number-pad"
      style={styles.numberInput}
      maxLength={2}
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={handleNumberInputChange}
      value={numberValue}
    />
  );
};

export default InputField;

const styles = StyleSheet.create({
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
