// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import Body from "./Body/Body"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  UserCredentials: {
    ID: string
    name: string
    avatar: string
    login: string
    email: string
    location: string
    invitedID: string
  }

  uploadAvatarThunkCreator: (avatar: string) => void
}

const EditProfile: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Header
        userData={props.UserCredentials}
        uploadAvatarThunkCreator={props.uploadAvatarThunkCreator}
      />
      <Body userData={props.UserCredentials} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 17,
  },
})

export default EditProfile
