import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";


export default class OcCard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.ocImage}
                        source={require("../assets/naosei.jpg")}
                    />
                </View>
                <View style={styles.lowerContainer}>


                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            Alfredo
                        </Text>
                        <Text style={styles.text}>
                            Carlos
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.seeMoreButton}>
                        <Text style={styles.seeMoreText}>
                            Ver Mais
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        )

    }

}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2
    },
    textContainer: {


    },
    seeMoreButton: {


    },
    seeMoreText: {


    },
    imageContainer: {
        borderWidth: 2,
        height: 200

    },
    lowerContainer: {
        borderWidth: 2



    },
    ocImage: {
        resizeMode: "cover",
        height: "100%",
    },
    text: {



    },
})