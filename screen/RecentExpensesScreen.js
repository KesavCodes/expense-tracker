import { View } from "react-native";
import ShowTotal from "../components/ShowTotal";
import ExpenseList from "../components/ExpenseList";
import { useSelector } from "react-redux";

const RecentExpenses = () => {
  const expenseData = useSelector((state) => state.expenses.expenseData);
  const currentDate = new Date();
  const startDate = new Date(
    new Date(new Date().setDate(new Date().getDate() - 7)).setUTCHours(
      0,
      0,
      0,
      0
    )
  );
  const recentExpenseDate = expenseData
    .filter((item) => item.date >= startDate && item.date <= currentDate)
    .sort((a, b) => b.date - a.date);

  return (
    <View>
      <ShowTotal expenseData={recentExpenseDate} />
      <ExpenseList expenseData={recentExpenseDate} />
    </View>
  );
};

export default RecentExpenses;
