import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Logout extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Logout
                </Text>
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