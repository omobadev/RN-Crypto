// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import LineItem from "./LineItem/LineItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  StatsInfo: {
    MonthlyIncome: string | null
    OverallIncome: string | null
    ConnectionsAmount: string | null
  }
}

const Body: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <LineItem
        title={"Доход за месяц"}
        desc={`${props.StatsInfo.MonthlyIncome || "0"} рублей`}
      />
      <LineItem
        title={"Доход за всё время "}
        desc={`${props.StatsInfo.OverallIncome || "0"} рублей`}
      />
      <LineItem
        title={"Количество подключений  "}
        desc={String(props.StatsInfo.ConnectionsAmount || "0")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
})

export default Body
