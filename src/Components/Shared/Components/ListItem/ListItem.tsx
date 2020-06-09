// PLUGINS IMPORTS //
import React from "react"
import { Text, StyleSheet } from "react-native"
import { RectButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  navigationDestination?: any | undefined | null
  action?: () => any

  title: string
  icon: any

  titleStyle?: any
}

const ListItem: React.FC<PropsType> = (props) => {
  return (
    <RectButton
      style={styles.container}
      onPress={() => {
        props.navigationDestination
          ? props.navigation.navigate(props.navigationDestination)
          : props.action()
      }}
    >
      {props.icon}
      <Text style={{ ...styles.text, ...props.titleStyle }}>{props.title}</Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 17,
    paddingHorizontal: 20,
  },

  text: {
    color: "#00392D",
    fontWeight: "700",
    fontSize: 18,
    marginLeft: 13,
    letterSpacing: 0.4,
    marginTop: -3,
  },
})

export default ListItem