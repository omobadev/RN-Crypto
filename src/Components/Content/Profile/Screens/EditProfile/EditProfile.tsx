// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import Body from "./Body/Body"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const EditProfile: React.FC<PropsType> = (props) => {
  const userData = {
    ID: "2099321234",
    name: "Дарья Иванова",
    login: "IvanovаDR",
    email: "IvanovaDR@gmail.com",
    location: "Россия, Москва",
    invitedID: "2099321234",
  }

  return (
    <View style={styles.container}>
      <Header />
      <Body userData={userData} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 17,
  },
})

export default EditProfile
