// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import { Formik } from "formik"
import * as yup from "yup"

// COMPONENTS IMPORTS //
import FooterInput from "~/Components/Shared/Sections/FooterInputSection/FooterInputSection"

// EXTRA IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any

  deriveMoneyThunkCreator: (
    moneyAmount: number,
    currency: string,
    wallet: string,
    password: string
  ) => void
}

const MoneyMoveOutScreen2: React.FC<PropsType> = (props) => {
  const [wallet, setWallet] = useState(null as string | null)
  const ValidationSchema = yup.object({
    value: yup
      .string()
      .required(`Укажите адрес для вывода`)
      .typeError(`Укажите адрес для вывода`),
  })

  const moneyAmount = props.route.params.moneyAmount
  const currency = props.route.params.currency

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Укажите адрес для вывода:</Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          placeholderTextColor="rgba(0, 57, 45, 0.5)"
          value={wallet as string}
          onChangeText={(text: string) => setWallet(text)}
        />
      </View>

      <FooterInput
        buttonText="Вывести"
        action={(values: { value: string }) => {
          props.deriveMoneyThunkCreator(
            moneyAmount,
            currency,
            wallet as string,
            values.value
          )
        }}
        containerStyle={styles.footer_input}
        valueName="Введите пароль"
        errorText="Введите пароль"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 30,
  },

  content: {
    flex: 1,
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

  footer_input: {
    flex: 1,
    marginBottom: 15,
  },
})

export default MoneyMoveOutScreen2
