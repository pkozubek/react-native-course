import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import { colors } from "../utils/colors";

type IUserSuggestionProps = {
  lastComputerGuess: null | number;
  suggestBigger: () => void;
  suggestSmaller: () => void;
};

const styles = StyleSheet.create({
  flexWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  guess: {
    flexBasis: "80%",
  },
  guessText: {
    color: colors.white,
    textAlign: "center",
    fontSize: 20,
  },
  button: {
    flexBasis: "10%",
  },
});

function UserSuggestion({
  lastComputerGuess,
  suggestBigger,
  suggestSmaller,
}: IUserSuggestionProps) {
  return (
    <View>
      {lastComputerGuess !== null ? (
        <View style={styles.flexWrapper}>
          <View style={styles.button}>
            <CustomButton
              buttonColor={colors.lightGreen}
              textColor={colors.black}
              onPress={suggestSmaller}
              title="-"
            />
          </View>
          <View style={styles.guess}>
            <Text style={styles.guessText}>{lastComputerGuess}</Text>
          </View>
          <View style={styles.button}>
            <CustomButton
              buttonColor={colors.lightGreen}
              textColor={colors.black}
              onPress={suggestBigger}
              title="+"
            />
          </View>
        </View>
      ) : null}
    </View>
  );
}

export default UserSuggestion;
