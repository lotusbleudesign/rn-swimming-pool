import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Root = createStackNavigator()

const styles = StyleSheet.create({
  screen: {
    marginTop: 40,
    alignItems: 'center',
  },
  title: {
    padding: 20,
    fontSize: 20,
  },
  input: {
    backgroundColor: "#E5E5E5",
    height: 30,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})

const Screen1 = ({ navigation }) => {
  const [state, setState] = useState({ text1: "", text2: "" })

  function setValue(name, value) {
    let obj = {}
    obj[name] = value
    setState(Object.assign({}, state, obj))
  }

  return (
    < View style={styles.screen} >
      <TextInput
        style={styles.input}
        onChangeText={text => setValue('text1', text)}
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setValue('text2', text)}
      />
      <br />
      <Button
        color="#555554"
        title="Send to Screen 2"
        onPress={() => {
          //console.log("text1", state.text1, "text2", state.text2)
          navigation.navigate('Second', { myValues: state })
        }}
      />
    </View >
  )
}

const Screen2 = ({ route }) => {
  const { myValues } = route.params;
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{myValues.text1}</Text>
      <Text style={styles.title}>{myValues.text2}</Text>
    </View>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="First" component={Screen1}
        />
        <Root.Screen name="Second" component={Screen2} onPress={() => {
          navigation.pop()
        }} />
      </Root.Navigator>
    </NavigationContainer>
  );
}
