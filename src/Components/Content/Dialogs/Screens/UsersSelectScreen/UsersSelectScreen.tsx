// PLUGINS IMPORTS //
import React, { useEffect, useState } from "react"
import { ScrollView, TouchableOpacity, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import UserItem from "~/Components/Shared/Components/UserItem/UserItem"
import SearchSection from "./SearchSection/SearchSection"

// EXTRA IMPORTS //
import { AntDesign } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any
  usersList: Array<any>

  getUsersListThunkCreator: () => void
}

const CreateNewDialog: React.FC<PropsType> = (props) => {
  const [selectedUsersIDs, setSelectedUsersIDs] = useState([] as Array<any>)
  const [queryValue, setQueryValue] = useState("" as string)
  const [filteredUsers, setFilteredUsers] = useState([] as Array<any>)

  useEffect(() => {
    props.getUsersListThunkCreator()
  }, [])

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

  return (
    <>
      <ScrollView style={styles.container}>
        <SearchSection value={queryValue} setValue={setQueryValue} />
        {filteredUsers &&
          filteredUsers.map((user: any) => {
            return (
              <UserItem
                id={user.id}
                avatar={user.avatar}
                isSelected={selectedUsersIDs.includes(user.id)}
                onPress={() => {
                  if (selectedUsersIDs.includes(user.id)) {
                    setSelectedUsersIDs(
                      selectedUsersIDs.filter(
                        (userID: any) => userID !== user.id
                      )
                    )
                  } else {
                    setSelectedUsersIDs(selectedUsersIDs.concat(user.id))
                  }
                }}
              />
            )
          })}
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.route.params.function(selectedUsersIDs)
        }}
      >
        <AntDesign name="check" size={24} color="white" />
      </TouchableOpacity>
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
