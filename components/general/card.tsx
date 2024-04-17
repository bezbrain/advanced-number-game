import { ReactNode } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { Colors } from "../helpers";

interface CardProp {
  children: ReactNode;
}

const Card = ({ children }: CardProp) => {
  const { width, height } = useWindowDimensions();

  const marginTopDistance = height > 500 ? 48 : 16;
  const cardWidth = height > 500 ? "100%" : 400;

  return (
    <View
      style={[
        styles.card,
        { marginTop: marginTopDistance },
        { width: cardWidth },
      ]}
    >
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    elevation: 10,
    shadowColor: "red",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
  },
});
