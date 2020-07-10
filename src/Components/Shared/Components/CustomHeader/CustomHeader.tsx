// PLUGINS IMPORTS //
import React from "react"
import { Text, TouchableOpacity, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  title: string

  rightIcon?: any
  leftIcon?: any
}

const CustomHeader: React.FC<PropsType> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>{props.leftIcon}</TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>

      {props.rightIcon}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 23,
    marginTop: 14,
  },

  title: {
    color: "#F2F2F2",
    fontSize: 19,
    fontWeight: "bold",
  },
})

export default CustomHeader
