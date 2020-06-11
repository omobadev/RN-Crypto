// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  icon: any
  onPress: () => void

  containerStyle?: any
}

const CircleBtbItem: React.FC<PropsType> = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onPress()}>
      <View style={{ ...styles.container, ...props.containerStyle }}>
        {props.icon}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#006F5F",
    borderWidth: 1,
    borderRadius: 100,
    height: 53,
    width: 53,
    alignItems: "center",
    justifyContent: "center",
  },
})

export default CircleBtbItem
