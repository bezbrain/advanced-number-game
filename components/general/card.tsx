import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../helpers";

interface CardProp {
  children: ReactNode;
}

const Card = ({ children }: CardProp) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 48,
    // marginHorizontal: 24,
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
