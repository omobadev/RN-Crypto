// PLUGINS IMPORTS //
import React, { useState } from "react"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Provider } from "react-redux"
import store from "~/Redux/ReduxStore"

// COMPONENTS IMPORTS //
import NavigationCenterContainer from "~/Components/NavigationCenterContainer/NavigationCenterContainer"
import Auth from "~/Components/Content/Auth/Auth"

import CreateNewDialogContainer from "~/Components/Content/Dialogs/Screens/CreateNewDialog/CreateNewDialogContainer"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

console.disableYellowBox = true

const App: React.FC<PropsType> = (props) => {
  const [isAuthentificated, setIsAuthentificated] = useState(true as boolean)
  const Stack = createStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer
        theme={{ dark: true, colors: { background: "#E5E5E5" } }}
      >
        {isAuthentificated ? (
          <Stack.Navigator initialRouteName="NavigationCenterContainer">
            <Stack.Screen
              name="NavigationCenterContainer"
              component={NavigationCenterContainer}
              options={({ navigation, route }: any) => ({
                headerShown: false,
              })}
            />
            <Stack.Screen
              name="CreateNewDialog"
              component={CreateNewDialogContainer}
              options={({ navigation, route }: any) => ({
                title: "Новый диалог",
                headerStyle: {
                  backgroundColor: "#006F5F",
                },
                headerTintColor: "white",
              })}
            />
          </Stack.Navigator>
        ) : (
          <Auth />
        )}
      </NavigationContainer>
    </Provider>
  )
}

export default App
