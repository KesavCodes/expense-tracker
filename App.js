import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpenses from "./screen/RecentExpensesScreen";
import AllExpenses from "./screen/AllExpensesScreen";
import Icon from "./components/Icon";
import AddExpense from "./components/AddExpense";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerRight: () => <AddExpense />,
            headerStyle: {
              backgroundColor: "#E195AB",
            },
            sceneStyle: {
              backgroundColor: "#fce2f4",
            },
            tabBarStyle: {
              backgroundColor: "#D45D79",
              height: 60,
            },
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "black",
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: "500",
            }
          }}
        >
          <Tab.Screen
            name="recentExpenses"
            component={RecentExpenses}
            options={{
              title: "Recent Expenses",
              tabBarIcon: ({ color, size }) => (
                <Icon color={color} size={size} name="time-outline" />
              ),
            }}
          />
          <Tab.Screen
            name="allExpenses"
            component={AllExpenses}
            options={{
              title: "All Expenses",
              tabBarIcon: ({ color, size }) => (
                <Icon color={color} size={size} name="calendar-outline" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
