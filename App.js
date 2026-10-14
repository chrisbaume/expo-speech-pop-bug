import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Speech from "expo-speech"

export default function App() {
  const runTest = () => {
    Speech.speak("Something is wrong")
  }
  return (
    <View style={styles.container}>
      <Button onPress={runTest} title='Run test' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
