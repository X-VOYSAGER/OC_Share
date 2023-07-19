import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/feed";
import OcCreate from "../screens/ocCreate";
import OcList from "../screens/ocList";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="OC Create" component={OcCreate} />
      <Tab.Screen name="OC List" component={OcList} />
    </Tab.Navigator>
  );
}