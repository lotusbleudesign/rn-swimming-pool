import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import DrawerItems from './share/DrawerItems'

// icon : https://icons.expo.fyi/MaterialIcons/settings
const Root = createStackNavigator()
const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  screen: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  text: { fontSize: 16, fontWeight: '700' },
  itemStyle: { marginVertical: 10 },

})

const ExercicesScreen = ({ route }) => {
  return (
    <View style={styles.screen} >
      <Text style={styles.text}> Profile Screen</Text>
    </View>
  )
}

const SettingsScreen = ({ route }) => {
  return (
    <View style={styles.screen} >
      <Text style={styles.text}> Profile Screen</Text>
    </View>
  )
}

const ProfileScreen = ({ route }) => {
  return (
    <View style={styles.screen} >
      <Text style={styles.text}> Profile Screen</Text>
    </ View >
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="front"
        initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 10 },
        }}
      >
        {DrawerItems.map(drawer =>
          <Drawer.Screen
            key={drawer.name}
            name={drawer.name}
            options={{
              drawerIcon: ({ focused }) => {
                switch (drawer.iconType) {
                  case 'MaterialCommunity':
                    return (
                      < MaterialCommunityIcons name={drawer.iconName} size={24} color={focused ? "#e91e63" : "black"} />)
                  case 'AntDesign':
                    return (
                      <AntDesign name={drawer.iconName} size={24} color={focused ? "#e91e63" : "black"} />)
                  case 'Material':
                    return (
                      <MaterialIcons name={drawer.iconName} size={24} color={focused ? "#e91e63" : "black"} />)
                }
              }
            }}
            component={
              drawer.name === 'Profile' ? ProfileScreen
                : drawer.name === 'Settings' ? SettingsScreen
                  : drawer.name === 'Saved Items' ? ExercicesScreen : ProfileScreen}
          />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}