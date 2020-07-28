// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, Keyboard, TextInput, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { FontAwesome } from "@expo/vector-icons"
import { BorderlessButton } from "react-native-gesture-handler"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  chatID: string

  sendMessageThunkCreator: (message: string, chatID: string) => void
}

const BottomInput: React.FC<PropsType> = (props) => {
  const [message, setMessage] = useState(null as string | null)

  const sendMessage = () => {
    props.sendMessageThunkCreator(message as string, props.chatID)
    setMessage(null)
    Keyboard.dismiss()
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Введите сообщение"
        placeholderTextColor="rgba(0, 57, 45, 0.4)"
        onChangeText={(text: string) => setMessage(text)}
        value={message as string}
        style={styles.input}
      />
      <BorderlessButton style={styles.send_icon} onPress={sendMessage}>
        <FontAwesome name="send-o" size={20} color="#006F5F" />
      </BorderlessButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginTop: 7,
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
