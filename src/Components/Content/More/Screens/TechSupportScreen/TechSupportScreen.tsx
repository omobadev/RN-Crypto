// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import ChatBody from "~/Components/Content/Dialogs/Screens/DialogItem/Body/Body"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  TechSupportChat: any

  getTechSupportChatThunkCreator: () => void
  sendTechChatMessageThunkCreator: (message: string) => void
}

const TechSupportScreen: React.FC<PropsType> = (props) => {
  useEffect(() => {
    props.getTechSupportChatThunkCreator()
  }, [])

  console.log(props.TechSupportChat)

  return (
    <View style={styles.container}>
      <ChatBody
        navigation={props.navigation}
        currentChatMessages={props.TechSupportChat}
        sendMessage={(message: string) =>
          props.sendTechChatMessageThunkCreator(message)
        }
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

export default TechSupportScreen
