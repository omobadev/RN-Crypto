// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  filled: boolean
}

const PassCountCircleItem: React.FC<PropsType> = (props) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: props.filled ? "#02c6a8" : "transparent",
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#02c6a8",
    borderWidth: 1,
    width: 14,
    height: 14,
    borderRadius: 100,
  },
})

export default PassCountCircleItem
