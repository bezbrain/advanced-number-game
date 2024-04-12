import { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GameScreen, StartGameScreens } from "./screens";

const App = () => {
  const [isStartGame, setIsStartGame] = useState<boolean>(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient colors={["#ddb52f", "#53253c"]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/images/number-game.jpg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.bgImage}
        >
          {isStartGame ? (
            <GameScreen />
          ) : (
            <StartGameScreens setIsStartGame={setIsStartGame} />
          )}
        </ImageBackground>
      </LinearGradient>
    </TouchableWithoutFeedback>
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
