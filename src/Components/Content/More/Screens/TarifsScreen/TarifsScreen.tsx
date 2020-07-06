// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import Body from "./Body/Body"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  TarifsList: Array<{
    color: string
    sale: string
    price: string
    duration: string
  }>

  getTarifsListThunkCreator: () => void
}

const TarifsScreen: React.FC<PropsType> = (props) => {
  useEffect(() => {
    props.getTarifsListThunkCreator()
  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <Body TarifsList={props.TarifsList} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 17,
  },
})

export default TarifsScreen
