import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ExpenseContainer = ({ expenseItem }) => {
  return (
    <Pressable>
      <View style={styles.itemContainer}>
        <View style={styles.overview}>
          <Text style={styles.textStyle}>{expenseItem.title}</Text>
          <Text>{expenseItem.date.toUTCString().slice(5, 16)}</Text>
        </View>
        <Text style={styles.textStyle}>${expenseItem.amount}</Text>
      </View>
    </Pressable>
  );
};

export default ExpenseContainer;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E195AB",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginVertical: 3,
    borderRadius: 12,
  },
  overview: {
    gap: 4,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
