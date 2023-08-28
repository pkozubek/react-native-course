import {
  Pressable,
  PressableAndroidRippleConfig,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { colors } from "../utils/colors";

export type ICustomButtonProps = {
  title?: string;
  textColor: string;
  buttonColor: string;
  onPress: () => void;
  isDisabled?: boolean;
  iconName?: keyof typeof AntDesign.glyphMap;
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
    fontFamily: "open-sans-bold",
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
  iconName,
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
        {title && (
          <Text style={{ ...styles.text, color: textColor }}>{title}</Text>
        )}
        {iconName && <AntDesign name={iconName} size={18} color={textColor} />}
      </Pressable>
    </View>
  );
}

export default CustomButton;
