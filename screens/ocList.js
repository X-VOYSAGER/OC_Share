import React from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ImageBackground, Dimensions, TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons"

const image = require("../assets/1237.jpg");
var OC = require("./tempCard.json")

export default class OcList extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.frontText}>
                            Lista de Personagens Registrados
                        </Text>

                    </View>
                    <View style={styles.searchBoxContainer}>
                        <TextInput

                        />
                        <TouchableOpacity>
                            <Ionicons name={"search"} size={RFValue(25)} color={"black"} style={styles.icons} />;
                        </TouchableOpacity>

                    </View>
                    <View style={styles.listContainer}>
                        <FlatList

                        />
                    </View>
                    <View style={styles.sideContainer}>
                        <TouchableOpacity>
                            <Text>
                                A
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

            </View>

        )

    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    image: {
        flex: 1,
        justifyContent: "center",
        resizeMode: "cover",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: "center",
    },
    frontText: {
        flex: 1,
        paddingRight: 250,

    },
    titleContainer: {


    },
    searchBoxContainer: {


    },
    searchBoxInput: {


    },
    searchBoxButton: {


    },
    listContainer: {


    },
    sideContainer: {


    },
    sideButton: {


    },
    icons: {
        width: RFValue(30),
        height: RFValue(30)
      }
})

