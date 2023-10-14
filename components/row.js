import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Pixel from "./pixel";

export default class Row extends React.Component {
    render() {
        let pixels = [];

        for (let i = 0; i < 10; i++) {
            pixels.push(<Pixel/>);
        }
        return (
            <View style={{flexDirection: "row"}}> {pixels} </View>
        )
    }
}
