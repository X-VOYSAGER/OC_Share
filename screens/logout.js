import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Logout extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.button}>
                 Deslogar?
                </Text>
                
            </View>
            
        )

    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6540f7"
    },
    button: {
        backgroundColor: "#880b11",
        width: 100,
        padding: 5,
        borderRadius: 50,
        borderWidth: 2
    },
})




