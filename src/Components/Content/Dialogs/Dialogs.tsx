// PLUGINS IMPORTS //
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import MainContainer from "./Screens/Main/MainContainer"
import DialogItemContainer from "./Screens/DialogItem/DialogItemContainer"

// EXTRA IMPORTS //

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
        })}
        initialParams={{
          userName: null as string | null,
        }}
      />
    </Stack.Navigator>
  )
}

export default Dialogs
