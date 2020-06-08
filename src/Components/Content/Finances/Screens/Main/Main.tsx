// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import TopBox from "./TopBox/TopBox"
import BottomSection from "./BottomSection/BottomSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const Main: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <TopBox navigation={props.navigation} />
      <BottomSection />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Main
