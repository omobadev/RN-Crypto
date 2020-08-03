// PLUGINS IMPORTS //
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

// COMPONENTS IMPORTS //
import MainContainer from "./Screens/Main/MainContainer";
import TransactionsHistoryContainer from "./Screens/TransactionsHistory/TransactionsHistoryContainer";

import MoneyMoveInScreen1 from "./Screens/HelpersScreens/MoneyMoveInScreens/MoneyMoveInScreen1/MoneyMoveInScreen1Container";
import MoneyMoveInScreen2 from "./Screens/HelpersScreens/MoneyMoveInScreens/MoneyMoveInScreen2/MoneyMoveInScreen2Container";

import MoneyMoveOutScreen1Container from "./Screens/HelpersScreens/MoneyMoveOutScreens/MoneyMoveOutScreen1/MoneyMoveOutScreen1Container";
import MoneyMoveOutScreen2Container from "./Screens/HelpersScreens/MoneyMoveOutScreens/MoneyMoveOutScreen2/MoneyMoveOutScreen2Container";

import BuyMoneyScreen1Container from "./Screens/HelpersScreens/BuyMoneyScreens/BuyMoneyScreen1/BuyMoneyScreen1Container";
import BuyMoneyScreen2Container from "./Screens/HelpersScreens/BuyMoneyScreens/BuyMoneyScreen2/BuyMoneyScreen2Container";

import MiningMainScreen from "./Screens/HelpersScreens/MiningScreens/MiningMainScreen/MiningMainScreen";
import MiningInMoneyScreenContainer from "./Screens/HelpersScreens/MiningScreens/MiningInMoneyScreen/MiningInMoneyScreenContainer";
import MiningOutMoneyScreenContainer from "./Screens/HelpersScreens/MiningScreens/MiningOutMoneyScreen/MiningOutMoneyScreenContainer";

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons";

/////////////////////////////////////////////////////////////////////////////

type PropsType = {};

const Finances: React.FC<PropsType> = (props) => {
  const Stack = createStackNavigator();

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
          title: "История транзакций",
          headerTitleAlign: "center",
        })}
      />
      {/* HELPERS SCREENS */}
      {/* ПЕРЕВОД CGC */}
      <Stack.Screen
        name="MoneyMoveInScreen1"
        component={MoneyMoveInScreen1}
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
        name="MoneyMoveInScreen2"
        component={MoneyMoveInScreen2}
        options={({ navigation, route }: any) => ({
          headerBackTitleVisible: false,
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#00392D",
          },
          title: "Отправка",
          headerTitleAlign: "center",
        })}
        initialParams={{
          moneyAmount: 0 as number | string,
          selectedUserID: null as string | null,
        }}
      />
      {/* Вывод CGC */}
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
        initialParams={{
          price: null as string | null,
          currency: "BTC" as string,
        }}
      />
      {/* Покупка CGC */}
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
        initialParams={{
          currency: null as string | null,
          value: null as number | null,
        }}
      />
      {/* Майнинг CGC */}
      <Stack.Screen
        name="MiningMainScreen"
        component={MiningMainScreen}
        options={({ navigation, route }: any) => ({
          headerBackTitleVisible: false,
          headerStyle: {
            elevation: 0,
          },
          headerRight: () => (
            <TouchableOpacity
              style={styles.right_icon}
              onPress={() => navigation.setParams({ infoPopupOpened: true })}
            >
              <Feather name="info" size={24} color="#006F5F" />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            color: "#00392D",
          },
          title: "Сделать перевод",
          headerTitleAlign: "center",
        })}
        initialParams={{
          infoPopupOpened: false as boolean,
        }}
      />
      <Stack.Screen
        name="MiningInMoneyScreen"
        component={MiningInMoneyScreenContainer}
        options={({ navigation, route }: any) => ({
          headerBackTitleVisible: false,
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#00392D",
          },
          title: "Майнинг депозит",
          headerTitleAlign: "center",
        })}
        initialParams={{
          currency: null as string | null,
          value: null as number | null,
        }}
      />
      <Stack.Screen
        name="MiningOutMoneyScreen"
        component={MiningOutMoneyScreenContainer}
        options={({ navigation, route }: any) => ({
          headerBackTitleVisible: false,
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#00392D",
          },
          title: "Майнинг вывод",
          headerTitleAlign: "center",
        })}
        initialParams={{
          currency: null as string | null,
          value: null as number | null,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  right_icon: {
    marginRight: 23,
  },
});

export default Finances;
