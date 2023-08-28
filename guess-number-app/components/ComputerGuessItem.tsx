import { StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/colors";

type IComputerGuessItemProps = {
  value: number;
  order: number;
};

const styles = StyleSheet.create({
  view: {
    borderWidth: 2,
    borderColor: colors.lightGreen,
    marginBottom: 4,
    backgroundColor: colors.black,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 8,
    borderRadius: 8,
  },
  text: {
    color: colors.white,
  },
});

function ComputerGuessItem({ order, value }: IComputerGuessItemProps) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>#{order}</Text>
      <Text style={styles.text}>Computer guess: {value}</Text>
    </View>
  );
}

export default ComputerGuessItem;
