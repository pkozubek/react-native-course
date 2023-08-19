import {
  Pressable,
  PressableAndroidRippleConfig,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "../utils/colors";

export type ICustomButtonProps = {
  title: string;
  textColor: string;
  buttonColor: string;
  onPress: () => void;
  isDisabled?: boolean;
};

const styles = StyleSheet.create({
  view: {
    elevation: 2,
    borderRadius: 32,
    marginVertical: 8,
    overflow: "hidden",
  },
  pressable: {
    padding: 8,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
  },
});

const andoridRippleEffect: PressableAndroidRippleConfig = {
  color: colors.lightGrey,
};

function CustomButton({
  buttonColor,
  onPress,
  textColor,
  title,
  isDisabled = false,
}: ICustomButtonProps) {
  return (
    <View style={styles.view}>
      <Pressable
        style={{
          ...styles.pressable,
          backgroundColor: buttonColor,
          opacity: isDisabled ? 0.3 : 1,
        }}
        onPress={onPress}
        disabled={isDisabled}
        android_ripple={andoridRippleEffect}
      >
        <Text style={{ ...styles.text, color: textColor }}>{title}</Text>
      </Pressable>
    </View>
  );
}

export default CustomButton;
