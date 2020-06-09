// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  textStyle?: any
  buttonStyle?: any

  text: string
}

const Button: React.FC<PropsType> = (props) => {
  return (
    <View style={{ ...styles.container, ...props.buttonStyle }}>
      <Text style={{ ...styles.text, ...props.textStyle }}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#006F5F",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: 206,
    height: 35,
  },

  text: {
    color: "#F2F2F2",
    fontSize: 16,
  },
})

export default Button
