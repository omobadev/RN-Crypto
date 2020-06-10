// PLUGINS IMPORTS //
import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  password: string

  setPassword: (password: string) => void
}

const Footer: React.FC<PropsType> = (props) => {
  const removeDigit = () => {
    const newPassword = props.password.substring(0, props.password.length - 1)
    props.setPassword(newPassword)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={removeDigit}>
        <Text style={styles.text}>Удалить</Text>
      </TouchableOpacity>
      <TouchableOpacity>
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
  },
})

export default Footer
