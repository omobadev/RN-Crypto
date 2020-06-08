// PLUGINS IMPORTS //
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import MainContainer from "./Screens/Main/MainContainer"
import TransactionsHistoryContainer from "./Screens/TransactionsHistory/TransactionsHistoryContainer"

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
        options={({ navigation, route }: any) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="TransactionsHistory"
        component={TransactionsHistoryContainer}
        options={({ navigation, route }: any) => ({
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#00392D",
          },
          title: "Финансы",
          headerTitleAlign: "center",
        })}
      />
    </Stack.Navigator>
  )
}

export default Finances
