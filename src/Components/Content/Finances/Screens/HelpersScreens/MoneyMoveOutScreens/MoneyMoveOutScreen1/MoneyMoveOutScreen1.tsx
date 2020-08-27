// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import FooterInput from "~/Components/Shared/Sections/FooterInputSection/FooterInputSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const MoneyMoveOutScreen1: React.FC<PropsType> = (props) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />

      <FooterInput
        buttonText="Далее"
        action={(values: { value: string }) =>
          props.navigation.navigate("MoneyMoveOutScreen2", {
            moneyAmount: values.value,
          })
        }
        valueName="Количество"
        errorText="Укажите количество"
        containerStyle={styles.footer_input}
        isNumberPad
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },

  footer_input: {
    marginTop: 120,
    marginBottom: 15,
  },
})

export default MoneyMoveOutScreen1
