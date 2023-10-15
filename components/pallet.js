import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, Pressable, Button, Dimensions, useWindowDimensions } from "react-native";
import Canvas from "./canvas";
import ColorPicker from "react-native-wheel-color-picker";
import ViewShot from 'react-native-view-shot';

export default function Pallet() {

    var width = Dimensions.get('window').width; //full width    
    const ScreenWidth = Dimensions.get('window').width;
    const ref = useRef();
    const [color, setColor] = useState('');

    const onColorChange = color => {
      setColor(color);
    };
    return (
        <View style={styles.pallet}>
            <View style={[styles.header, {width:width}]}>
                <Text style={styles.titleText}>5crambled</Text>
                <Text style={{paddingVertical:5}}>Theme: Cute Kittens</Text>
            </View>
            <View style={styles.editor}>
                <Canvas color={color}/>
                <ColorPicker
                    style={styles.colorpicker}
                    color={color}
                    onColorChange={(color) => onColorChange(color)}
                    onColorChangeComplete={color => console.log(`${color}`)}
                    thumbSize={30}
                    sliderSize={30}
                    noSnap={true}
                    row={false}
                    />
            </View>
        </View>
    ); 
}

const styles = StyleSheet.create({
    pallet: {
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
    editor: {
        flexDirection:"row",
        paddingTop:20,
    },
    colorpicker:{
        paddingHorizontal: 150,
        paddingBottom: 100,
    },
    header: {
        // height: "auto",
        flex: 1,
        alignSelf:"stretch", 
        alignContent: "center",
        alignItems: "center",
        paddingVertical:25,
        backgroundColor: "#f5f5f5",
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
});
