// PLUGINS IMPORTS //
import React from "react"
import { Image, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Header: React.FC<PropsType> = (props) => {
  return (
    <Image source={require("~/Images/tmp-graffic.png")} style={styles.image} />
  )
}

const styles = StyleSheet.create({
  image: {
    marginTop: 10,
    alignSelf: "center",
  },
})

export default Header
