import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ListRenderItemInfo,
  Text,
} from "react-native";
import ListItem from "./components/ListItem";
import TodoAdd from "./components/TodoAdd";
import { ITodo } from "./interfaces";
import { generateTodo } from "./helpers";

export default function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addItem = (inputVal: string) => {
    setTodos((currentTodos) => [...currentTodos, generateTodo(inputVal)]);
  };

  const removeItem = (idToDelete: string) => {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== idToDelete)
    );
  };

  const listRenderer = ({ item }: ListRenderItemInfo<ITodo>) => {
    return <ListItem {...item} removeItem={removeItem} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>TYPICAL TODO APP!</Text>
      </View>
      <TodoAdd addItem={addItem} />
      <View style={styles.listContainer}>
        <FlatList data={todos} renderItem={listRenderer} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
  },
  headerText: {
    color: "red",
    fontSize: 18,
  },
  container: {
    flex: 1,
    padding: 8,
    marginTop: 32,
  },
  listContainer: {
    flex: 5,
    marginTop: 8,
    paddingHorizontal: 8,
  },
});
