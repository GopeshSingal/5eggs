import React, { useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import Row from "./row";
import { exportComponentAsPNG } from "react-component-export-image";

export default function Canvas(props) {
        let row = [];
        const ref = useRef();
        for (let i = 0; i < 16; i++) {
            row.push(<Row color={props.color} key={i}/>);
        }
        return (
            <View>
                <View style={styles.canvas} ref={ref}> 
                {row} 
                </View>
                <button onClick={() => exportComponentAsPNG(ref)}>
                Export as PNG
                </button>
            </View>
        )
}

const styles = StyleSheet.create({
    canvas: {
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "black",
      cursor: 'pointer',
    },
});
