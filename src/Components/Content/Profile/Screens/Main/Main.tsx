// PLUGINS IMPORTS //
import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import AdminContent from "./AdminContent/AdminContent"
import NonAdminContent from "./NonAdminContent/NonAdminContent"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any
}

const Main: React.FC<PropsType> = (props) => {
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
      <Image
        style={styles.avatar}
        source={require("../../../../../Images/avatar.png")}
      />
      {!props.route.params.isAdmin ? (
        <AdminContent userData={userData} />
      ) : (
        <NonAdminContent userData={userData} navigation={props.navigation} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 27,
    marginHorizontal: 20,
  },

  avatar: {
    alignSelf: "center",
    borderRadius: 1000,
    height: 150,
    width: 150,
  },

  content: {
    marginTop: 50,
  },

  bold_text: {},
})

export default Main
