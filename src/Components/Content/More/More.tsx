// PLUGINS IMPORTS //
import React from "react"
import { Text, TouchableOpacity, StyleSheet } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import MainContainer from "./Screens/Main/MainContainer"
import ReferalLinkScreen from "./Screens/ReferalLinkScreen/ReferalLinkScreen"
import TarifsScreenContainer from "./Screens/TarifsScreen/TarifsScreenContainer"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const More: React.FC<PropsType> = (props) => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName="MoreMain">
      <Stack.Screen
        name="MoreMain"
        component={MainContainer}
        options={({ navigation, route }: any) => ({
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#00392D",
          },
          title: "Меню",
          headerTitleAlign: "center",
        })}
      />

      <Stack.Screen
        name="ReferalLinkScreen"
        component={ReferalLinkScreen}
        options={({ navigation, route }: any) => ({
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#00392D",
          },
          title: "Реферальная ссылка",
          headerTitleAlign: "center",
        })}
      />

      <Stack.Screen
        name="TarifsScreen"
        component={TarifsScreenContainer}
        options={({ navigation, route }: any) => ({
          headerRight: () => (
            <TouchableOpacity>
              <Text style={styles.right_text}>Оплатить</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#00392D",
          },
          title: "Тарифы",
          headerTitleAlign: "center",
        })}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  right_text: {
    marginRight: 20,
    color: "#006F5F",
  },
})

export default More
