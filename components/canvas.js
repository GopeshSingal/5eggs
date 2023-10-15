import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Row from "./row";

export default class Canvas extends React.Component {
    render() {
        let row = [];

        for (let i = 0; i < 16; i++) {
            row.push(<Row color={this.props.color} key={i}/>);
        }
        return (
            <View style={styles.canvas}> {row} </View>
        )
    }
}

const styles = StyleSheet.create({
    canvas: {
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "black",
      cursor: 'pointer',
    },
});
