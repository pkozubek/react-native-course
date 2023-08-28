import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Background from "../components/Background";
import UserSuggestion from "../components/UserSuggestion";
import ComputerGuessItem from "../components/ComputerGuessItem";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";

import { colors } from "../utils/colors";

type IGame = {
  computerGuesses: number[];
  reset: () => void;
  suggestNumber: (isBigger: boolean) => void;
  userNumber: number;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    marginTop: 32,
    flexBasis: "100%",
  },
  text: {
    color: colors.white,
    textAlign: "center",
    fontSize: 32,
    borderWidth: 2,
    borderColor: colors.lightGreen,
    borderRadius: 64,
  },
  halfOfScreen: {
    flexBasis: "50%",
  },
  flexWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionHeader: {
    textAlign: "center",
    fontSize: 24,
  },
  sectionSubHeader: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 8,
  },
  listWrapper: {
    flex: 1,
    padding: 16,
  },
});

function Game({ computerGuesses, reset, suggestNumber, userNumber }: IGame) {
  const suggestBigger = () => {
    suggestNumber(true);
  };

  const suggestSmaller = () => {
    suggestNumber(false);
  };

  const renderItem = (item: ListRenderItemInfo<number>) => {
    return (
      <ComputerGuessItem
        order={computerGuesses.length - item.index}
        value={item.item}
      />
    );
  };

  return (
    <Background>
      <SafeAreaView style={styles.root}>
        <View style={styles.viewContainer}>
          <Card title="Your numer">
            <View style={styles.flexWrapper}>
              <View style={styles.halfOfScreen}>
                <Text style={styles.text}>{userNumber}</Text>
              </View>
              <View style={styles.halfOfScreen}>
                <CustomButton
                  onPress={reset}
                  buttonColor={colors.lightGreen}
                  title="Reset"
                  textColor={colors.black}
                />
              </View>
            </View>
          </Card>
          <Card title="Computer guesses">
            <UserSuggestion
              lastComputerGuess={computerGuesses[computerGuesses.length - 1]}
              suggestBigger={suggestBigger}
              suggestSmaller={suggestSmaller}
            />
          </Card>
          <Text style={styles.sectionHeader}>History</Text>
          <Text style={styles.sectionSubHeader}>
            Number of guesses: {computerGuesses.length}
          </Text>
          <View style={styles.listWrapper}>
            <FlatList
              data={computerGuesses.slice().reverse()}
              keyExtractor={(item) => item.toString()}
              renderItem={renderItem}
            />
          </View>
        </View>
      </SafeAreaView>
    </Background>
  );
}

export default Game;
