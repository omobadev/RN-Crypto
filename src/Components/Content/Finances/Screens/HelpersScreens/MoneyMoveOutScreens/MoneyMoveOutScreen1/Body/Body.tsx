// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import RadioItem from "./RadioItem/RadioItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  selectedComission: string

  setSelectedComission: (selectedComission: string) => void
}

const Body: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Комиссия</Text>
      <View style={styles.radios_wrap}>
        <RadioItem
          selectedComission={props.selectedComission}
          value={"Малая"}
          price={5}
          setSelectedComission={props.setSelectedComission}
        />
        <RadioItem
          selectedComission={props.selectedComission}
          value={"Средняя"}
          price={10}
          setSelectedComission={props.setSelectedComission}
        />
        <RadioItem
          selectedComission={props.selectedComission}
          value={"Высокая"}
          price={15}
          setSelectedComission={props.setSelectedComission}
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
