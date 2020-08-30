// PLUGINS IMPORTS //
import React, { useEffect, useRef } from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Body from "./Body/Body"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  route: any
  navigation: any
  currentChatMessages: Array<any>

  sendMessageThunkCreator: (
    message: string,
    images: Array<string>,
    chatID: string
  ) => void
  getCurrentChatMessagesThunkCreator: (chatID: string) => void
}

const DialogItem: React.FC<PropsType> = (props) => {
  const chatID = props.route.params.chatInfo.chatID
  useEffect(() => {
    props.getCurrentChatMessagesThunkCreator(chatID)
  }, [])

  const sendMessage = (message: string, images: Array<any>) => {
    if (message && message?.length > 0) {
      props.sendMessageThunkCreator(message as string, images, chatID)
    }
  }

  return (
    <View style={styles.container}>
      <Body
        navigation={props.navigation}
        sendMessage={sendMessage}
        currentChatMessages={props.currentChatMessages}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
  },
})

export default DialogItem
