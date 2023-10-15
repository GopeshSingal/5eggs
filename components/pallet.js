import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Canvas from "./canvas";
import Color from "./color";

export default class Pallet extends React.Component {
    state={pixelColor:"white"}
    changeColor(color) {
        this.setState({pixelColor: color})
        console.log(this.state.pixelColor);
    }
    render() {
        return (
            <View style={styles.pallet}>
                <Canvas color={this.state.pixelColor}/>
                <View style={[{flexDirection:"row"}, styles.color1]}>
                    <Pressable onPress={() => this.changeColor("red")}>
                        <Color color="red"/>
                    </Pressable>
                    <Pressable onPress={() => this.changeColor("orange")}>
                        <Color color="orange"/>
                    </Pressable>
                    <Pressable onPress={() => this.changeColor("yellow")}>
                        <Color color="yellow"/>
                    </Pressable>
                </View>
                <View style={[{flexDirection:"row"}, styles.colors2]}>
                    <Pressable onPress={() => this.changeColor("green")}>
                        <Color color="green"/>
                    </Pressable>
                    <Pressable onPress={() => this.changeColor("blue")}>
                        <Color color="blue"/>
                    </Pressable>
                    <Pressable onPress={() => this.changeColor("purple")}>
                        <Color color="purple"/>
                    </Pressable>
                </View>
          </View>
        );
    }
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
