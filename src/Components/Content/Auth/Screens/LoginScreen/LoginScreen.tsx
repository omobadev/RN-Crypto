// PLUGINS IMPORTS //
import React from "react"
import { Image, View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import InputSection from "./InputSection/InputSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  LoginError: boolean
  LoginUserThunkCreator: (email: string, password: string) => void
  setLoginErrorStatusActionCreator: (loginErrorStatus: boolean) => void
}

const LoginScreen: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("~/Images/logo-big.png")} />
      <InputSection
        LoginError={props.LoginError}
        LoginUserThunkCreator={props.LoginUserThunkCreator}
        setLoginErrorStatusActionCreator={
          props.setLoginErrorStatusActionCreator
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 200,
    backgroundColor: "white",
  },

  logo: {
    width: 124,
    height: 106,
    resizeMode: "center",
  },
})

export default LoginScreen
