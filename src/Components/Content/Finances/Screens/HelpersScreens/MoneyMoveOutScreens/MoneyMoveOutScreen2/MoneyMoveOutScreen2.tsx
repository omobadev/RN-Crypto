// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import { Formik } from "formik"
import * as yup from "yup"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const MoneyMoveOutScreen2: React.FC<PropsType> = (props) => {
  const ValidationSchema = yup.object({
    value: yup
      .string()
      .required(`Укажите адрес для вывода`)
      .typeError(`Укажите адрес для вывода`),
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Укажите адрес для вывода:</Text>

      <Formik
        validationSchema={ValidationSchema}
        initialValues={{
          value: null as string | null,
        }}
        onSubmit={(values: any) => {
          props.navigation.navigate("FinancesMain")
        }}
      >
        {(FormikProps) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="0"
              placeholderTextColor="rgba(0, 57, 45, 0.5)"
              value={FormikProps.values.value as any}
              onChangeText={FormikProps.handleChange("value")}
              onBlur={() => {
                FormikProps.handleBlur("value")
              }}
            />
            {FormikProps.touched.value && FormikProps.errors.value && (
              <Text style={styles.error_message}>
                {FormikProps.touched.value && FormikProps.errors.value}
              </Text>
            )}

            <Button
              text={"Готово"}
              buttonStyle={{ alignSelf: "center" }}
              onPress={FormikProps.handleSubmit}
            />
          </>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 30,
  },

  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#00392D",
  },

  input: {
    marginTop: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 57, 45, 0.25)",
    marginRight: 10,
    paddingBottom: 5,
    color: "#006F5F",
  },

  error_message: {
    color: "red",
    marginBottom: 15,
    marginTop: -8,
  },
})

export default MoneyMoveOutScreen2
