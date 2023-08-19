import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import { colors } from "../utils/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    padding: 8,
  },
  header: {
    color: "white",
    marginTop: 32,
    textAlign: "center",
    fontSize: 22,
  },
  subHeader: {
    fontSize: 14,
    color: colors.lightGreen,
    textAlign: "center",
    marginTop: 4,
  },
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
  buttonContainer: {
    width: "80%",
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
    console.log("val", parsetStr, !isNaN(parsetStr));

    if (!isNaN(parsetStr)) setValue(parsetStr);
  };

  const onCancel = () => {
    setValue(null);
  };

  const onAlertConfirm = () => {
    setValue(null);
  };

  const onConfirmClick = () => {
    if (value && value >= 0 && value <= 99) selectNumber(value);
    else
      Alert.alert("Wrong number", "Your number should be between 0 and 100", [
        { text: "Ok", style: "default", onPress: onAlertConfirm },
      ]);
  };

  const isButtonDisabled = !value && value !== 0;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Please, pick your number:</Text>
      <Text style={styles.subHeader}>(Value should be between 0 and 100)</Text>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        maxLength={3}
        autoFocus={true}
        value={value !== null ? value.toString() : ""}
        onChangeText={onInputChange}
      />
      <View style={styles.buttonContainer}>
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
