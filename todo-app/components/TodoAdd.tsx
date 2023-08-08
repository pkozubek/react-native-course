import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    borderColor: "red",
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  container: {
    marginTop: 8,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "40%",
    marginHorizontal: "5%",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 32,
  },
});

export interface ITodoAdd {
  addItem: (textVal: string) => void;
}

function TodoAdd({ addItem }: ITodoAdd) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const handleTextChange = (text: string) => {
    setInputVal(text);
  };

  const toggleModal = () => {
    setModalVisible((currentlyVisible) => !currentlyVisible);
  };

  const onKeyPress = () => {
    addItem(inputVal);
    setInputVal("");
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <Button title="Add item" onPress={toggleModal} color={"red"} />
      <Modal visible={isModalVisible}>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/target.png")}
            style={styles.image}
          />
          <TextInput
            style={styles.input}
            placeholder="What you need to do?"
            onChangeText={handleTextChange}
            value={inputVal}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                disabled={!inputVal}
                title="Add todo"
                onPress={onKeyPress}
                color={"red"}
              />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={toggleModal} color={"red"} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default TodoAdd;
