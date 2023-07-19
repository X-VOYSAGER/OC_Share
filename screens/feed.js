import React from "react";
import { Text, View, StyleSheet } from "react-native";
import OcCard from "../components/ocCard";

var OC = require("./tempCard.json")

export default class Feed extends React.Component {
    render() {
        return (
            <View>
                <OcCard/>
                <OcCard/>
            </View>

        )

    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }

})