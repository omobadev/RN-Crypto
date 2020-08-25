// PLUGINS IMPORTS //
import React from "react"
import { StyleSheet } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import MainContainer from "./Screens/Main/MainContainer"
import DialogItemContainer from "./Screens/DialogItem/DialogItemContainer"
import DialogMenuItemContainer from "./Screens/DialogItemMenu/DialogItemMenuContainer"
import { BorderlessButton } from "react-native-gesture-handler"

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Dialogs: React.FC<PropsType> = (props) => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName="DialogsMain">
      <Stack.Screen
        name="DialogsMain"
        component={MainContainer}
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
          headerRight: () => (
            <BorderlessButton
              style={styles.icon}
              onPress={() =>
                navigation.navigate("DialogMenuItem", {
                  chatInfo: route.params.chatInfo,
                })
              }
            >
              <Feather name="info" size={24} color="#004B3C" />
            </BorderlessButton>
          ),
        })}
        initialParams={{
          userName: null as string | null,
          avatar: null as string | null,
          chatInfo: null as any,
        }}
        listeners={({ navigation, route }: any) => ({
          focus: () => {
            navigation.setParams({
              userName: route.params.userName as string | null,
              avatar: route.params.avatar as string | null,
              chatInfo: route.params.chatInfo as any,
            })
          },
        })}
      />

      <Stack.Screen
        name="DialogMenuItem"
        component={DialogMenuItemContainer}
        options={({ navigation, route }: any) => ({
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#00392D",
          },
          title: "Меню чата",
          headerTitleAlign: "center",
        })}
        initialParams={{
          chatInfo: null as any,
        }}
        listeners={({ navigation, route }: any) => ({
          focus: () => {
            navigation.setParams({
              chatInfo: route.params.chatInfo as any,
            })
          },
        })}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 20,
  },
})

export default Dialogs
