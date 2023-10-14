import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';
import CustomText from './components/customtext';
import Pixel from './components/pixel';
import Row from './components/row';
import Canvas from './components/canvas';
import Pallet from './components/pallet';

export default function App() {
  // console.log(require("./assets/icon.png"));
  return (
    <SafeAreaView  style={styles.container}>
      <Text>Hello React Native</Text>
      <Pallet selectedColor={"white"}/>
      {/* <Pixel></Pixel> */}
    </SafeAreaView  >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
