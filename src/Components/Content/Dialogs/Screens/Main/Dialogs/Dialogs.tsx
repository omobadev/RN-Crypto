// PLUGINS IMPORTS //
import React, { useEffect, useState } from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import LineDialogItem from "./LineDialogItem/LineDialogItem"
import UserItem from "~/Components/Shared/Components/UserItem/UserItem"

import DialogsInputPopup from "~/Components/Shared/Components/Popups/DialogsInputPopup/DialogsInputPopup"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  filteredUsers: Array<any>
  DialogsChatsList: Array<any>
  setQueryValue: (newQueryValue: string) => void
  createNewDialogThunkCreator: (
    selectedUsersIDs: Array<any>,
    chatTitle: string,
    message: string
  ) => void
  getDialogsChatsListThunkCreator: () => void
}

const Dialogs: React.FC<PropsType> = (props) => {
  const [newDialogPopupData, setNewDialogPopupData] = useState({
    visible: false as boolean,
    userID: null as string | null,
  })

  useEffect(() => {
    props.getDialogsChatsListThunkCreator()
  }, [])

  const submitNewChat = (values: any) => {
    props.createNewDialogThunkCreator(
      [newDialogPopupData.userID],
      values.title,
      values.message
    )
    setNewDialogPopupData({ visible: false, userID: null })
    props.setQueryValue("")
  }

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {props.filteredUsers && props.filteredUsers.length > 0
          ? props.filteredUsers.map((user: any) => {
              return (
                <UserItem
                  id={user.id}
                  avatar={user.avatar}
                  removeSelection
                  onPress={() =>
                    setNewDialogPopupData({ visible: true, userID: user.id })
                  }
                />
              )
            })
          : props.DialogsChatsList &&
            props.DialogsChatsList.length > 0 &&
            props.DialogsChatsList.map((dialog: any) => {
              return (
                <LineDialogItem navigation={props.navigation} dialog={dialog} />
              )
            })}
      </ScrollView>

      <DialogsInputPopup
        popupVisible={newDialogPopupData.visible}
        setPopupVisible={(popupVisibility: boolean) =>
          setNewDialogPopupData({
            visible: popupVisibility,
            userID: newDialogPopupData.userID,
          })
        }
        onSubmit={submitNewChat}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
  },
})

export default Dialogs
