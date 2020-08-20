// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import UserListItem from "./UserListItem/UserListItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  usersList: Array<any>
  selectedUserID: string | null
  setSelectedUserID: (newSelectedUserID: string | null) => void
}

const UsersList: React.FC<PropsType> = (props) => {
  return (
    <ScrollView style={styles.container}>
      {props.usersList.map((user: any) => {
        return (
          <UserListItem
            userName={user.id}
            selectedUserID={props.selectedUserID}
            onPress={() => props.setSelectedUserID(user.id)}
          />
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: -6,
    height: 260,
  },
})

export default UsersList
