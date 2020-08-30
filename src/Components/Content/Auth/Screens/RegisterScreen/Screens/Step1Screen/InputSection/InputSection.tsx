// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { View, TextInput, Text, Keyboard, StyleSheet } from "react-native"
import { Formik } from "formik"
import * as yup from "yup"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"
import { TouchableOpacity } from "react-native-gesture-handler"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any

  setFirstScreenValuesActionCreator: (
    UserLogin: string,
    UserPassword: string,
    inviteID: string
  ) => void
}

const InputSection: React.FC<PropsType> = (props) => {
  const ValidationSchema = yup.object({
    login: yup.string().required("Логин обязателен"),
    password: yup
      .string()
      .min(6, "Пароль слишком короток - минимум 6 символов")
      .matches(/[a-zA-Z]/ as any, "Пароль должен включать латинские символы")
      .required("Пароль обязателен"),
  })

  return (
    <Formik
      validationSchema={ValidationSchema}
      initialValues={{
        login: "" as string,
        password: "" as string,
        inviteID: "" as string,
      }}
      onSubmit={(values: any) => {
        props.setFirstScreenValuesActionCreator(
          values.login,
          values.password,
          values.inviteID
        )
        props.navigation.navigate("RegisterStep2Screen")
      }}
    >
      {(FormikProps) => {
        const userInviteID = props.route.params.userInvitedID
        useEffect(() => {
          FormikProps.setValues({
            ...FormikProps.values,
            inviteID: userInviteID,
          })
        }, [userInviteID])
        return (
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
              onChangeText={FormikProps.handleChange("inviteID")}
              onBlur={FormikProps.handleBlur("inviteID")}
              value={FormikProps.values.inviteID}
              style={styles.input}
              keyboardType={"number-pad"}
            />
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("UsersIDsListScreen")
              }}
            >
              <Text style={styles.text}>
                Если у вас нет ID пожалуйста нажмите сюда
              </Text>
            </TouchableOpacity>

            <Button
              text="Далее"
              onPress={FormikProps.handleSubmit}
              buttonStyle={styles.button}
              textStyle={styles.button_text}
            />
          </View>
        )
      }}
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

  button: {
    marginTop: 35,
    backgroundColor: "#F2F2F2",
    alignSelf: "center",
  },

  button_text: {
    color: "#00392D",
    fontWeight: "bold",
  },

  text: {
    color: "silver",
    textAlign: "center",
    marginTop: 13,
  },
})

export default InputSection
