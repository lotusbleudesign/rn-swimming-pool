import React from 'react';
import { StyleSheet, Text } from 'react-native';

export function MyStyle(props) {
  return (
    <Text style={[styles.primary, props.style]}>{props.children}</Text>
  )
}

const styles = StyleSheet.create({
  primary: {
    color: '#FFFFFF',
    textAlign: 'center'
  }
})
