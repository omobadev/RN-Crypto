// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Body: React.FC<PropsType> = (props) => {
  return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 17,
  },
})

export default Body
