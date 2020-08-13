// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import Body from "./Body/Body"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  PaymentAmount: string | null
  endDate: string | null

  TarifsList: Array<{
    color: string
    sale: string
    price: string
    duration: string
  }>

  getTarifsInfoThunkCreator: () => void
  getTarifsListThunkCreator: () => void
  buyTarifThunkCreator: (tarifID: string, currency: string) => void
}

const TarifsScreen: React.FC<PropsType> = (props) => {
  useEffect(() => {
    props.getTarifsInfoThunkCreator()
    props.getTarifsListThunkCreator()
  }, [])

  return (
    <View style={styles.container}>
      <Header PaymentAmount={props.PaymentAmount} endDate={props.endDate} />
      <Body
        TarifsList={props.TarifsList}
        buyTarifThunkCreator={props.buyTarifThunkCreator}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 17,
  },
})

export default TarifsScreen
