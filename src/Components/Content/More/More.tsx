// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import MainContainer from "./Screens/Main/MainContainer"
import ReferalLinkScreenContainer from "./Screens/ReferalLinkScreen/ReferalLinkScreenContainer"
import TarifsScreenContainer from "./Screens/TarifsScreen/TarifsScreenContainer"
import TechSupportScreenContainer from "./Screens/TechSupportScreen/TechSupportScreenContainer"
import DialogItemContainer from "~/Components/Content/Dialogs/Screens/DialogItem/DialogItemContainer"

import Popup from "~/Components/Shared/Components/Popups/PopUp/PopUp"

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const More: React.FC<PropsType> = (props) => {
  const [tarifsPopupVisible, setTarifsPopupVisible] = useState(false as boolean)

  const Stack = createStackNavigator()

  return (
    <>
      <Stack.Navigator initialRouteName="MoreMain">
        <Stack.Screen
          name="MoreMain"
          component={MainContainer}
          options={({ navigation, route }: any) => ({
            headerStyle: {
              elevation: 0,
            },
            headerTintColor: "#00392D",
            title: "Меню",
            headerTitleAlign: "center",
          })}
        />

        <Stack.Screen
          name="TechSupportScreen"
          component={TechSupportScreenContainer}
          options={({ navigation, route }: any) => ({
            headerStyle: {
              elevation: 0,
            },
            headerTitleStyle: {
              fontSize: 18,
            },
            headerTintColor: "#00392D",
            title: "Техническая поддержка",
            headerTitleAlign: "center",
          })}
        />

        <Stack.Screen
          name="ReferalLinkScreen"
          component={ReferalLinkScreenContainer}
          options={({ navigation, route }: any) => ({
            headerStyle: {
              elevation: 0,
            },
            headerTintColor: "#00392D",
            title: "Реферальная ссылка",
            headerTitleAlign: "center",
          })}
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

        <Stack.Screen
          name="DialogItem"
          component={DialogItemContainer}
          options={({ navigation, route }: any) => ({
            headerStyle: {
              elevation: 0,
            },
            headerTintColor: "#00392D",
            title: route.params.userName,
            headerTitleAlign: "center",
          })}
          initialParams={{
            userName: null as string | null,
            avatar: null as string | null,
          }}
        />
      </Stack.Navigator>

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
  right_icon: {
    marginRight: 20,
  },
})

export default More
