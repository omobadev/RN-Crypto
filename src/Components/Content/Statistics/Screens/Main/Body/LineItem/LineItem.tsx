// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  title: string
  desc: string
}

const LineItem: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.desc}>{props.desc}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },

  title: {
    color: "#9E9E9E",
    fontSize: 16.5,
  },

  desc: {
    color: "#00392D",
    fontSize: 16.5,
  },
})

export default LineItem
