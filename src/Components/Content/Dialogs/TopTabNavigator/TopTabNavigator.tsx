// PLUGINS IMPORTS //
import React from "react"
import { Text, StyleSheet } from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

// COMPONENTS IMPORTS //
import GroupsContainer from "./Groups/GroupContainer"
import DialogsContainer from "../DialogsContainer"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////
type PropsType = {}

const TopTabNavigator: React.FC<PropsType> = (props) => {
  const Tab = createMaterialTopTabNavigator()

  return (
    <Tab.Navigator
      tabBarPosition="top"
      initialRouteName="GrpupsSection"
      tabBarOptions={{
        style: {
          elevation: 0,
          borderBottomColor: "#DCDCDC",
          borderBottomWidth: 1,
        },
        activeTintColor: "#b1b2b4",
        inactiveTintColor: "#7b7b7b",
      }}
    >
      <Tab.Screen
        name="DialogsSection"
        component={DialogsContainer}
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <Text style={styles.text}>Диалоги</Text>
            ) : (
              <Text style={{ ...styles.text, opacity: 0.5 }}>Диалоги</Text>
            ),
        }}
      />

      <Tab.Screen
        name="GrpupsSection"
        component={GroupsContainer}
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <Text style={styles.text}>Групы</Text>
            ) : (
              <Text style={{ ...styles.text, opacity: 0.5 }}>Групы</Text>
            ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    letterSpacing: 0.3,
  },
})

export default TopTabNavigator
