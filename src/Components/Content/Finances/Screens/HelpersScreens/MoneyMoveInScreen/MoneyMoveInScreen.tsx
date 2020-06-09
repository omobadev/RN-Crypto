// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import UsersList from "./UsersList/UsersList"
import FooterInput from "./FooterInput/FooterInput"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const MoneyMoveInScreen: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.divider} />
      <UsersList />
      <FooterInput />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },

  divider: {
    borderBottomColor: "rgba(0, 57, 45, 0.05)",
    borderWidth: 1,
    opacity: 0.2,
    marginVertical: 10,
  },
})

export default MoneyMoveInScreen
