import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Colors } from "../helpers";

interface InputFieldProps {
  isNumber: string;
  setIsNumber: Dispatch<SetStateAction<string>>;
}

const InputField = ({ isNumber, setIsNumber }: InputFieldProps) => {
  // HANDLE CHANGE OF THE INPUT FIELD
  const handleNumberInputChange = (inputValue: string) => {
    // Regular expression to allow only numbers
    const regex = /^[0-9]*$/;
    if (!regex.test(isNumber)) {
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
      value={isNumber}
    />
    // </TouchableWithoutFeedback>
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
