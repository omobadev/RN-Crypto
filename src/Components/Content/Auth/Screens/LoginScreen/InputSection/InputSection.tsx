// PLUGINS IMPORTS //
import React from "react"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native"
import { Formik } from "formik"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const { width, height } = Dimensions.get("window")

const InputSection: React.FC<PropsType> = (props) => {
  return (
    <Formik
      initialValues={{
        email: "" as string,
        password: "" as string,
      }}
      onSubmit={(values: any) => {}}
    >
      {(FormikProps) => (
        <>
          <View style={styles.container}>
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
            <TouchableOpacity>
              <Text style={styles.forgot_pass_text}>Forgot the password?</Text>
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
      )}
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
})

export default InputSection
