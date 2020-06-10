// PLUGINS IMPORTS //
import React from "react"
import { StyleSheet } from "react-native"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"

// COMPONENTS IMPORTS //
import DialogsContainer from "~/Components/Content/Dialogs/DialogsContainer"
import Finances from "~/Components/Content/Finances/Finances"
import Statistics from "~/Components/Content/Statistics/Statistics"
import Profile from "~/Components/Content/Profile/ProfileContainer"
import More from "~/Components/Content/More/More"

// EXTRA IMPORTS //
import { Ionicons } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"

////////////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const NavigationCenterContainer: React.FC<PropsType> = (props) => {
  const Tab = createMaterialBottomTabNavigator()

  return (
    <Tab.Navigator
      initialRouteName="Dialogs"
      barStyle={styles.tab_bar}
      activeColor="#006F5F"
      inactiveColor="#9E9E9E"
    >
      <Tab.Screen
        name="Dialogs"
        component={DialogsContainer}
        options={{
          tabBarLabel: "Диалоги",
          tabBarIcon: ({ focused }: any) => (
            <Ionicons
              name="ios-chatboxes"
              size={23}
              color={focused ? "#006F5F" : "#9E9E9E"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Finances"
        component={Finances}
        options={{
          tabBarLabel: "Финансы",
          tabBarIcon: ({ focused }: any) => (
            <FontAwesome
              name="dollar"
              size={24}
              color={focused ? "#006F5F" : "#9E9E9E"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarLabel: "Статистика",
          tabBarIcon: ({ focused }: any) => (
            <Ionicons
              name="ios-stats"
              size={24}
              color={focused ? "#006F5F" : "#9E9E9E"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Профиль",
          tabBarIcon: ({ focused }: any) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={24}
              color={focused ? "#006F5F" : "#9E9E9E"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: "Ещё",
          tabBarIcon: ({ focused }: any) => (
            <Entypo
              name="dots-three-horizontal"
              size={24}
              color={focused ? "#006F5F" : "#9E9E9E"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tab_bar: {
    backgroundColor: "#E5E5E5",
    elevation: 25,
  },
})

export default NavigationCenterContainer
