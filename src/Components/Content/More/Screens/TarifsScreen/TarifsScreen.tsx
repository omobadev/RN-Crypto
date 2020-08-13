// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import Body from "./Body/Body"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  PaymentAmount: string | null
  endDate: string | null

  TarifsList: Array<{
    ID: string
    title: string
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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header PaymentAmount={props.PaymentAmount} endDate={props.endDate} />
      <Body
        TarifsList={props.TarifsList}
        buyTarifThunkCreator={props.buyTarifThunkCreator}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 17,
  },
})

export default TarifsScreen
