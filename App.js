import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Pallet from './components/pallet';
import Pixel from './components/pixel';
import ColorWheels from './components/colorpicker';
import Color from './components/color';

export default function App() {
  const [color, setColor] = useState(styles.container.backgroundColor);
  return (
    <SafeAreaView  style={styles.container}>
      <Text >Hello React Native</Text>
      <Pallet/>
    </SafeAreaView  >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
