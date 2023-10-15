import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class Pixel extends React.Component {
    state = {backgroundColor:"white"}
    changeColor(color) {
        this.setState({backgroundColor: color})
        console.log(this.state.backgroundColor)
    }
    render() {
        return (
            <TouchableOpacity onPress={() => this.changeColor(this.props.color)} >
                <View style={[styles.square, {backgroundColor:this.state.backgroundColor}]} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    square: {
      width: 33,
      height: 33,
      borderStyle: "solid",
      borderWidth: .5,
      borderColor: "#A4A7A7",
      cursor: 'pointer',
    },
});