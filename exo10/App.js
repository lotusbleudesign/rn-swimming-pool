
import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import Geolocation from '@react-native-community/geolocation'

export default function App() {
  const [position, setPosition] = useState(null);

  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.text}>Latitude: {position ? position.coords.latitude : ''} </Text>
        <Text style={styles.text}>Longitude: {position ? position.coords.longitude : ''} </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnSize}>
          <Button
            color="#555554"
            title="GET LOCATION"
            onPress={() => {
              Geolocation.getCurrentPosition(info => setPosition(info))
            }}
          />
        </TouchableOpacity>
      </View>

      {/* <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnSize}>
          <Button
            color="#555554"
            title="RESET LOCATION"
            onPress={() => {
              console.log("==> RESET LOCATION");
            }}
          />
        </TouchableOpacity>
      </View> */}
    </View >
  )
};
const styles = StyleSheet.create({
  root: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  text: {
    fontFamily: 'monospace', fontSize: 20
  },
  btnContainer: {
    width: "80%", margin: 10, backgroundColor: "#F73D24"
  },
});
