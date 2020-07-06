// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, TouchableOpacity, Image, StyleSheet } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import MainContainer from "./Screens/Main/MainContainer"
import Settings from "./Screens/Settings/Settings"
import EditProfileContainer from "./Screens/EditProfile/EditProfileContainer"
import DialogItemContainer from "~/Components/Content/Dialogs/Screens/DialogItem/DialogItemContainer"

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Profile: React.FC<PropsType> = (props) => {
  const [isAdmin, setIsAdmin] = useState(false as boolean)
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName="ProfileMain">
      <Stack.Screen
        name="ProfileMain"
        component={MainContainer}
        options={({ navigation, route }: any) => ({
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#00392D",
          },
          headerRight: () =>
            isAdmin ? (
              <View style={styles.icons_wrap}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("EditProfile")}
                >
                  <Image
                    style={styles.icon}
                    source={require("~/Images/Icons/icon-edit.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ProfileSettings")}
                >
                  <Feather name="settings" size={24} color="#006F5F" />
                </TouchableOpacity>
              </View>
            ) : null,
          title: "Профиль",
          headerTitleAlign: isAdmin ? "left" : "center",
        })}
        initialParams={{
          isAdmin: isAdmin,
        }}
      />
      <Stack.Screen
        name="ProfileSettings"
        component={Settings}
        options={({ navigation, route }: any) => ({
          headerShown: false,
        })}
      />

      <Stack.Screen
        name="DialogItem"
        component={DialogItemContainer}
        options={({ navigation, route }: any) => ({
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#00392D",
          },
          title: route.params.userName,
          headerTitleAlign: "center",
        })}
        initialParams={{
          userName: null as string | null,
          avatar: null as string | null,
        }}
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfileContainer}
        options={({ navigation, route }: any) => ({
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#00392D",
          },
          title: route.params.userName,
          headerTitleAlign: "center",
        })}
        initialParams={{
          userName: null as string | null,
          avatar: null as string | null,
        }}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  icons_wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 70,
    marginRight: 15,
  },

  icon: {
    width: 25,
    height: 25,
    resizeMode: "center",
  },
})

export default Profile
