import { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GameScreen, StartGameScreens } from "./screens";
import { Colors } from "./components/helpers";

const App = () => {
  const [isNumber, setIsNumber] = useState<string>("");
  const [isStartGame, setIsStartGame] = useState<boolean>(false);

  const { accent500, primary500 } = Colors;

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
            {isStartGame ? (
              <GameScreen isNumber={isNumber} />
            ) : (
              <StartGameScreens
                setIsStartGame={setIsStartGame}
                isNumber={isNumber}
                setIsNumber={setIsNumber}
              />
            )}
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
