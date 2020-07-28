// PLUGINS IMPORTS //
import React, { useEffect, useRef } from "react"
import { ScrollView, View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  route: any
}

const DialogItemMenu: React.FC<PropsType> = (props) => {
  const chatInfo = props.route.params.chatInfo

  return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default DialogItemMenu
