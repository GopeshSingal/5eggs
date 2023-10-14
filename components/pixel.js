import React from "react";
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity } from "react-native";

export default class Pixel extends React.Component {
    render() {
        
        return (
            <TouchableOpacity>
                <View style={styles.square} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    square: {
      width: 30,
      height: 30,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "black",
      cursor: 'pointer',
    },
});