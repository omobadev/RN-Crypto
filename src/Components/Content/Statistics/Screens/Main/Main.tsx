// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { View } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import Body from "./Body/Body"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  MonthlyIncome: string | null
  OverallIncome: string | null
  ConnectionsAmount: string | null
  GraphData: Array<any>

  getStatsInfoThunkCreator: () => void
}

const Main: React.FC<PropsType> = (props) => {
  useEffect(() => {
    props.getStatsInfoThunkCreator()
  }, [])

  const StatsInfo = {
    MonthlyIncome: props.MonthlyIncome,
    OverallIncome: props.OverallIncome,
    ConnectionsAmount: props.ConnectionsAmount,
  }

  return (
    <View>
      <Header GraphData={props.GraphData} />
      <Body StatsInfo={StatsInfo} />
    </View>
  )
}

export default Main
