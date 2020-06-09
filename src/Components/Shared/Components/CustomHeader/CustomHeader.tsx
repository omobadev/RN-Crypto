// PLUGINS IMPORTS //
import React from "react"
import { Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  title: string
}

const CustomHeader: React.FC<PropsType> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 13,
  },

  title: {
    color: "#F2F2F2",
    fontSize: 19,
    fontWeight: "bold",
  },
})

export default CustomHeader
