// PLUGINS IMPORTS //
import React, { useRef } from "react"
import { ScrollView } from "react-native"

// COMPONENTS IMPORTS //
import MessageItem from "./MessageItem/MessageItem"
import BottomInput from "./BottomInput/BottomInput"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  sendMessage: (newMessage: string, images: Array<any>) => void
  currentChatMessages: Array<any>
}

const Body: React.FC<PropsType> = (props) => {
  let scrollView = useRef(null) as any

  return (
    <>
      <ScrollView
        ref={(ref) => (scrollView = ref)}
        onContentSizeChange={() => scrollView.scrollToEnd({ animated: true })}
        showsVerticalScrollIndicator={false}
      >
        {props.currentChatMessages.reverse().map((message: any) => {
          return <MessageItem message={message} navigation={props.navigation} />
        })}
      </ScrollView>
      <BottomInput sendMessage={props.sendMessage} />
    </>
  )
}

export default Body
