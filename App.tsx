// PLUGINS IMPORTS //
import React, { useEffect, useState } from "react"
import { View, ActivityIndicator, StyleSheet } from "react-native"
import { compose } from "redux"
import { Provider, connect } from "react-redux"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import store from "~/Redux/ReduxStore"

// COMPONENTS IMPORTS //
import NavigationCenterContainer from "~/Components/NavigationCenterContainer/NavigationCenterContainer"
import Auth from "~/Components/Content/Auth/Auth"

import UsersSelectScreenContainer from "~/Components/Content/Dialogs/Screens/UsersSelectScreen/UsersSelectScreenContainer"

// EXTRA IMPORTS //
import { VerifyIfAuthentificatedThunkCreator } from "~/Redux/Reducers/AuthReducers/AuthSetReducer"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  isAuthentificated: boolean

  VerifyIfAuthentificatedThunkCreator: () => any
}

console.disableYellowBox = true

const App: React.FC<PropsType> = (props) => {
  const [loading, setLoading] = useState(true as boolean)
  const Stack = createStackNavigator()

  useEffect(() => {
    props.VerifyIfAuthentificatedThunkCreator().then(() => setLoading(false))
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer
        theme={{ dark: true, colors: { background: "#E5E5E5" } }}
      >
        {loading ? (
          <View style={styles.loading_container}>
            <ActivityIndicator color={"#004B3C"} size={"large"} />
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
          </Stack.Navigator>
        ) : (
          <Auth />
        )}
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  loading_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
