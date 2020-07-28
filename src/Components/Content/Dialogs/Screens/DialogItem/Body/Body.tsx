// PLUGINS IMPORTS //
import React from "react"
import { ScrollView } from "react-native"

// COMPONENTS IMPORTS //
import MessageItem from "./MessageItem/MessageItem"

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
        return <MessageItem message={message} />
      })}
    </ScrollView>
  )
}

export default Body
