// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import ListItem from "./ListItem/ListItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  PaymentAmount: string | null
  endDate: string | null
}

const Header: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <ListItem
        title="Абонентсая плата"
        desc={`${props.PaymentAmount || "0"} GC`}
        descStyle={{ fontSize: 16, fontWeight: "bold", color: "#006F5F" }}
      />
      <ListItem
        title="Мой тариф"
        desc={`Доступен до ${props.endDate || ""}`}
        descStyle={{ fontSize: 16, color: "#9E9E9E" }}
      />
      <ListItem
        title="Другие тарифы:"
        descStyle={{ fontSize: 16, color: "#9E9E9E" }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
})

export default Header
