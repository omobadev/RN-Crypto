// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native"

// COMPONENTS IMPORTS //
import AdminContent from "./AdminContent/AdminContent"
import NonAdminContent from "./NonAdminContent/NonAdminContent"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any

  UserCredentials: {
    ID: string
    name: string
    avatar: string
    login: string
    email: string
    location: string
    invitedID: string
  }

  createNewDialogThunkCreator: (
    selectedUsersIDs: Array<any>,
    chatTitle: string,
    message: string
  ) => void
  getUserCredentialsThunkCreator: () => void
}

const Main: React.FC<PropsType> = (props) => {
  useEffect(() => {
    props.getUserCredentialsThunkCreator()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.img_wrap}>
        {props.UserCredentials.avatar ? (
          <Image style={styles.img_wrap} source={{ uri: props.UserCredentials.avatar }} />
        ) : (
          <ImageBackground style={styles.img_wrap} source={require("~/Images/default-avatar.png")}>
            <Text style={styles.letter}>
              {props.UserCredentials.name && String(props.UserCredentials.name.charAt(0))}
            </Text>
          </ImageBackground>
        )}
      </View>
      {props.route.params.isAdmin ? (
        <AdminContent userData={props.UserCredentials} />
      ) : (
        <NonAdminContent
          userData={props.UserCredentials}
          navigation={props.navigation}
          createNewDialogThunkCreator={props.createNewDialogThunkCreator}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 27,
    marginHorizontal: 20,
  },

  img_wrap: {
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 1000,
    height: 130,
    width: 130,
  },

  letter: {
    fontSize: 99,
    color: "#F2F2F2",
    marginRight: "2%",
  },
})

export default Main
