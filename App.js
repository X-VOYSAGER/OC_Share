import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigations/drawerNavigator";
import Login from "./screens/login";

export default function App() {
  return (
   <NavigationContainer>
      <DrawerNavigator/>
   </NavigationContainer>
  );
}
