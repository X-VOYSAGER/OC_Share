import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/feed";
import OcCreate from "../screens/ocCreate";
import OcList from "../screens/ocList";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons"

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
    labeled={false}
    barStyle={styles.bottomTabStyle}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Feed') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'OC Create') {
          iconName = focused ? 'create' : 'create-outline';
        }
       else if (route.name === 'OC List') {
        iconName = focused ? 'list' : 'list-outline';
      }


        // You can return any component that you like here!
        return <Ionicons name={iconName} size={RFValue(25)} color={color} style={styles.icons} />;
      },
    })}
    activeColor={"#EE8249"}
    inactiveColor={"gray"}
  >
    
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="OC Create" component={OcCreate} />
      <Tab.Screen name="OC List" component={OcList} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#000080",
    height: "8%",
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

