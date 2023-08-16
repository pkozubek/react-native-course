import { StyleSheet, Text, TextInput, View } from "react-native";
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
    if (!val) setValue(null);

    const parsetStr = parseFloat(val);

    if (!isNaN(parsetStr)) setValue(parsetStr);
  };

  const onCancel = () => {
    setValue(null);
  };

  const onConfirmClick = () => {
    if (value) selectNumber(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Please, pick your number:</Text>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        maxLength={3}
        autoFocus={true}
        value={!!value ? value.toString() : ""}
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
          isDisabled={!value}
        />
      </View>
    </View>
  );
}

export default UserNumberSelection;
