// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, Text, View, StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //
import UserItem from "~/Components/Shared/Components/UserItem/UserItem"

// EXTRA IMPORTS //
import { AntDesign } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any

  leaveChatThunkCreator: (chatID: string) => void
  addUsersToChatThunkCreator: (newUsers: Array<any>, chatID: string) => void
}

const DialogItemMenu: React.FC<PropsType> = (props) => {
  const chatInfo = props.route.params.chatInfo

  const submitFunction = (selectedUsers: Array<any>) => {
    props.addUsersToChatThunkCreator(selectedUsers, chatInfo.chatID)
    props.navigation.navigate("Dialogs")
  }

  return (
    <View>
      {chatInfo.users && (
        <ScrollView>
          {chatInfo.users.map((user: any) => {
            return <UserItem id={user.uLogin} />
          })}
        </ScrollView>
      )}
      <View style={styles.buttons_wrap}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#00392D" }]}
          onPress={() =>
            props.navigation.navigate("UsersSelectScreen", {
              function: submitFunction,
              title: "Меню чата",
            })
          }
        >
          <AntDesign name="plus" size={20} color="white" />
          <Text style={styles.button_text}>Добавить участника</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#db3236" }]}
          onPress={() => {
            props.leaveChatThunkCreator(chatInfo.chatID)
            props.navigation.navigate("Dialogs")
          }}
        >
          <Text style={styles.button_text}>Выйти из чата</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons_wrap: {
    marginTop: 20,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 85,
    borderRadius: 8,
    paddingVertical: 6,
    marginTop: 15,
  },

  button_text: {
    color: "white",
  },
})

export default DialogItemMenu
