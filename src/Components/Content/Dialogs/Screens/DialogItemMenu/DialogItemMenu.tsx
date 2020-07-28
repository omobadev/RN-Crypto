// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, Text, View, StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any

  addUsersToChatThunkCreator: (newUsers: Array<any>, chatID: string) => void
}

const DialogItemMenu: React.FC<PropsType> = (props) => {
  const chatInfo = props.route.params.chatInfo

  const submitFunction = (selectedUsers: Array<any>) => {
    props.addUsersToChatThunkCreator(selectedUsers, chatInfo.chatID)
    props.navigation.navigate("Dialogs")
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("UsersSelectScreen", {
            function: submitFunction,
            title: "Меню чата",
          })
        }
      >
        <Text>Добавить участника</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default DialogItemMenu
