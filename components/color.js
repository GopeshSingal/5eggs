import React from "react";
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity } from "react-native";

export default class Color extends React.Component {
    state={color:"white"}
    render() {
        const {selectedColor} = this.props
        return (
            <View style={[styles.square, {backgroundColor:this.props.color}]} />
        )
    }
}

const styles = StyleSheet.create({
    square: {
      width: 30,
      height: 30,
      borderRadius: 100,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "black",
      cursor: 'pointer',
    },
});