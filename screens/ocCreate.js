import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default class OcCreate extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.upperContainer}>
                    <View style={styles.fieldContainer}>
                        <Text style={styles.fieldText}>
                            Nome:
                        </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Nome:"
                        />
                    </View>
                    <View style={styles.fieldContainer}>
                        <Text style={styles.fieldText}>
                            Apelidos:
                        </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Apelidos:"
                        />
                    </View>
                    <View style={styles.fieldContainer}>
                        <Text style={styles.fieldText}>
                            Gênero:
                        </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Gênero:"
                        />
                    </View>
                    <View style={styles.fieldContainer}>
                        <Text style={styles.fieldText}>
                            Idade:
                        </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Idade:"
                        />
                    </View>
                </View>
                <View style={styles.lowerContainer}>
                    <View style={styles.fieldContainer}>
                        <Text style={styles.fieldText}>
                            Extra:
                        </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Extra:"
                            multiline= {true}
                            numberOfLines={10}
                        />
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <Text>
                        Não sei o que escrever aqui
                    </Text>
                </View>
            </View>

        )

    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ded5d5"
    },
    upperContainer: {
        flex: 0.25,
        //backgroundColor: "red",
        justifyContent: "space-between",
        borderBottomWidth: 5,
        borderLeftWidth: 5,
        alignItems: "flex-start"
    },
    lowerContainer: {
        flex: 0.33,
        //backgroundColor: "green",
        borderBottomWidth: 5,
        borderLeftWidth: 5,


    },
    imageContainer: {
        flex: 0.33,
        //backgroundColor: "blue",
        borderBottomWidth: 5,
        borderLeftWidth: 5,

    },
    textInput: {



    },
    fieldText: {
        width: 100,
        fontSize: 22

    },
    fieldContainer: {
        flexDirection: "row",
        //justifyContent: "space-evenly",
        width: "80%"
    },
})