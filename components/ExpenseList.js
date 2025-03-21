import { FlatList, StyleSheet, View } from "react-native";
import ExpenseContainer from "./ExpenseContainer";

const ExpenseList = ({ expenseData }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={expenseData}
        keyExtractor={expenseData.title}
        renderItem={({ item }) => <ExpenseContainer expenseItem={item} />}
      />
    </View>
  );
};

export default ExpenseList;

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 20,
        paddingTop: 4,
        marginBottom: 115,
    }
})