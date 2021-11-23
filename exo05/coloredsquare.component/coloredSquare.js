import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "#d8dae6",
    margin: 5,
  },
  rectangle: {
    width: 120 * 2,
    height: 100,
    backgroundColor: "#4a8594",
    margin: 10
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
})

const Square = () => {
  return (
    <View style={styles.square} />
  )
};

const MultipleSquare = () => {
  return (
    <View style={styles.row}>
      <View style={styles.square} />
      <View style={styles.square} />
      <View style={styles.square} />
    </View >
  )
};
const Rectangle = () => {
  return <View style={styles.rectangle} />;
};
export function ColoredSquare() {
  return (
    <View style={styles.root}>
      <Square></Square>
      <Rectangle></Rectangle>
      <MultipleSquare></MultipleSquare>
      <Rectangle></Rectangle>
      <Square></Square>
      <Rectangle></Rectangle>
      <Rectangle></Rectangle>
    </View>
  );
}