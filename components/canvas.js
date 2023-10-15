import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Row from "./row";

export default class Canvas extends React.Component {
    render() {
        let row = [];

        for (let i = 0; i < 10; i++) {
            row.push(<Row color={this.props.color} key={i}/>);
        }
        return (
            <View> {row} </View>
        )
    }
}
