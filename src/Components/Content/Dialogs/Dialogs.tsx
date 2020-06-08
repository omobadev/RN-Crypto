// PLUGINS IMPORTS //
import React from "react"
import { StyleSheet } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import MainContainer from "./Screens/Main/MainContainer"

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
        options={({ navigation, route }: any) => ({})}
      />
    </Stack.Navigator>
  )
}

export default Dialogs
