import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./tabNavigator";
import OcInfo from "../screens/ocInfo";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="OC Info" component={OcInfo} />
    </Stack.Navigator>
  );
}