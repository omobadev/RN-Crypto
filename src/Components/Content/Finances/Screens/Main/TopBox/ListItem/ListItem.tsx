// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet, ActivityIndicator } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  title: string

  firstValue: string
  secondValue: string
  loading?: boolean
}

const ListItem: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      {props.loading && <ActivityIndicator color="#F2F2F2" />}
      <View style={styles.wrapper}>
        <Text style={styles.title}>{props.firstValue}</Text>
        <Text style={[styles.title, { marginLeft: 10 }]}>
          ({props.secondValue})
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 7,
  },

  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16.5,
  },

  text: {
    color: "white",
    fontSize: 16.5,
  },
})

export default ListItem
