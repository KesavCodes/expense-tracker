import { Pressable, StyleSheet, View } from "react-native";
import Icon from "./Icon";

const AddExpense = () => {
  return (
    <View style={styles.iconHolder}>
      <Pressable style={({ pressed }) => pressed && styles.pressed}>
        <Icon name="add-circle-outline" size={28} />
      </Pressable>
    </View>
  );
};

export default AddExpense;

const styles = StyleSheet.create({
  iconHolder: {
    paddingRight: 10,
  },
  pressed: {
    opacity: 0.7,
  },
});
