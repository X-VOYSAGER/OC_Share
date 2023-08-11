import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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
                    <View style={[styles.fieldContainer, { height: "100%" }]}>
                        <Text style={[styles.fieldText, { width: 60 }]}>
                            Extra:
                        </Text>
                        <TextInput style={[styles.textInput, { width: "83.6%" }]}
                            multiline={true}
                            numberOfLines={10}
                            placeholder="Extra"
                        />
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <Text>
                        Imagem
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            Publicar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        )

    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ded5d5",
        marginBottom: 10
    },
    upperContainer: {
        flex: 0.25,
        //backgroundColor: "red",
        justifyContent: "space-between",
        borderBottomWidth: 5,
        borderLeftWidth: 5,
        alignItems: "flex-start",
        padding: 5
    },
    lowerContainer: {
        flex: 0.33,
        //backgroundColor: "green",
        borderBottomWidth: 5,
        borderLeftWidth: 5,
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: 5

    },
    imageContainer: {
        flex: 0.33,
        //backgroundColor: "blue",
        borderBottomWidth: 5,
        borderLeftWidth: 5,
        padding: 5

    },
    textInput: {
        //backgroundColor: "blue",
        width: "75%",
        borderWidth: 1,
        textAlign: "left",
        textAlignVertical: "top",
        padding: 5,
        paddingLeft: 8
    },
    fieldText: {
        width: 100,
        fontSize: 22
    },
    fieldContainer: {
        flexDirection: "row",
        //justifyContent: "space-evenly",
        width: "100%",
        //backgroundColor: "blue",
    },
    buttonContainer: {
        flex: 0.15,
        //backgroundColor: "blue",
        borderBottomWidth: 5,
        borderLeftWidth: 5,
        padding: 5,
        justifyContent: "flex-start",
        alignItems: "center"

    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        backgroundColor: "#880b11",
        width: 100,
        padding: 5,
        borderRadius: 50
    },

    buttonText: {
        color: "#FFFFFF"


    },



})
