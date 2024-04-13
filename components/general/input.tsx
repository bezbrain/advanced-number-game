import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Colors } from "../helpers";

interface InputFieldProps {
  numberValue: string;
  setIsNumber: Dispatch<SetStateAction<string>>;
}

const InputField = ({ numberValue, setIsNumber }: InputFieldProps) => {
  // HANDLE CHANGE OF THE INPUT FIELD
  const handleNumberInputChange = (inputValue: string) => {
    // Regular expression to allow only numbers
    const regex = /^[0-9]*$/;
    if (!regex.test(numberValue)) {
      console.log("Only number is accepted");
      return;
    }
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
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
