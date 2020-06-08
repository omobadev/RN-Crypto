// PLUGINS IMPORTS //
import React from "react"
import { StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// COMPONENTS IMPORTS //
import Dialogs from "~/Components/Content/Dialogs/Dialogs"
import Finances from "~/Components/Content/Finances/Finances"
import Statistics from "~/Components/Content/Statistics/Statistics"
import Profile from "~/Components/Content/Profile/Profile"
import More from "~/Components/Content/More/More"

// EXTRA IMPORTS //
import { Ionicons } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"

////////////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const NavigationCenterContainer: React.FC<PropsType> = (props) => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      initialRouteName="Dialogs"
      tabBarOptions={{
        activeTintColor: "#006F5F",
        inactiveTintColor: "#9E9E9E",
        style: styles.tab_bar,
      }}
    >
      <Tab.Screen
        name="Dialogs"
        component={Dialogs}
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
          tabBarLabel: "Диалоги",
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
          tabBarLabel: "Диалоги",
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
          tabBarLabel: "Диалоги",
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
          tabBarLabel: "Диалоги",
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
    height: 50,
    paddingTop: 5,
    paddingBottom: 5,
  },
})

export default NavigationCenterContainer
