import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Feed extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Feed
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