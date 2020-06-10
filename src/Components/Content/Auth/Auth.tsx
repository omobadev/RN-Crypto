// PLUGINS IMPORTS //
import React from "react"

import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import InitialScreen from "./Screens/InitialScreen/InitialScreen"
import LoginScreenContainer from "./Screens/LoginScreen/LoginScreenContainer"
import RegisterScreenContainer from "./Screens/RegisterScreen/RegisterScreenContainer"

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
            backgroundColor: "#F2F2F2",
            elevation: 0,
          },
        })}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreenContainer}
        options={({ navigation, route }: any) => ({
          headerTitleAlign: "center",
          title: "Регистрация",
          headerStyle: {
            backgroundColor: "#F2F2F2",
            elevation: 0,
          },
        })}
      />
    </Stack.Navigator>
  )
}

export default Auth
