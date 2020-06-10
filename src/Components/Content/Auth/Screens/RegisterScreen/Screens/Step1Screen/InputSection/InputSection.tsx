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
}

const InputSection: React.FC<PropsType> = (props) => {
  const ValidationSchema = yup.object({
    login: yup.string().required("Логин обязателен"),
    password: yup
      .string()
      .min(6, "Пароль слишком короток - минимум 6 символов")
      .matches(/[a-zA-Z]/ as any, "Пароль может только иметь латинские символы")
      .required("Пароль обязателен"),
  })

  return (
    <Formik
      validationSchema={ValidationSchema}
      initialValues={{
        login: "" as string,
        password: "" as string,
        invidtedID: "" as string,
      }}
      onSubmit={(values: any) => {
        props.navigation.navigate("RegisterStep2Screen")
      }}
    >
      {(FormikProps) => (
        <View style={styles.container}>
          <TextInput
            placeholder="Логин"
            placeholderTextColor="rgba(242, 242, 242, 0.6)"
            onChangeText={FormikProps.handleChange("login")}
            onBlur={FormikProps.handleBlur("login")}
            value={FormikProps.values.login}
            style={styles.input}
          />
          <Text style={styles.error_message}>
            {FormikProps.touched.login && FormikProps.errors.login}
          </Text>
          <TextInput
            placeholder="Пароль"
            placeholderTextColor="rgba(242, 242, 242, 0.6)"
            textContentType="newPassword"
            autoCompleteType="password"
            onChangeText={FormikProps.handleChange("password")}
            onBlur={FormikProps.handleBlur("password")}
            value={FormikProps.values.password}
            style={styles.input}
          />
          <Text style={styles.error_message}>
            {FormikProps.touched.password && FormikProps.errors.password}
          </Text>
          <TextInput
            placeholder="ID пригласившего"
            placeholderTextColor="rgba(242, 242, 242, 0.6)"
            onChangeText={FormikProps.handleChange("invidtedID")}
            onBlur={FormikProps.handleBlur("invidtedID")}
            value={FormikProps.values.invidtedID}
            style={styles.input}
          />

          <TouchableOpacity>
            <Text style={styles.subtitle}>
              Если у вас нет ID партнёра - нажмите сюда
            </Text>
          </TouchableOpacity>
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
  },

  error_message: {
    color: "crimson",
    marginBottom: 13,
    marginTop: 4,
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
