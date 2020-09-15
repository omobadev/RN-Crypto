// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import {
  View,
  Text,
  TextInput,
  Keyboard,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native"
import { Formik } from "formik"
import * as Linking from "expo-linking"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  LoginError: boolean
  LoginUserThunkCreator: (email: string, password: string) => void
  setLoginErrorStatusActionCreator: (loginErrorStatus: boolean) => void
}

const { height } = Dimensions.get("window")
const InputSection: React.FC<PropsType> = (props) => {
  return (
    <Formik
      initialValues={{
        email: "" as string,
        password: "" as string,
      }}
      onSubmit={(values: any) => {
        Keyboard.dismiss()
        props.LoginUserThunkCreator(values.email, values.password)
      }}
    >
      {(FormikProps) => {
        useEffect(() => {
          props.setLoginErrorStatusActionCreator(false)
        }, [FormikProps.values])

        return (
          <>
            <View style={styles.container}>
              {props.LoginError && (
                <Text style={styles.error_text}>
                  Введенный пароль или электронный адрес неверен. Попробуйте еще
                  раз
                </Text>
              )}
              <TextInput
                placeholder="Email или логин"
                placeholderTextColor="rgba(0, 57, 45, 0.4)"
                onChangeText={FormikProps.handleChange("email")}
                onBlur={FormikProps.handleBlur("email")}
                textContentType="emailAddress"
                autoCompleteType="email"
                keyboardType="email-address"
                value={FormikProps.values.email}
                style={styles.input}
              />
              <TextInput
                placeholder="Пароль"
                placeholderTextColor="rgba(0, 57, 45, 0.4)"
                textContentType="newPassword"
                autoCompleteType="password"
                onChangeText={FormikProps.handleChange("password")}
                onBlur={FormikProps.handleBlur("password")}
                value={FormikProps.values.password}
                style={styles.input}
              />
              <TouchableOpacity
                onPress={() => Linking.openURL("https://cgc.capital/resetpass")}
              >
                <Text style={styles.forgot_pass_text}>Забыли пароль?</Text>
              </TouchableOpacity>
            </View>
            <Button
              onPress={FormikProps.handleSubmit}
              text="Вход"
              textStyle={{
                fontWeight: "bold",
              }}
            />
          </>
        )
      }}
    </Formik>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    height: height / 3,
    justifyContent: "center",
    marginHorizontal: 20,
    alignSelf: "center",
    width: 330,
  },

  input: {
    height: 50,
    borderRadius: 9,
    paddingLeft: 20,
    marginVertical: 9,
    color: "black",
    fontSize: 16,
    backgroundColor: "rgba(0, 57, 45, 0.05)",
  },

  forgot_pass_text: {
    color: "#9E9E9E",
    fontSize: 13,
    marginHorizontal: 10,
  },

  error_text: {
    color: "crimson",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
})

export default InputSection
