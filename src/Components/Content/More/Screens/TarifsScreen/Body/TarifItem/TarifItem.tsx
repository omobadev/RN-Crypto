// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet, ImageBackground } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const TarifItem: React.FC<PropsType> = (props) => {
  return <ImageBackground style={styles.container}></ImageBackground>
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 17,
  },
})

export default TarifItem
