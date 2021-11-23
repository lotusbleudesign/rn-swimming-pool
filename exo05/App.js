import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { ColoredSquare } from './coloredsquare.component';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: '#f7f7f7',
    marginHorizontal: 25,
  },

});


export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.scrollView}>
        <ColoredSquare></ColoredSquare>
      </ScrollView>
    </SafeAreaView>
  );
}
