// PLUGINS IMPORTS //
import React from "react"
import { Image, ImageBackground, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import InputSection from "./InputSection/InputSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const LoginScreen: React.FC<PropsType> = (props) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("~/Images/bg-2.png")}
    >
      <Image style={styles.logo} source={require("~/Images/logo-big.png")} />
      <InputSection />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 200,
  },

  logo: {
    width: 124,
    height: 106,
    resizeMode: "center",
  },
})

export default LoginScreen
