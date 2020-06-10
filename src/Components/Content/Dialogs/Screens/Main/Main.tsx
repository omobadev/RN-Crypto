// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Main: React.FC<PropsType> = (props) => {
  return (
    <View>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({})

export default Main
