// PLUGINS IMPORTS //
import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  number: string
  letters: string

  password: string
  setPassword: (password: string) => void
}

const NumItem: React.FC<PropsType> = (props) => {
  const setPassNumFn = () => {
    props.setPassword(props.password + props.number)
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.password.length < 6 ? setPassNumFn : (null as any)}
    >
      <Text style={styles.number}>{props.number}</Text>
      <Text style={styles.letters}>{props.letters}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 79,
    width: 79,
    borderColor: "#F2F2F2",
    borderWidth: 1,
    borderRadius: 100,
    marginHorizontal: 11.9,
    marginVertical: 12.4,
  },

  number: {
    color: "#F2F2F2",
    fontSize: 32,
  },

  letters: {
    fontSize: 14,
    color: "silver",
  },
})

export default NumItem
