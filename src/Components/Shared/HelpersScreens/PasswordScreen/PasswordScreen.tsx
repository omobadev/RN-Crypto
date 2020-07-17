// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { ImageBackground, StyleSheet } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"

// COMPONENTS IMPORTS //
import Body from "./Body/Body"
import Footer from "./Footer/Footer"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any

  RegisterUserThunkCreator: (secretCode: string) => void
}

const PasswordScreen: React.FC<PropsType> = (props) => {
  const [password, setPassword] = useState("" as string)

  return (
    <ImageBackground
      style={styles.container}
      source={require("~/Images/bg-1.png")}
    >
      <Body route={props.route} password={password} setPassword={setPassword} />
      <Footer
        password={password}
        setPassword={setPassword}
        callbackFn={
          props.route.params.callbackFnTitle === "Register"
            ? props.RegisterUserThunkCreator
            : props.RegisterUserThunkCreator
        }
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
  },
})

export default PasswordScreen
