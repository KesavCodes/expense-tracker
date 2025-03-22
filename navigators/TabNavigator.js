import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpenses from "../screen/RecentExpensesScreen";
import AllExpenses from "../screen/AllExpensesScreen";
import Icon from "../components/Icon";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#D45D79",
          height: 60,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "500",
        },
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
  );
};

export default TabNavigator;
