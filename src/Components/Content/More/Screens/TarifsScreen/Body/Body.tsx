// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import TarifItem from "./TarifItem/TarifItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  responseStatus: {
    positive: boolean
    show: boolean
  }
  TarifsList: Array<{
    ID: string
    title: string
    price: string
    duration: string
  }>

  setResponseStatusActionCreator: (responseStatus: {
    positive: boolean
    show: boolean
  }) => void
  buyTarifThunkCreator: (tarifID: string) => void
}

const Body: React.FC<PropsType> = (props) => {
  const images = [
    require("~/Images/tarif1.png"),
    require("~/Images/tarif2.png"),
    require("~/Images/tarif3.png"),
    require("~/Images/tarif3.png"),
  ]
  const textColors = ["#006F5F", "white", "white", "white"]
  const salesText = ["", "Скидка 10%", "Скидка 15%", "Скидка 20%"]

  return (
    <View style={styles.container}>
      {props.TarifsList &&
        props.TarifsList.length > 0 &&
        props.TarifsList.map(
          (
            tarif: {
              ID: string
              title: string
              price: string
              duration: string
            },
            index: number
          ) => {
            return (
              <TarifItem
                tarif={tarif}
                background={images[index]}
                textColor={textColors[index]}
                saleText={salesText[index]}
                responseStatus={props.responseStatus}
                buyTarifThunkCreator={props.buyTarifThunkCreator}
                setResponseStatusActionCreator={
                  props.setResponseStatusActionCreator
                }
              />
            )
          }
        )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
})

export default Body
