// PLUGINS IMPORTS //
import React from "react"
import { ImageBackground, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import InputSection from "./InputSection/InputSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  setSecondScreenValuesActionCreator: (
    UserName: string,
    Email: string,
    Country: string,
    City: string
  ) => void
  RegisterUserThunkCreator: (secretCode: string) => void
}

const Step2Screen: React.FC<PropsType> = (props) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("~/Images/bg-1.png")}
    >
      <InputSection
        navigation={props.navigation}
        setSecondScreenValuesActionCreator={
          props.setSecondScreenValuesActionCreator
        }
        RegisterUserThunkCreator={props.RegisterUserThunkCreator}
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})

export default Step2Screen
