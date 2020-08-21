// PLUGINS IMPORTS //
import React from "react"
import { Text, TouchableOpacity, StyleSheet } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import MainContainer from "./Screens/Main/MainContainer"
import ReferalLinkScreenContainer from "./Screens/ReferalLinkScreen/ReferalLinkScreenContainer"
import TarifsScreenContainer from "./Screens/TarifsScreen/TarifsScreenContainer"
import DialogItemContainer from "~/Components/Content/Dialogs/Screens/DialogItem/DialogItemContainer"

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const More: React.FC<PropsType> = (props) => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName="MoreMain">
      <Stack.Screen
        name="MoreMain"
        component={MainContainer}
        options={({ navigation, route }: any) => ({
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#00392D",
          },
          title: "Меню",
          headerTitleAlign: "center",
        })}
      />

      <Stack.Screen
        name="ReferalLinkScreen"
        component={ReferalLinkScreenContainer}
        options={({ navigation, route }: any) => ({
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#00392D",
          },
          title: "Реферальная ссылка",
          headerTitleAlign: "center",
        })}
      />

      <Stack.Screen
        name="TarifsScreen"
        component={TarifsScreenContainer}
        options={({ navigation, route }: any) => ({
          headerRight: () => (
            <TouchableOpacity style={styles.right_icon}>
              <Feather name="info" size={24} color="#00392D" />
            </TouchableOpacity>
          ),
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#00392D",
          },
          title: "Тарифы",
          headerTitleAlign: "center",
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
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  right_icon: {
    marginRight: 20,
  },
})

export default More
