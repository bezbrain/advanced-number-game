import { Alert } from "react-native";

export const errorMessage = (
  msgHeader: string,
  msgDetails: string,
  msgText: string,
  msgFunct: () => void
) => {
  Alert.alert(msgHeader, msgDetails, [
    { text: msgText, style: "destructive", onPress: msgFunct },
  ]);
};
