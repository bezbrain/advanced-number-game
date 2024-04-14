import { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { GameOver, GameScreen, StartGameScreens } from "./screens";
import { Colors } from "./components/helpers";

const App = () => {
  const [isNumber, setIsNumber] = useState<string>("");
  const [isStartGame, setIsStartGame] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const { accent500, primary500 } = Colors;

  // FONT IMPORT SETUP
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={[accent500, primary500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/number-game.jpg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.bgImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            {!isStartGame && (
              <StartGameScreens
                setIsStartGame={setIsStartGame}
                isNumber={isNumber}
                setIsNumber={setIsNumber}
              />
            )}

            {isStartGame && !isGameOver && (
              <GameScreen isNumber={isNumber} setIsGameOver={setIsGameOver} />
            )}

            {isGameOver && <GameOver />}
          </SafeAreaView>
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
