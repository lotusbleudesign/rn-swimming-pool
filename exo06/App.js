import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

const styles = StyleSheet.create({
  root: {
    margin: 5,
    alignItems: 'center',

  },
  line: {
    flexDirection: 'row',

  },
  underline: {
    borderBottomWidth: 1,
  }
});


export default function App() {
  const [text, setText] = useState('')
  return (
    <View style={styles.root}>
      <View style={styles.line}>
        <TextInput
          style={styles.underline}
          value={text}
          placeholder="Enter a destination"
          onChangeText={(text) => {
            setText(text)
          }}
        />
        <Text> Add</Text>
      </View>
      <Text style={{ fontSize: 24 }}>
        {'\n'}{text}
      </Text>
    </View>
  );
}
