// PLUGINS IMPORTS //
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import Step1ScreenContainer from "./Screens/Step1Screen/Step1ScreenContainer"
import Step2ScreenContainer from "./Screens/Step2Screen/Step2ScreenContainer"

import UsersIDsListScreenContainer from "./Screens/UsersIDsListScreen/UsersIDsListScreenContainer"

import PasswordScreenContainer from "~/Components/Shared/HelpersScreens/PasswordScreen/PasswordScreenContainer"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  route: any
}

const Registation: React.FC<PropsType> = (props) => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName="FinancesMain">
      <Stack.Screen
        name="RegisterStep1Screen"
        component={Step1ScreenContainer}
        options={({ navigation, route }: any) => ({
          headerTitleAlign: "center",
          title: "Регистрация",
          headerStyle: {
            backgroundColor: "#006F5F",
            elevation: 0,
          },
          headerTintColor: "white",
        })}
        initialParams={{
          userInvitedID: null as string | null,
        }}
      />
      <Stack.Screen
        name="RegisterStep2Screen"
        component={Step2ScreenContainer}
        options={({ navigation, route }: any) => ({
          headerTitleAlign: "center",
          title: "Контактная информация",
          headerStyle: {
            backgroundColor: "#006F5F",
            elevation: 0,
          },
          headerTintColor: "white",
        })}
      />

      <Stack.Screen
        name="PasswordScreen"
        component={PasswordScreenContainer}
        options={({ navigation, route }: any) => ({
          headerShown: false,
        })}
        initialParams={{
          title: null as string | null,
          callbackFnTitle: null as string | null,
        }}
      />

      <Stack.Screen
        name="UsersIDsListScreen"
        component={UsersIDsListScreenContainer}
        options={({ navigation, route }: any) => ({
          headerTitle: "Список ID",
          headerTitleAlign: "center",
          headerTintColor: "#00392D",
        })}
      />
    </Stack.Navigator>
  )
}

export default Registation
