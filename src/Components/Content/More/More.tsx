// PLUGINS IMPORTS //
import React, { useState } from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import MainContainer from "./Screens/Main/MainContainer"
import ReferalLinkScreenContainer from "./Screens/ReferalLinkScreen/ReferalLinkScreenContainer"
import TarifsScreenContainer from "./Screens/TarifsScreen/TarifsScreenContainer"
import TechSupportScreenContainer from "./Screens/TechSupportScreen/TechSupportScreenContainer"
import DialogItemContainer from "~/Components/Content/Dialogs/Screens/DialogItem/DialogItemContainer"

import DialogsInputPopup from "~/Components/Shared/Components/Popups/DialogsInputPopup/DialogsInputPopup"

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  createTechnicalHelpChatThunkCreator: (topic: string, message: string) => void
}

const More: React.FC<PropsType> = (props) => {
  const [popupVisible, setPopupVisible] = useState(false as boolean)
  const Stack = createStackNavigator()

  const submitNewChat = (values: any) => {
    setPopupVisible(false)
    props.createTechnicalHelpChatThunkCreator(values.title, values.message)
  }

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
            headerRight: () => (
              <TouchableOpacity
                style={styles.right_icon}
                onPress={() => setPopupVisible(true)}
              >
                <AntDesign name="plus" size={24} color="#00392D" />
              </TouchableOpacity>
            ),
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
              <TouchableOpacity style={styles.right_icon}>
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

      <DialogsInputPopup
        popupVisible={popupVisible}
        setPopupVisible={setPopupVisible}
        onSubmit={submitNewChat}
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
