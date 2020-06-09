// PLUGINS IMPORTS //
import React, { useState } from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import Body from "./Body/Body"
import FooterInput from "./FooterInput/FooterInput"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const MoneyMoveOutScreen1: React.FC<PropsType> = (props) => {
  const [selectedComission, setSelectedComission] = useState("Малая" as string)

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />
      <Body
        selectedComission={selectedComission}
        setSelectedComission={setSelectedComission}
      />

      <FooterInput navigation={props.navigation} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
})

export default MoneyMoveOutScreen1
