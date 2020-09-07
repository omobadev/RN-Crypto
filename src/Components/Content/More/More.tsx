// PLUGINS IMPORTS //
import React from "react"
import { StyleSheet } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import MainContainer from "./Screens/Main/MainContainer"
import ReferalLinkScreenContainer from "./Screens/ReferalLinkScreen/ReferalLinkScreenContainer"
import TechSupportScreenContainer from "./Screens/TechSupportScreen/TechSupportScreenContainer"
import DialogItemContainer from "~/Components/Content/Dialogs/Screens/DialogItem/DialogItemContainer"

// EXTRA IMPORTS //

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
          headerTintColor: "#00392D",
          title: "Меню",
          headerTitleAlign: "center",
        })}
      />

      <Stack.Screen
        name="TechSupportScreen"
        component={TechSupportScreenContainer}
        options={({ navigation, route }: any) => ({
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            fontSize: 18,
          },
          headerTintColor: "#00392D",
          title: "Техническая поддержка",
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
          headerTintColor: "#00392D",
          title: "Реферальная ссылка",
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
          headerTintColor: "#00392D",
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
