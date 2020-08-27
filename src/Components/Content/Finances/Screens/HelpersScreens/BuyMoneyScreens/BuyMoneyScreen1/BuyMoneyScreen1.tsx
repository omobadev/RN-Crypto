// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, ScrollView, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import FooterInput from "~/Components/Shared/Sections/FooterInputSection/FooterInputSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  CGCInfo: {
    price: string
    value2: string
  }
}

const BuyMoneyScreen1: React.FC<PropsType> = (props) => {
  const [value, setValue] = useState("" as string)

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text style={styles.title}>Текущий баланс:</Text>
        <Text style={styles.subtitle}>{props.CGCInfo.price || 0} CGC</Text>
      </View>

      <View style={styles.footer_input}>
        <Text style={styles.perc_price}>
          Вы получите: {Number(value) - Number(value) / 10 / 2} CGC (включая 5%
          комиссии)
        </Text>
        <FooterInput
          action={(values: { value: string }) => {
            if (Number(values.value) > 0) {
              props.navigation.navigate("BuyMoneyScreen2", {
                price: values.value,
              })
            }
          }}
          buttonText="Далее"
          valueName="Количество"
          errorText="Укажите количество"
          onChangeText={(text: string) => setValue(text)}
          isNumberPad
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },

  content: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    color: "#00392D",
    fontSize: 17,
  },

  subtitle: {
    color: "#00392D",
    fontSize: 16,
  },

  perc_price: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center",
  },

  footer_input: {
    marginTop: "60%",
    marginBottom: 30,
    alignItems: "center",
  },
})

export default BuyMoneyScreen1
