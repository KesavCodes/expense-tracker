import { View } from "react-native";
import { dummyData } from "../dummy_data/expense_data";
import ShowTotal from "../components/ShowTotal";
import ExpenseList from "../components/ExpenseList";

const AllExpenses = () => {
  return (
    <View>
      <ShowTotal expenseData={dummyData} />
      <ExpenseList expenseData={dummyData.sort((a, b) => b.date - a.date)} />
    </View>
  );
};

export default AllExpenses;
