// PLUGINS IMPORTS //
import React from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import MainContainer from "./Screens/Main/MainContainer"
import TransactionsHistoryContainer from "./Screens/TransactionsHistory/TransactionsHistoryContainer"

import MoneyMoveScreenContainer from "./Screens/HelpersScreens/MoneyMoveScreen/MoneyMoveScreenContainer"
import MoneyMoveOutScreenContainer from "./Screens/HelpersScreens/MoneyMoveOutScreen/MoneyMoveOutScreenContainer"

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons"

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
          headerBackTitleVisible: false,
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
      <Stack.Screen
        name="MoneyMoveScreen"
        component={MoneyMoveScreenContainer}
        options={({ navigation, route }: any) => ({
          headerBackTitleVisible: false,
          headerStyle: {
            elevation: 0,
          },
          headerRight: () => (
            <TouchableOpacity style={styles.right_icon}>
              <Feather name="info" size={24} color="#006F5F" />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            color: "#00392D",
          },
          title: "Сделать перевод",
          headerTitleAlign: "center",
        })}
      />
      <Stack.Screen
        name="MoneyMoveOutScreen"
        component={MoneyMoveOutScreenContainer}
        options={({ navigation, route }: any) => ({
          headerBackTitleVisible: false,
          headerStyle: {
            elevation: 0,
          },
          headerRight: () => (
            <TouchableOpacity style={styles.right_icon}>
              <Feather name="info" size={24} color="#006F5F" />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            color: "#00392D",
          },
          title: "Вывод CGC",
          headerTitleAlign: "center",
        })}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  right_icon: {
    marginRight: 23,
  },
})

export default Finances
