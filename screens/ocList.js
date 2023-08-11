import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class OcList extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style= {styles.frontText}>
                    Lista de Personagens Registrados
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
        backgroundColor:"#c8c0e7",
    },
    frontText: {
        flex: 1,
        paddingRight: 250,
        
    }
})