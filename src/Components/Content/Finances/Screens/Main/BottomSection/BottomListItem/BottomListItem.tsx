// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { RectButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  navigationDestination: any

  title: string
  icon: any
}

const BottomListItem: React.FC<PropsType> = (props) => {
  return (
    <RectButton
      style={styles.container}
      onPress={() => props.navigation.navigate(props.navigationDestination)}
    >
      {props.icon}
      <Text style={styles.text}>{props.title}</Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  text: {
    color: "#00392D",
    fontWeight: "700",
    fontSize: 19,
    marginLeft: 13,
    letterSpacing: 0.4,
    marginTop: -3,
  },
})

export default BottomListItem
