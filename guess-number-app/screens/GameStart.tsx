import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

import CustomButton from "../components/CustomButton";

import { colors } from "../utils/colors";
import sharedStyles from "../utils/sharedStyles";

const styles = StyleSheet.create({
  input: {
    borderColor: "white",
    borderBottomWidth: 2,
    color: "white",
    paddingBottom: 4,
    fontSize: 48,
    marginVertical: 32,
    width: 120,
    height: 80,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

type IUserNumberSelectionProps = {
  selectNumber: (selectedValue: number) => void;
};

function UserNumberSelection({ selectNumber }: IUserNumberSelectionProps) {
  const [value, setValue] = useState<null | number>(null);

  const onInputChange = (val: string) => {
    if (!val && val !== "0") setValue(null);

    const parsetStr = parseFloat(val);
    if (!isNaN(parsetStr)) setValue(parsetStr);
  };

  const onCancel = () => {
    setValue(null);
  };

  const onAlertConfirm = () => {
    setValue(null);
  };

  const onConfirmClick = () => {
    if (value !== null && value > 0 && value < 100) selectNumber(value);
    else
      Alert.alert(
        "Wrong number",
        "Your number should be higher than 0 lower than 100",
        [{ text: "Ok", style: "default", onPress: onAlertConfirm }]
      );
  };

  const isButtonDisabled = value === null;

  return (
    <View style={sharedStyles.container}>
      <Text style={sharedStyles.header}>Please, pick your number:</Text>
      <Text style={sharedStyles.subHeader}>
        (Value should be between 0 and 100)
      </Text>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        maxLength={3}
        autoFocus={true}
        value={value !== null ? value.toString() : ""}
        onChangeText={onInputChange}
      />
      <View style={sharedStyles.buttonContainer}>
        <CustomButton
          buttonColor={colors.white}
          onPress={onCancel}
          textColor={colors.black}
          title="Cancel"
        />
        <CustomButton
          buttonColor={colors.lightGreen}
          onPress={onConfirmClick}
          textColor={colors.black}
          title="Confirm"
          isDisabled={isButtonDisabled}
        />
      </View>
    </View>
  );
}

export default UserNumberSelection;
