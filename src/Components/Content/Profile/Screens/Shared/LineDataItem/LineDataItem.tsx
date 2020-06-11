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

const LineDataItem: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.desc}>{props.desc}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 57, 45, 0.15)",
    paddingVertical: 11,
  },

  title: {
    color: "#00392D",
    fontSize: 18,
  },

  desc: {
    color: "gray",
    fontSize: 17,
  },
})

export default LineDataItem
