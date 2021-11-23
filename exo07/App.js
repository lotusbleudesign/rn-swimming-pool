import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
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

});

const Screen1 = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>First page with button</Text>
    <Button
      color="#555554"
      title="Go to Screen 2"
      onPress={() => {
        navigation.push('Second')
      }}
    />
  </View>
)

const Screen2 = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Second page, click the arrow on the top </Text>
  </View>
)

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
