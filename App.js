import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Pallet from './components/pallet';
import Pixel from './components/pixel';
import Color from './components/color';

export default function App() {
  const [color, setColor] = useState(styles.container.backgroundColor);
  return (
    <SafeAreaView  style={styles.container}>
      <Pallet/>
    </SafeAreaView  >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    alignItems: 'center',
  },
});
