import React from "react";
import { Text, View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import OcCard from "../components/ocCard";

const image = require("../assets/1237.jpg");

var OC = require("./tempCard.json")



export default class Feed extends React.Component {
    render() {
        return (
            <View style={styles.container}>
               <ImageBackground source={image} style={styles.image}>
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
      
       
    },
    image: {
        flex: 1,
        justifyContent: "center",
        resizeMode: "cover",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: "center",
    },
})