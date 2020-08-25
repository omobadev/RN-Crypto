// PLUGINS IMPORTS //
import React from "react"

import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import InitialScreen from "./Screens/InitialScreen/InitialScreen"
import LoginScreenContainer from "./Screens/LoginScreen/LoginScreenContainer"
import Registration from "./Screens/RegisterScreen/Registration"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Auth: React.FC<PropsType> = (props) => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName="InitialScreen">
      <Stack.Screen
        name="InitialScreen"
        component={InitialScreen}
        options={({ navigation, route }: any) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreenContainer}
        options={({ navigation, route }: any) => ({
          headerTitleAlign: "center",
          title: "Вход",
          headerStyle: {
            backgroundColor: "white",
            elevation: 0,
          },
        })}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={Registration}
        options={({ navigation, route }: any) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  )
}

export default Auth
