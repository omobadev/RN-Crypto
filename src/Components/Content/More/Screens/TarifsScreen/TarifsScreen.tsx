// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import Body from "./Body/Body"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  responseStatus: {
    positive: boolean
    show: boolean
  }
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
  setResponseStatusActionCreator: (responseStatus: {
    positive: boolean
    show: boolean
  }) => void
  buyTarifThunkCreator: (tarifID: string) => void
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
        responseStatus={props.responseStatus}
        buyTarifThunkCreator={props.buyTarifThunkCreator}
        setResponseStatusActionCreator={props.setResponseStatusActionCreator}
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
