// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import Dialogs from "./Dialogs/Dialogs"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  usersList: Array<any>
  DialogsChatsList: Array<any>

  getUsersListThunkCreator: () => void
  createNewDialogThunkCreator: (
    selectedUsersIDs: Array<any>,
    chatTitle: string,
    message: string
  ) => void
  getDialogsChatsListThunkCreator: () => void
}

const Main: React.FC<PropsType> = (props) => {
  const [queryValue, setQueryValue] = useState("" as string)
  const [filteredUsers, setFilteredUsers] = useState([] as Array<any>)

  useEffect(() => {
    setFilteredUsers(
      queryValue
        ? props.usersList
            .filter(
              (l) =>
                l.id.toLowerCase().indexOf(queryValue.trim().toLowerCase()) ===
                0
            )
            .map((l) => l)
        : []
    )
  }, [queryValue])

  useEffect(() => {
    props.getUsersListThunkCreator()
  }, [])

  console.log(filteredUsers)

  return (
    <View style={styles.container}>
      <Header
        navigation={props.navigation}
        createNewDialogThunkCreator={props.createNewDialogThunkCreator}
        queryValue={queryValue}
        setQueryValue={setQueryValue}
      />
      <Dialogs
        navigation={props.navigation}
        filteredUsers={filteredUsers}
        DialogsChatsList={props.DialogsChatsList}
        setQueryValue={setQueryValue}
        createNewDialogThunkCreator={props.createNewDialogThunkCreator}
        getDialogsChatsListThunkCreator={props.getDialogsChatsListThunkCreator}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Main
