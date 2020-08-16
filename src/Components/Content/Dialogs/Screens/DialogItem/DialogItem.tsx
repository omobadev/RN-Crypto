// PLUGINS IMPORTS //
import React, { useEffect, useRef } from "react"
import { ScrollView, View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import MessageItem from "./MessageItem/MessageItem"
import BottomInput from "./BottomInput/BottomInput"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  route: any
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

  let scrollView = useRef(null) as any

  return (
    <View style={styles.container}>
      <ScrollView
        ref={(ref) => (scrollView = ref)}
        onContentSizeChange={() => scrollView.scrollToEnd({ animated: true })}
        showsVerticalScrollIndicator={false}
      >
        {props.currentChatMessages.reverse().map((message: any) => {
          return <MessageItem message={message} />
        })}
      </ScrollView>
      <BottomInput
        chatID={chatID}
        sendMessageThunkCreator={props.sendMessageThunkCreator}
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
