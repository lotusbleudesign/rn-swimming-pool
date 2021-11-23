import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native'

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
  },
  button: {
    backgroundColor: "#DDDDDD",
    fontSize: 24
  }
});


export default function App() {
  const [text, setText] = useState('')
  const [add, setAdd] = useState('')
  const onPress = () => setAdd(text);

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
        <TouchableHighlight onPress={onPress} >
          <View style={styles.button}>
            <Text> Add</Text>
          </View>
        </TouchableHighlight >
      </View>

      <Text
        multiline
        numberOfLines={10}
      >
        {'\n'}{add}
      </Text>
    </View >
  );
}
