import { Button, FlatList, ListRenderItemInfo, Text, View } from "react-native";

import Background from "../components/Background";
import UserSuggestion from "../components/UserSuggestion";
import ComputerGuessItem from "../components/ComputerGuessItem";

type IGame = {
  computerGuesses: number[];
  reset: () => void;
  suggestNumber: (isBigger: boolean) => void;
  userNumber: number;
};

function Game({ computerGuesses, reset, suggestNumber, userNumber }: IGame) {
  const suggestBigger = () => {
    suggestNumber(true);
  };

  const suggestSmaller = () => {
    suggestNumber(false);
  };

  const renderItem = (item: ListRenderItemInfo<number>) => {
    return <ComputerGuessItem order={item.index} value={item.item} />;
  };

  return (
    <Background>
      <View>
        <Button title="reset" onPress={reset} />
        <UserSuggestion
          lastComputerGuess={computerGuesses[computerGuesses.length - 1]}
          suggestBigger={suggestBigger}
          suggestSmaller={suggestSmaller}
          userNumber={userNumber}
        />
        <View>
          <FlatList data={computerGuesses} renderItem={renderItem} />
        </View>
      </View>
    </Background>
  );
}

export default Game;
