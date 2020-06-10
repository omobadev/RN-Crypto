// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import Body from "./Body/Body"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Main: React.FC<PropsType> = (props) => {
  return (
    <View>
      <Header />
      <Body />
    </View>
  )
}

const styles = StyleSheet.create({})

export default Main
