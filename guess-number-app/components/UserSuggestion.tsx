import { Text, View } from "react-native";
import CustomButton from "./CustomButton";
import { colors } from "../utils/colors";

type IUserSuggestionProps = {
  lastComputerGuess: null | number;
  suggestBigger: () => void;
  suggestSmaller: () => void;
  userNumber: number;
};

function UserSuggestion({
  lastComputerGuess,
  userNumber,
  suggestBigger,
  suggestSmaller,
}: IUserSuggestionProps) {
  return (
    <View>
      <Text>Your number: {userNumber}</Text>
      {lastComputerGuess !== null ? (
        <View>
          <View>
            <CustomButton
              buttonColor={colors.lightGreen}
              textColor={colors.black}
              onPress={suggestSmaller}
              title="-"
            />
          </View>
          <Text>Last computer guess: {lastComputerGuess}</Text>
          <View>
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
