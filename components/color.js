import React from "react";
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity } from "react-native";

export default class Color extends React.Component {
    render() {
        const {selectedColor} = this.props
        return (
            <TouchableOpacity>
                <View style={[styles.square, styles.backgroundColor=selectedColor]}  />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    square: {
      width: 30,
      height: 30,
      borderRadius: 10,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "black",
      backgroundColor: "green",
      cursor: 'pointer',
    },
});