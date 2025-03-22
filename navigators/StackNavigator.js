import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import AddExpenseScreen from "../screen/AddExpenseScreen";
import EditExpenseScreen from "../screen/EditExpenseScreen";
import AddExpense from "./../components/AddExpense";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#E195AB",
        },
        sceneStyle: {
          backgroundColor: "#fce2f4",
        },
      }}
    >
      <Stack.Screen
        name="ExpenseHome"
        component={TabNavigator}
        options={{
          headerRight: () => <AddExpense />,
          title: "Expense Tracker",
        }}
      />
      <Stack.Screen
        name="AddExpense"
        component={AddExpenseScreen}
        options={{ title: "Add Expense" }}
      />
      <Stack.Screen
        name="EditExpense"
        component={EditExpenseScreen}
        options={{ title: "Edit Expense" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
