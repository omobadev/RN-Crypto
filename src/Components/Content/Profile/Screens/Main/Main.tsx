// PLUGINS IMPORTS //
import React, { useEffect, useState } from "react"
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"

// COMPONENTS IMPORTS //
import AdminContent from "./AdminContent/AdminContent"
import NonAdminContent from "./NonAdminContent/NonAdminContent"
import { ActivityIndicator } from "react-native-paper"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any

  userID: string
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
  getUserCredentialsThunkCreator: (uid: string) => any
}

const Main: React.FC<PropsType> = (props) => {
  const [loading, setLoading] = useState(false as boolean)
  const routeUID = props.route.params.uid

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const uid = await AsyncStorage.getItem("uid")
      props
        .getUserCredentialsThunkCreator(routeUID ? routeUID : uid)
        .then(() => setLoading(false))
    }

    getData()
  }, [routeUID])

  const isAdmin = props.userID === props.UserCredentials.ID

  return (
    <>
      {loading ? (
        <View style={styles.loading_wrapper}>
          <ActivityIndicator color={"#006F5F"} />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.img_wrap}>
            {props.UserCredentials.avatar ? (
              <Image
                style={styles.img_wrap}
                source={{ uri: props.UserCredentials.avatar }}
              />
            ) : (
              <ImageBackground
                style={styles.img_wrap}
                source={require("~/Images/default-avatar.png")}
              >
                <Text style={styles.letter}>
                  {props.UserCredentials.name &&
                    String(props.UserCredentials.name.charAt(0))}
                </Text>
              </ImageBackground>
            )}
          </View>
          {isAdmin ? (
            <AdminContent userData={props.UserCredentials} />
          ) : (
            <NonAdminContent
              userData={props.UserCredentials}
              navigation={props.navigation}
              createNewDialogThunkCreator={props.createNewDialogThunkCreator}
            />
          )}
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 27,
    marginHorizontal: 20,
    flex: 1,
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

  loading_wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default Main
