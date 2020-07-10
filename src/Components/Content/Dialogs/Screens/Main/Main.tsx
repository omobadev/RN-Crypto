// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import TopTabNavigator from "./TopTabNavigator/TopTabNavigator"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const Main: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />
      <TopTabNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Main
