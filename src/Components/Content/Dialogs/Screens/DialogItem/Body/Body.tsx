// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { TextInput } from "react-native-paper"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  messages: Array<any>

  avatar: string
}

const Body: React.FC<PropsType> = (props) => {
  return (
    <>
      {props.messages.map((message: any) => {
        return (
          <View
            style={message.senderMe ? styles.message_me : styles.message_friend}
          >
            <Text
              style={message.senderMe ? styles.text_me : styles.text_friend}
            >
              {message.text}
            </Text>
            <Text style={styles.time}>{message.time}</Text>
          </View>
        )
      })}
    </>
  )
}

const styles = StyleSheet.create({
  text_me: {
    color: "#00392D",
  },

  text_friend: {
    color: "#F2F2F2",
  },

  message_me: {
    alignSelf: "flex-end",
    backgroundColor: "#DADADA",
    padding: 20,
    borderRadius: 10,
    marginBottom: 35,
    marginRight: 16,
    borderBottomRightRadius: 0,
  },

  message_friend: {
    alignSelf: "flex-start",
    backgroundColor: "#006F5F",
    padding: 20,
    borderRadius: 10,
    marginBottom: 25,
    marginLeft: 16,
    borderTopLeftRadius: 0,
  },

  time: {
    position: "absolute",
    bottom: -21,
    left: 10,
    fontSize: 13,
    color: "#9E9E9E",
  },
})

export default Body
