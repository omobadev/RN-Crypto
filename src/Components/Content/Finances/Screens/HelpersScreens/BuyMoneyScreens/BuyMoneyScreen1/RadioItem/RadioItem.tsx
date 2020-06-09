// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { RadioButton } from "react-native-paper"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  selectedCurrency: string
  value: string

  setSelectedCurrency: (selectedCurrency: string) => void
}

const RadioItem: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{props.value}</Text>
      </View>
      <RadioButton
        value={props.value}
        color="#006F5F"
        status={
          props.selectedCurrency === props.value ? "checked" : "unchecked"
        }
        onPress={() => props.setSelectedCurrency(props.value)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },

  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "87%",
  },

  title: {
    color: "#00392D",
    fontWeight: "600",
    fontSize: 16,
  },
  price: {
    color: "#00392D",
    fontWeight: "bold",
  },
})

export default RadioItem
