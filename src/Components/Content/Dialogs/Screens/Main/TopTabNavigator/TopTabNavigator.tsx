// PLUGINS IMPORTS //
import React from "react"
import { Text, StyleSheet } from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

// COMPONENTS IMPORTS //
import GroupsContainer from "./Groups/GroupContainer"
import DialogsContainer from "./Dialogs/DialogsContainer"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////
type PropsType = {}

const TopTabNavigator: React.FC<PropsType> = (props) => {
  const Tab = createMaterialTopTabNavigator()

  return (
    <Tab.Navigator
      tabBarPosition="top"
      initialRouteName="DialogsSection"
      tabBarOptions={{
        style: {
          elevation: 0,
          borderBottomColor: "#DCDCDC",
          borderBottomWidth: 1,
          backgroundColor: "#014f40",
          width: "100%",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          alignSelf: "center",
        },
        activeTintColor: "#fff",
        inactiveTintColor: "#fff",
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
              <Text style={styles.text}>Группы</Text>
            ) : (
              <Text style={{ ...styles.text, opacity: 0.5 }}>Группы</Text>
            ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 0.3,
  },
})

export default TopTabNavigator
