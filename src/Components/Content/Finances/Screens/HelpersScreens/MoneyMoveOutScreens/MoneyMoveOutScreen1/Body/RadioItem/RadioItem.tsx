// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { RadioButton } from "react-native-paper"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  selectedComission: string
  value: string
  price: number

  setSelectedComission: (selectedComission: string) => void
}

const RadioItem: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <RadioButton
        value={props.value}
        color="#006F5F"
        status={
          props.selectedComission === props.value ? "checked" : "unchecked"
        }
        onPress={() => props.setSelectedComission(props.value)}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{props.value}</Text>
        <Text style={styles.price}>({props.price} CGC)</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    marginLeft: -5,
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
