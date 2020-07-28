// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import UserListItem from "./UserListItem/UserListItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const usersList: React.FC<PropsType> = (props) => {
  return (
    <ScrollView style={styles.container}>
      <UserListItem userName="DaryaIvanova" />
      <UserListItem userName="DaryaIvanova" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: -6,
  },
})

export default usersList
