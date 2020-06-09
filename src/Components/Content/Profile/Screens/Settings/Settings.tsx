// PLUGINS IMPORTS //
import React from "react"

import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import Dashboard from "./Screens/Dashboard/Dashboard"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Settings: React.FC<PropsType> = (props) => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName="SettingsDashboard">
      <Stack.Screen
        name="SettingsDashboard"
        component={Dashboard}
        options={({ navigation, route }: any) => ({
          headerBackTitleVisible: false,
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#00392D",
          },
          title: "Настройки",
          headerTitleAlign: "center",
        })}
      />
    </Stack.Navigator>
  )
}

export default Settings
