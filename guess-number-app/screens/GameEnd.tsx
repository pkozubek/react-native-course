import { Text, View, StyleSheet, Image } from "react-native";

import CustomButton from "../components/CustomButton";

import sharedStyles from "../utils/sharedStyles";
import { colors } from "../utils/colors";

type IGameEndProps = {
  reset: () => void;
  numberOfGuesses: number;
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 32,
  },
  header: {
    marginVertical: 32,
  },
  question: {
    fontSize: 26,
    marginTop: 16,
  },
  imageWrapper: {
    overflow: "hidden",
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 16,
    borderWidth: 2,
    borderColor: colors.lightGreen,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

function GameEnd({ reset, numberOfGuesses }: IGameEndProps) {
  return (
    <View style={sharedStyles.container}>
      <Text style={[sharedStyles.header, styles.header]}>Game over!</Text>
      <View style={sharedStyles.alignContentCenter}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={require("../assets/bg.jpg")} />
        </View>
      </View>
      <Text style={sharedStyles.normalText}>
        Computer needed{" "}
        <Text style={sharedStyles.subHeader}>{numberOfGuesses} guesses </Text>To
        find ur number
      </Text>
      <Text style={[sharedStyles.subHeader, styles.question]}>
        Want to try again?
      </Text>
      <View style={[sharedStyles.buttonContainer, styles.buttonContainer]}>
        <CustomButton
          buttonColor={colors.lightGreen}
          onPress={reset}
          textColor={colors.black}
          title="Try again"
        />
      </View>
    </View>
  );
}

export default GameEnd;
