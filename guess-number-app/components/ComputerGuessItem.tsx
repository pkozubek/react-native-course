import { Text, View } from "react-native";

type IComputerGuessItemProps = {
  value: number;
  order: number;
};

function ComputerGuessItem({ order, value }: IComputerGuessItemProps) {
  return (
    <View>
      <Text>#{order}</Text>
      <Text>#{value}</Text>
    </View>
  );
}

export default ComputerGuessItem;
