// PLUGINS IMPORTS //
import React from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { FontAwesome } from "@expo/vector-icons"
import { BorderlessButton } from "react-native-gesture-handler"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const BottomInput: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Введите сообщение"
        placeholderTextColor="rgba(0, 57, 45, 0.4)"
        style={styles.input}
      />
      <BorderlessButton style={styles.send_icon}>
        <FontAwesome name="send-o" size={20} color="#006F5F" />
      </BorderlessButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 0,
    left: 0,
  },

  input: {
    backgroundColor: "rgba(0, 57, 45, 0.1)",
    marginHorizontal: 16,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },

  send_icon: {
    position: "absolute",
    right: 25,
    marginTop: 4,
    padding: 10,
  },
})

export default BottomInput
