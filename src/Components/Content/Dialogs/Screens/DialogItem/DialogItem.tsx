// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Body from "./Body/Body"
import BottomInput from "./BottomInput/BottomInput"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  route: any
  currentChatMessages: Array<any>

  getCurrentChatMessagesThunkCreator: (chatID: string) => void
}

const DialogItem: React.FC<PropsType> = (props) => {
  useEffect(() => {
    const chatID = props.route.params.chatID
    props.getCurrentChatMessagesThunkCreator(chatID)
  }, [])

  return (
    <View style={styles.container}>
      <Body
        messages={props.currentChatMessages}
        userName={props.route.params.userName}
        avatar={props.route.params.avatar}
      />
      <BottomInput />
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
