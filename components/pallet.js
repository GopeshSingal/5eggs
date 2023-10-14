import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Canvas from "./canvas";
import Color from "./color";

export default class Pallet extends React.Component {
    render() {
        return (
            <View>
                <Canvas />
                <View style={{flexDirection:"row"}}>
                    <Color />
                    <Color />
                    <Color />
                </View>
                <View style={{flexDirection:"row"}}>
                    <Color />
                    <Color />
                    <Color />
                </View>
          </View>
        );
    }
}
