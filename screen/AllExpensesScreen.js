import { View } from "react-native";
import ShowTotal from "../components/ShowTotal";
import ExpenseList from "../components/ExpenseList";
import { useSelector } from "react-redux";

const AllExpenses = () => {
  const expenseData = useSelector((state) => state.expenses.expenseData);
  return (
    <View>
      <ShowTotal expenseData={expenseData} />
      <ExpenseList
        expenseData={[...expenseData].sort((a, b) => b.date - a.date)}
      />
    </View>
  );
};

export default AllExpenses;
