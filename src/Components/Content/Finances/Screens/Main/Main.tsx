// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import TopBox from "./TopBox/TopBox"
import BottomSection from "./BottomSection/BottomSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  userID: string | null
  BudgetInfo: {
    CGC: {
      price: string
      value2: string
    }

    MiningCGC: {
      price: string
      value2: string
    }
    DailyIncome: {
      price: string
      value2: string
    }
  }

  getUserFinancesInfoThunkCreator: () => void
}

const Main: React.FC<PropsType> = (props) => {
  useEffect(() => {
    props.getUserFinancesInfoThunkCreator()
  }, [])

  return (
    <View style={styles.container}>
      <TopBox
        navigation={props.navigation}
        BudgetInfo={props.BudgetInfo}
        userID={props.userID}
      />
      <BottomSection navigation={props.navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Main
