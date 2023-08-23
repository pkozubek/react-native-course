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
import ContentWrapper from "../components/ContentWrapper";
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
          <ContentWrapper title="Your numer">
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
          </ContentWrapper>
          <ContentWrapper title="Computer guesses">
            <UserSuggestion
              lastComputerGuess={computerGuesses[computerGuesses.length - 1]}
              suggestBigger={suggestBigger}
              suggestSmaller={suggestSmaller}
            />
          </ContentWrapper>
          <Text style={styles.sectionHeader}>History</Text>
          <Text style={styles.sectionSubHeader}>
            Number of guesses: {computerGuesses.length}
          </Text>
          <FlatList
            data={computerGuesses.slice().reverse()}
            renderItem={renderItem}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
}

export default Game;
