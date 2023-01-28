import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {Home} from "../screens/Home";
import { New } from "../screens/New";
import { Habit } from "../screens/Habit";

export function AppRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="New"
        component={New}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Habit"
        component={Habit}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
