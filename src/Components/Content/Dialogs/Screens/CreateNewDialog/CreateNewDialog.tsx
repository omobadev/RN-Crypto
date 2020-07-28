// PLUGINS IMPORTS //
import React, { useEffect, useState } from "react"
import { ScrollView, TouchableOpacity, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import UserItem from "./UserItem/UserItem"
import DialogsInputPopup from "~/Components/Shared/Components/Popups/DialogsInputPopup/DialogsInputPopup"

// EXTRA IMPORTS //
import { AntDesign } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  usersList: Array<any>

  getUsersListThunkCreator: () => void
  createNewDialogThunkCreator: (usersList: Array<any>) => void
}

const CreateNewDialog: React.FC<PropsType> = (props) => {
  const [selectedUsersIDs, setSelectedUsersIDs] = useState([] as Array<any>)
  const [popupVisible, setPopupVisible] = useState(false as boolean)

  useEffect(() => {
    props.getUsersListThunkCreator()
  }, [])

  const onSubmit = (values: any) => {
    props.createNewDialogThunkCreator(selectedUsersIDs)
    props.navigation.goBack()
  }

  return (
    <>
      <ScrollView style={styles.container}>
        {props.usersList.map((user: any) => {
          return (
            <UserItem
              id={user.id}
              isSelected={selectedUsersIDs.includes(user.id)}
              onPress={() => {
                selectedUsersIDs.includes(user.id)
                  ? setSelectedUsersIDs(
                      selectedUsersIDs.filter(
                        (userID: any) => userID !== user.id
                      )
                    )
                  : setSelectedUsersIDs(selectedUsersIDs.concat(user.id))
              }}
            />
          )
        })}
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setPopupVisible(true)
        }}
      >
        <AntDesign name="check" size={24} color="white" />
      </TouchableOpacity>

      <DialogsInputPopup
        popupVisible={popupVisible}
        setPopupVisible={setPopupVisible}
        onSubmit={onSubmit}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    position: "absolute",
    bottom: 27,
    right: 27,
    backgroundColor: "#00392D",
    height: 55,
    width: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
})

export default CreateNewDialog
