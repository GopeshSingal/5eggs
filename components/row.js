import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Pixel from "./pixel";

export default class Row extends React.Component {
    render() {
        let pixels = [];

        for (let i = 0; i < 16; i++) {
            pixels.push(<Pixel key={i} color={this.props.color}/>);
        }
        return (
            <View style={{flexDirection: "row"}}> {pixels} </View>
        )
    }
}
