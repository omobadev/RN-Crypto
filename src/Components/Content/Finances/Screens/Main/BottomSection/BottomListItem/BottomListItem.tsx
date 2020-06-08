// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { RectButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  title: string
  icon: any
}

const BottomListItem: React.FC<PropsType> = (props) => {
  return (
    <RectButton style={styles.container}>
      {props.icon}
      <Text style={styles.text}>{props.title}</Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },

  text: {
    color: "#00392D",
    fontWeight: "700",
    fontSize: 20,
    marginLeft: 16,
    letterSpacing: 0.4,
    marginTop: -3,
  },
})

export default BottomListItem
