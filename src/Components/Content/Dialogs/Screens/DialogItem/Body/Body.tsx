// PLUGINS IMPORTS //
import React from "react"
import { View, ScrollView, Text, Image, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  messages: Array<any>
  userName: string
  avatar: string
}

const Body: React.FC<PropsType> = (props) => {
  return (
    <ScrollView>
      {props.messages.map((message: any) => {
        return (
          <View style={!message.senderMe && styles.container}>
            {!message.senderMe && (
              <View style={styles.img_wrap}>
                <Image
                  style={styles.img_wrap}
                  source={require("~/Images/default-avatar.png")}
                />
                <Text style={styles.letter}>{props.userName.charAt(0)}</Text>
              </View>
            )}
            <View
              style={
                message.senderMe ? styles.message_me : styles.message_friend
              }
            >
              <Text
                style={message.senderMe ? styles.text_me : styles.text_friend}
              >
                {message.text}
              </Text>
              <Text style={styles.time}>{message.time}</Text>
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  img_wrap: {
    marginLeft: 5,
    width: 37,
    height: 37,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  letter: {
    paddingLeft: 5,
    position: "absolute",
    fontSize: 20,
    color: "#F2F2F2",
  },

  text_me: {
    color: "#00392D",
  },

  text_friend: {
    color: "#F2F2F2",
  },

  message_me: {
    maxWidth: 270,
    alignSelf: "flex-end",
    backgroundColor: "#DADADA",
    padding: 11,
    borderRadius: 10,
    marginBottom: 35,
    marginRight: 16,
    borderBottomRightRadius: 0,
  },

  message_friend: {
    maxWidth: 270,
    alignSelf: "flex-start",
    backgroundColor: "#006F5F",
    padding: 11,
    borderRadius: 10,
    marginBottom: 35,
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
