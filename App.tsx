import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreens from "./screens/startGameScreens";

const App = () => {
  return (
    <LinearGradient colors={["#ddb52f", "#53253c"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/number-game.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.bgImage}
      >
        <StartGameScreens />
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.15,
  },
});

export default App;
