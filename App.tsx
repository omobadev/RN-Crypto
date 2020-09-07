// PLUGINS IMPORTS //
import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

import { compose } from "redux"
import { Provider, connect } from "react-redux"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import store from "~/Redux/ReduxStore"

// COMPONENTS IMPORTS //
import NavigationCenterContainer from "~/Components/NavigationCenterContainer/NavigationCenterContainer"
import Auth from "~/Components/Content/Auth/Auth"

import UsersSelectScreenContainer from "~/Components/Content/Dialogs/Screens/UsersSelectScreen/UsersSelectScreenContainer"

import MoneyMoveInScreen1 from "~/Components/Content/Finances/Screens/HelpersScreens/MoneyMoveInScreens/MoneyMoveInScreen1/MoneyMoveInScreen1Container"
import MoneyMoveInScreen2 from "~/Components/Content/Finances/Screens/HelpersScreens/MoneyMoveInScreens/MoneyMoveInScreen2/MoneyMoveInScreen2Container"
import TarifsScreenContainer from "~/Components/Content/More/Screens/TarifsScreen/TarifsScreenContainer"

import Popup from "~/Components/Shared/Components/Popups/PopUp/PopUp"

// EXTRA IMPORTS //
import { VerifyIfAuthentificatedThunkCreator } from "~/Redux/Reducers/AuthReducers/AuthSetReducer"
import { Feather } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  isAuthentificated: boolean

  VerifyIfAuthentificatedThunkCreator: () => any
}

console.disableYellowBox = true

const App: React.FC<PropsType> = (props) => {
  const [loading, setLoading] = useState(true as boolean)
  const [popupVisible, setPopupVisible] = useState(false as boolean)
  const [tarifsPopupVisible, setTarifsPopupVisible] = useState(false as boolean)

  const Stack = createStackNavigator()

  useEffect(() => {
    props.VerifyIfAuthentificatedThunkCreator().then(() => setLoading(false))
  }, [])

  return (
    <>
      <Provider store={store}>
        <NavigationContainer
          theme={{ dark: true, colors: { background: "#E5E5E5" } as any }}
        >
          {loading ? (
            <View style={styles.loading_container}>
              {/* <ActivityIndicator color={"#004B3C"} size={"large"} /> */}
            </View>
          ) : props.isAuthentificated ? (
            <Stack.Navigator initialRouteName="NavigationCenterContainer">
              <Stack.Screen
                name="NavigationCenterContainer"
                component={NavigationCenterContainer}
                options={({ navigation, route }: any) => ({
                  headerShown: false,
                })}
              />
              <Stack.Screen
                name="UsersSelectScreen"
                component={UsersSelectScreenContainer}
                options={({ navigation, route }: any) => ({
                  title: route.params.title,
                  headerStyle: {
                    backgroundColor: "#006F5F",
                  },
                  headerTintColor: "white",
                })}
                initialParams={{
                  title: null as string | null,
                  function: () => console.log(),
                }}
              />
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
                    <TouchableOpacity
                      style={styles.right_icon}
                      onPress={() => setPopupVisible(true)}
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
                  selectedUserID: null,
                }}
                listeners={({ navigation, route }: any) => ({
                  focus: () => {
                    navigation.setParams({
                      selectedUserID: route.params.selectedUserID,
                    })
                  },
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

              <Stack.Screen
                name="TarifsScreen"
                component={TarifsScreenContainer}
                options={({ navigation, route }: any) => ({
                  headerRight: () => (
                    <TouchableOpacity
                      style={styles.right_icon}
                      onPress={() => setTarifsPopupVisible(true)}
                    >
                      <Feather name="info" size={24} color="#00392D" />
                    </TouchableOpacity>
                  ),
                  headerStyle: {
                    elevation: 0,
                  },
                  headerTintColor: "#00392D",
                  title: "Тарифы",
                  headerTitleAlign: "center",
                })}
              />
            </Stack.Navigator>
          ) : (
            <Auth />
          )}
        </NavigationContainer>
      </Provider>

      <Popup
        title="Перевод CGC"
        description={
          "Для осуществления перевода необходимо выбрать получателя. Либо открыть окно профиля пользователя и нажать на знак “финансов”.  Убедитесь, что сумма перевода соответствует вашему текущему балансу, В случае совершения ошибочной транзакции, пожалуйста обратитесь в техническую поддержку на почту support@cgc.capital или же в разделе главного меню во вкладке “техническая поддержка”"
        }
        buttonsArray={[
          {
            text: "OK",
            action: () => setPopupVisible(false),
          },
        ]}
        descriptionStyle={{
          textAlign: "center",
        }}
        popupVisible={popupVisible}
        setPopupVisible={setPopupVisible}
      />

      <Popup
        title="Тарифы"
        description={
          "Внесение абонентской необходима для активации функции майнинга. Ниже вы можете выбрать несколько вариантов оплаты от 1 месяца до 1 года. Чем больший тариф вы оплачиваете, тем больший дисконт получаете. Информации о майнинге вы можете прочитать открыв вкладку финансы, затем майнинг и нажав на информационную секуцию."
        }
        buttonsArray={[
          {
            text: "OK",
            action: () => setTarifsPopupVisible(false),
          },
        ]}
        descriptionStyle={{
          textAlign: "center",
        }}
        popupVisible={tarifsPopupVisible}
        setPopupVisible={setTarifsPopupVisible}
      />
    </>
  )
}

const styles = StyleSheet.create({
  loading_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  right_icon: {
    marginRight: 23,
  },
})

// TYPES
type MapStateToPropsType = {}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    isAuthentificated: state.AuthSetState.isAuthentificated,
  }
}

const AppContainer = compose(
  connect(mapStateToProps, {
    VerifyIfAuthentificatedThunkCreator: VerifyIfAuthentificatedThunkCreator,
  })
)(App)

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default AppWrapper
