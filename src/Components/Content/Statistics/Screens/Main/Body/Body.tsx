// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import LineItem from "./LineItem/LineItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Body: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <LineItem title={"Доход за месяц"} desc={"200 000 рублей"} />
      <LineItem title={"Доход за всё время "} desc={"1 200 000 рублей   "} />
      <LineItem title={"Количество подключений  "} desc={"35"} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
})

export default Body
