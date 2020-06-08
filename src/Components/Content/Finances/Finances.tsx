// PLUGINS IMPORTS //
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import MainContainer from "./Screens/Main/MainContainer"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Finances: React.FC<PropsType> = (props) => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName="FinancesMain">
      <Stack.Screen
        name="FinancesMain"
        component={MainContainer}
        options={({ navigation, route }: any) => ({})}
      />
    </Stack.Navigator>
  )
}

export default Finances
