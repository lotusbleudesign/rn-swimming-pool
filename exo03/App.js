import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={{ padding: 10, fontSize: 42 }}>
        {count}
      </Text>
      <Button
        title="Button"
        onPress={() => setCount(count + 1)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CECECE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    color: '#841584'
  }
});
