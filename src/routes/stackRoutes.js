import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Search from "../pages/Search";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ title: "Detalhe da receita" }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ title: "Veja oque encontramos" }}
      />
    </Stack.Navigator>
  );
}
