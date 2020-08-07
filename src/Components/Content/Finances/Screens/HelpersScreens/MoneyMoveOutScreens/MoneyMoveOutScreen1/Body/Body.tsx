// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import RadioItem from "./RadioItem/RadioItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  selectedCurrency: string
  setSelectedCurrency: (selectedCurrency: string) => void
}

const Body: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Валюта</Text>
      <View style={styles.radios_wrap}>
        <RadioItem
          selectedCurrency={props.selectedCurrency}
          value={"CGC"}
          setSelectedCurrency={props.setSelectedCurrency}
        />
        <RadioItem
          selectedCurrency={props.selectedCurrency}
          value={"INPH"}
          setSelectedCurrency={props.setSelectedCurrency}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  title: {
    color: "#9E9E9E",
  },

  radios_wrap: {
    // marginTop: 15,
  },
})

export default Body
