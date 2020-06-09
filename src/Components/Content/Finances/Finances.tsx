// PLUGINS IMPORTS //
import React from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import MainContainer from "./Screens/Main/MainContainer"
import TransactionsHistoryContainer from "./Screens/TransactionsHistory/TransactionsHistoryContainer"

import MoneyMoveInScreen from "./Screens/HelpersScreens/MoneyMoveInScreen/MoneyMoveInScreenContainer"
import MoneyMoveOutScreen1Container from "./Screens/HelpersScreens/MoneyMoveOutScreens/MoneyMoveOutScreen1/MoneyMoveOutScreen1Container"
import MoneyMoveOutScreen2Container from "./Screens/HelpersScreens/MoneyMoveOutScreens/MoneyMoveOutScreen2/MoneyMoveOutScreen2Container"
import BuyMoneyScreen1Container from "./Screens/HelpersScreens/BuyMoneyScreens/BuyMoneyScreen1/BuyMoneyScreen1Container"
import BuyMoneyScreen2Container from "./Screens/HelpersScreens/BuyMoneyScreens/BuyMoneyScreen2/BuyMoneyScreen2Container"

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

      {/* HELPERS SCREENS */}
      <Stack.Screen
        name="MoneyMoveInScreen"
        component={MoneyMoveInScreen}
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
        name="MoneyMoveOutScreen1"
        component={MoneyMoveOutScreen1Container}
        options={({ navigation, route }: any) => ({
          headerBackTitleVisible: false,
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#00392D",
          },
          title: "Вывод CGC",
          headerTitleAlign: "center",
        })}
      />
      <Stack.Screen
        name="MoneyMoveOutScreen2"
        component={MoneyMoveOutScreen2Container}
        options={({ navigation, route }: any) => ({
          headerBackTitleVisible: false,
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#00392D",
          },
          title: "Вывод CGC",
          headerTitleAlign: "center",
        })}
      />

      <Stack.Screen
        name="BuyMoneyScreen1"
        component={BuyMoneyScreen1Container}
        options={({ navigation, route }: any) => ({
          headerBackTitleVisible: false,
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#00392D",
          },
          title: "Пополнение",
          headerTitleAlign: "center",
        })}
      />
      <Stack.Screen
        name="BuyMoneyScreen2"
        component={BuyMoneyScreen2Container}
        options={({ navigation, route }: any) => ({
          headerBackTitleVisible: false,
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#00392D",
          },
          title: "Пополнение",
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
