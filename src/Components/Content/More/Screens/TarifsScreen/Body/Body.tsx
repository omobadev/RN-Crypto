// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import TarifItem from "./TarifItem/TarifItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  TarifsList: Array<{
    ID: string
    title: string
    price: string
    duration: string
  }>
  buyTarifThunkCreator: (tarifID: string, currency: string) => void
}

const Body: React.FC<PropsType> = (props) => {
  const colors = ["#F2F2F2", "#006F5F", "#C0A33D", "#C0A33D"]
  const textColors = ["#006F5F", "white", "white", "white"]

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
                backgroundColor={colors[index]}
                textColor={textColors[index]}
                buyTarifThunkCreator={props.buyTarifThunkCreator}
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
