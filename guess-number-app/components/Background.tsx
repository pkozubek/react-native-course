import { ImageBackground, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../utils/colors";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.3,
  },
});

type IBackground = {
  children: JSX.Element;
};

function Background({ children }: IBackground) {
  return (
    <LinearGradient
      style={styles.wrapper}
      colors={[colors.white, colors.veryLightGreen]}
    >
      <ImageBackground
        resizeMode="cover"
        style={styles.wrapper}
        imageStyle={styles.bgImage}
        source={require("../assets/bg.jpg")}
      >
        {children}
      </ImageBackground>
    </LinearGradient>
  );
}

export default Background;
