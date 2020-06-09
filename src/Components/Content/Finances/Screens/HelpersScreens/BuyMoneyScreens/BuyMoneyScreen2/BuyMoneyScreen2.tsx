// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any
}

const BuyMoneyScreen2: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.route.params.currency}</Text>
      <Text>{props.route.params.value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default BuyMoneyScreen2
