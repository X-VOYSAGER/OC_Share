import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class OcCard extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    OC Card
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