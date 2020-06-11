// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Body from "./Body/Body"
import BottomInput from "./BottomInput/BottomInput"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  route: any
}

const DialogItem: React.FC<PropsType> = (props) => {
  const messages = [
    {
      text: "Привет, как дела?",
      time: "18:55",
      senderMe: false,
    },
    {
      text: "Привет, все замечательно, у тебя?",
      time: "19:55",
      senderMe: true,
    },
    {
      text: "Да так все потихоньку?",
      time: "20:51",
      senderMe: false,
    },
  ]

  return (
    <View style={styles.container}>
      <Body messages={messages} avatar={props.route.params.avatar} />
      <BottomInput />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
})

export default DialogItem
