import { View } from "react-native";
import { dummyData } from "../dummy_data/expense_data";
import ShowTotal from "../components/ShowTotal";
import ExpenseList from '../components/ExpenseList';

const RecentExpenses = () => {
  const currentDate = new Date();
  const startDate = new Date(
    new Date(new Date().setDate(new Date().getDate() - 7)).setUTCHours(
      0,
      0,
      0,
      0
    )
  );
  const recentExpenseDate = dummyData.filter(
    (item) => item.date >= startDate && item.date <= currentDate
  ).sort((a,b)=>b.date-a.date);
  return (
    <View>
      <ShowTotal expenseData={recentExpenseDate} />
      <ExpenseList expenseData={recentExpenseDate}/>

    </View>
  );
};

export default RecentExpenses;
