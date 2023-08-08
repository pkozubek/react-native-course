import { View, Text, StyleSheet, Pressable } from "react-native";
import { IListItem } from "../interfaces";
import { colors } from "../helpers";

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 4,
    flexBasis: 0.5,
    backgroundColor: "red",
    borderRadius: 8,
  },
  listItemText: {
    padding: 8,
    color: "white",
  },
  rippleEffect: {
    color: colors.darkRed,
    borderRadius: 8,
  },
});

function ListItem({ removeItem, ...itemData }: IListItem) {
  const onItemPress = () => {
    removeItem(itemData.id);
  };

  return (
    <View key={itemData.id} style={styles.listItem}>
      <Pressable android_ripple={styles.rippleEffect} onPress={onItemPress}>
        <Text style={styles.listItemText}>{itemData.text}</Text>
      </Pressable>
    </View>
  );
}

export default ListItem;
