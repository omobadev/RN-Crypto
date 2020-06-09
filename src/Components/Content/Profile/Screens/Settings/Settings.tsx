// PLUGINS IMPORTS //
import React from "react"
import { StyleSheet } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { BorderlessButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //
import Dashboard from "./Screens/Dashboard/Dashboard"
import NotificationsSettingsContainer from "./Screens/NotificationsSettings/NotificationsSettingsContainer"
import GeneralSettings from "./Screens/GeneralSettings/GeneralSettingsContainer"

// EXTRA IMPORTS //
import { AntDesign } from "@expo/vector-icons"

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
          headerLeft: () => (
            <BorderlessButton
              style={styles.left_icon}
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </BorderlessButton>
          ),
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
      <Stack.Screen
        name="NotificationsSettings"
        component={NotificationsSettingsContainer}
        options={({ navigation, route }: any) => ({
          headerBackTitleVisible: false,
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#00392D",
          },
          title: "Уведомления",
          headerTitleAlign: "center",
        })}
      />
      <Stack.Screen
        name="GeneralSettings"
        component={GeneralSettings}
        options={({ navigation, route }: any) => ({
          headerBackTitleVisible: false,
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#00392D",
          },
          title: "Основное",
          headerTitleAlign: "center",
        })}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  left_icon: {
    marginLeft: 17,
  },
})

export default Settings
