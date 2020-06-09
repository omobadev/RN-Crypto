// PLUGINS IMPORTS //
import React from "react"
import { Text, StyleSheet } from "react-native"
import { RectButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  textStyle?: any
  buttonStyle?: any

  text: string
  onPress?: () => void
}

const Button: React.FC<PropsType> = (props) => {
  return (
    <RectButton
      style={{ ...styles.container, ...props.buttonStyle }}
      onPress={props.onPress}
    >
      <Text style={{ ...styles.text, ...props.textStyle }}>{props.text}</Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#006F5F",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: 250,
    height: 35,
  },

  text: {
    color: "#F2F2F2",
    fontSize: 16,
  },
})

export default Button
