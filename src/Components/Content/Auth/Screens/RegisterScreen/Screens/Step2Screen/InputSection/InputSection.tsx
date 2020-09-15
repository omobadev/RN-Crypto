// PLUGINS IMPORTS //
import React from "react"
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native"
import { Formik } from "formik"
import * as yup from "yup"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  setSecondScreenValuesActionCreator: (
    UserName: string,
    Email: string,
    Country: string,
    City: string
  ) => void
}

const InputSection: React.FC<PropsType> = (props) => {
  const ValidationSchema = yup.object({
    name: yup.string().required("Имя обязательно"),
    email: yup.string().email("Не валидный email").required("Email обязателен"),
    country: yup.string().required("Страна обязательна"),
    city: yup.string().required("Город обязателен"),
  })

  return (
    <Formik
      validationSchema={ValidationSchema}
      initialValues={{
        name: "" as string,
        email: "" as string,
        country: "" as string,
        city: "" as string,
      }}
      onSubmit={(values: any) => {
        props.setSecondScreenValuesActionCreator(
          values.name,
          values.email,
          values.country,
          values.city
        )
        props.navigation.navigate("PasswordScreen", {
          title: "Придумайте секретный пин-код",
          callbackFnTitle: "Register",
        })
      }}
    >
      {(FormikProps) => (
        <View style={styles.container}>
          <TextInput
            placeholder="Имя"
            placeholderTextColor="rgba(242, 242, 242, 0.6)"
            onChangeText={FormikProps.handleChange("name")}
            onBlur={FormikProps.handleBlur("name")}
            value={FormikProps.values.name}
            style={styles.input}
          />
          {FormikProps.touched.name && FormikProps.errors.name && (
            <Text style={styles.error_message}>
              {FormikProps.touched.name && FormikProps.errors.name}
            </Text>
          )}
          <TextInput
            placeholder="Email"
            placeholderTextColor="rgba(242, 242, 242, 0.6)"
            autoCompleteType="email"
            onChangeText={FormikProps.handleChange("email")}
            onBlur={FormikProps.handleBlur("email")}
            value={FormikProps.values.email}
            style={styles.input}
          />
          {FormikProps.touched.email && FormikProps.errors.email && (
            <Text style={styles.error_message}>
              {FormikProps.touched.email && FormikProps.errors.email}
            </Text>
          )}

          <TextInput
            placeholder="Страна"
            placeholderTextColor="rgba(242, 242, 242, 0.6)"
            onChangeText={FormikProps.handleChange("country")}
            onBlur={FormikProps.handleBlur("country")}
            value={FormikProps.values.country}
            style={styles.input}
          />
          {FormikProps.touched.country && FormikProps.errors.country && (
            <Text style={styles.error_message}>
              {FormikProps.touched.country && FormikProps.errors.country}
            </Text>
          )}
          <TextInput
            placeholder="Город"
            placeholderTextColor="rgba(242, 242, 242, 0.6)"
            onChangeText={FormikProps.handleChange("city")}
            onBlur={FormikProps.handleBlur("city")}
            value={FormikProps.values.city}
            style={styles.input}
          />
          {FormikProps.touched.city && FormikProps.errors.city && (
            <Text style={styles.error_message}>
              {FormikProps.touched.city && FormikProps.errors.city}
            </Text>
          )}

          <Button
            text="Далее"
            onPress={FormikProps.handleSubmit}
            buttonStyle={{
              backgroundColor: "#F2F2F2",
              alignSelf: "center",
            }}
            textStyle={{
              color: "#00392D",
              fontWeight: "bold",
            }}
          />
        </View>
      )}
    </Formik>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignSelf: "center",
    width: 330,
    marginTop: -50,
  },

  input: {
    height: 48,
    borderRadius: 9,
    paddingLeft: 20,
    fontSize: 16,
    backgroundColor: "rgba(242, 242, 242, 0.3)",
    color: "white",
    marginBottom: 17,
  },

  error_message: {
    color: "crimson",
    marginBottom: 13,
    marginTop: -13,
    marginLeft: 6,
    fontSize: 13.5,
    letterSpacing: 0.3,
  },

  subtitle: {
    color: "rgba(242, 242, 242, 0.6)",
    marginTop: 9,
    marginBottom: 30,
    alignSelf: "center",
  },
})

export default InputSection
