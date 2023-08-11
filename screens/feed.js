import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import OcCard from "../components/ocCard";

const image = {uri: "../assets/1237.jpg"};

var OC = require("./tempCard.json")



export default class Feed extends React.Component {
    render() {
        return (
            <View style={styles.container}>
               <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <OcCard />
            
                <OcCard />
                </ImageBackground>
            </View>

        )
    
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        ImageBackground: "../assets/1237.jpg"
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
})