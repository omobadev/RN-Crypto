// PLUGINS IMPORTS //
import React, { useEffect } from "react"
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
    props.navigation.goBack()
    props.navigation.goBack()
    props.navigation.navigate("Dialogs")
  }

  return (
    <ScrollView style={styles.wrapper}>
      {chatInfo.users && (
        <View>
          {chatInfo.users.map((user: any) => {
            console.log(user)
            return (
              <UserItem
                onPress={() =>
                  props.navigation.navigate("Profile", {
                    uid: user.uID,
                  })
                }
                removeSelection
                id={user.uLogin}
                avatar={user.avatar}
              />
            )
          })}
        </View>
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
          <AntDesign name="plus" size={20} color="white" style={styles.icon} />
          <Text style={styles.button_text}>Добавить участника</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#db3236" }]}
          onPress={() => {
            props.leaveChatThunkCreator(chatInfo.chatID)
            props.navigation.goBack()
            props.navigation.goBack()
          }}
        >
          <Text style={styles.button_text}>Выйти из чата</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
  },

  buttons_wrap: {
    marginTop: 20,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 85,
    borderRadius: 8,
    paddingVertical: 6,
    marginTop: 15,
  },

  button_text: {
    color: "white",
  },

  icon: {
    marginRight: 10,
  },
})

export default DialogItemMenu
