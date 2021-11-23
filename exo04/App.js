import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { MyStyle } from './style.component/style-component'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    flex: 1,
    backgroundColor: "#4a8594",
  },
  container: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white"
  },
  footer: {
    flex: 1,
    backgroundColor: "black",
  },
  imageLogo: {
    height: 250,
    width: 250,
    position: 'absolute'
  }
});


export default function App() {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <MyStyle> Hello </MyStyle>
      </View>

      <View style={styles.container}>
        <Image source={require('./assets/snack-icon.png')} style={styles.imageLogo} />
      </View>

      <View style={styles.footer}>
        <MyStyle> Footer </MyStyle>
      </View>
    </View>
  );
}
