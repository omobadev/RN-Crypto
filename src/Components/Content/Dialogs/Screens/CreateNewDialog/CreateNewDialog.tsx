// PLUGINS IMPORTS //
import React, { useEffect, useState } from "react"
import { ScrollView, TouchableOpacity, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import UserItem from "./UserItem/UserItem"

// EXTRA IMPORTS //
import { AntDesign } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  UsersList: Array<any>

  getUsersListThunkCreator: () => void
  createNewDialogThunkCreator: (usersList: Array<any>) => void
}

const CreateNewDialog: React.FC<PropsType> = (props) => {
  const [selectedUsersIDs, setSelectedUsersIDs] = useState([] as Array<any>)

  useEffect(() => {
    props.getUsersListThunkCreator()
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {props.UsersList.map((user: any) => {
        return (
          <UserItem
            user={user}
            isSelected={selectedUsersIDs.includes(user.id)}
            onPress={() => {
              selectedUsersIDs.includes(user.id)
                ? setSelectedUsersIDs(
                    selectedUsersIDs.filter((userID: any) => userID !== user.id)
                  )
                : setSelectedUsersIDs(selectedUsersIDs.concat(user.id))
            }}
          />
        )
      })}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.createNewDialogThunkCreator(selectedUsersIDs)
          props.navigation.goBack()
        }}
      >
        <AntDesign name="check" size={24} color="white" />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
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
