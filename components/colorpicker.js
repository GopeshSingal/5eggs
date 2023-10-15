import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Canvas from "./canvas";
import Color from "./color";
import ColorPicker from "react-native-wheel-color-picker";

export default function Pallet() {
    const [color, setColor] = useState('');

    const onColorChange = color => {
      setColor(color);
    };
    return (
        <View style={styles.pallet}>
            <Canvas color={color}/>
            <ColorPicker
                color={color}
                onColorChange={(color) => onColorChange(color)}
                onColorChangeComplete={color => console.log(`${color}`)}
                thumbSize={30}
                sliderSize={30}
                noSnap={true}
                row={false}
                />
        </View>
    ); 
}

const styles = StyleSheet.create({
    pallet: {
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
    colors1: {
        paddingVertical: 20,
    },
    colors2: {
        paddingVertical: 5,
    }
});
