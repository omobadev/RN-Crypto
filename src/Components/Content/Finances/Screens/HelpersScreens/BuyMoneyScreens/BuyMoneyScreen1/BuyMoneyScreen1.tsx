// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, ScrollView, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import RadioItem from "./RadioItem/RadioItem"
import FooterInput from "~/Components/Shared/Sections/FooterInputSection/FooterInputSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const BuyMoneyScreen1: React.FC<PropsType> = (props) => {
  const [selectedCurrency, setSelectedCurrency] = useState("ETH" as string)

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>
        Вы собираетесь пополнить баланс вашего персонального кошелька
      </Text>
      <Text style={styles.subtitle}>Выберите способ:</Text>
      <RadioItem
        value="ETH"
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
      />
      <RadioItem
        value="BTC"
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
      />
      <RadioItem
        value="Payeer"
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
      />

      <View>
        <FooterInput
          action={() =>
            props.navigation.navigate("BuyMoneyScreen2", {
              currency: selectedCurrency,
            })
          }
          buttonText="Далее"
          valueName="Количество"
          errorText="Укажите количество"
          containerStyle={{
            marginTop: 260,
          }}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },

  title: {
    marginTop: 21,
    marginBottom: 20,
    color: "#00392D",
    fontSize: 17,
  },

  subtitle: {
    marginBottom: 20,
    color: "#00392D",
    fontSize: 16,
  },
})

export default BuyMoneyScreen1
