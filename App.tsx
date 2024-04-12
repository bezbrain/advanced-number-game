import { StyleSheet, View } from "react-native";
import StartGameScreens from "./screens/startGameScreens";

const App = () => {
  return (
    <View style={styles.rootScreen}>
      <StartGameScreens />
    </View>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
});

export default App;
