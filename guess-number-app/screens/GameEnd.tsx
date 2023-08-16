import { Text, View, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
  },
});

type IGameEndProps = {
  reset: () => void;
  numberOfGuesses: number;
};

function GameEndScreen({ reset, numberOfGuesses }: IGameEndProps) {
  return (
    <View>
      <Text style={styles.header}>Game over!</Text>
      <View>
        <Text>Computer needed</Text>
        <Text>{numberOfGuesses} guesses</Text>
        <Text>To find ur number</Text>
        <Text>Want to try again?</Text>
        <Button title="Try again" onPress={reset} />
      </View>
    </View>
  );
}

export default GameEndScreen;
