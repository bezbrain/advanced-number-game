import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreens from "./screens/startGameScreens";

const App = () => {
  return (
    <LinearGradient colors={["#ddb52f", "#53253c"]} style={styles.rootScreen}>
      <StartGameScreens />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: "#ddb52f",
  },
});

export default App;
