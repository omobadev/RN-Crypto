// PLUGINS IMPORTS //
import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  password: string

  setPassword: (password: string) => void
  callbackFn: any
}

const Footer: React.FC<PropsType> = (props) => {
  const removeDigit = () => {
    const newPassword = props.password.substring(0, props.password.length - 1)
    props.setPassword(newPassword)
  }

  const sendRequest = () => {
    if (props.password.length === 6) {
      props.callbackFn(props.password)
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={removeDigit}>
        <Text style={styles.text}>Удалить</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => sendRequest()}>
        <Text style={styles.text}>ОК</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "75%",
    marginTop: 100,
  },

  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
})

export default Footer
