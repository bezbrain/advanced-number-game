import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Colors } from "../helpers";

interface GuessNumberItemProps {
  clickedTimes: number;
  randomNum: number;
}

const GuessNumberItem = ({ clickedTimes, randomNum }: GuessNumberItemProps) => {
  return (
    <View style={styles.numberItemContainer}>
      <Text style={styles.numberText}>#{clickedTimes}</Text>
      <Text style={styles.numberText}>Opponent picked: {randomNum}</Text>
    </View>
  );
};

export default GuessNumberItem;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  numberItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 3,
    borderColor: Colors.accent500,
    marginVertical: 4,
    borderRadius: 8,
    padding: 8,
    width: "100%",
  },
  numberText: {
    color: "#ffffff",
    fontSize: deviceWidth > 360 ? 20 : 16,
  },
});
