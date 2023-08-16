import { View } from "react-native";

type IUserSuggestion = {
  computerValue: number | null;
};

function UserSuggestion({ computerValue }: IUserSuggestion) {
  if (!computerValue) return <View></View>;

  return <View></View>;
}

export default UserSuggestion;
