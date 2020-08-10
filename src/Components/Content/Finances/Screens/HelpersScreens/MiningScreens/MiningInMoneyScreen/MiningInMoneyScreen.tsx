// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, Text, Keyboard, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import InputSection from "~/Components/Shared/Sections/FooterInputSection/FooterInputSection"
import Popup from "~/Components/Shared/Components/Popups/PopUp/PopUp"

import RadioItem from "~/Components/Shared/Components/RadioItem/RadioItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any

  addMiningThunkCreator: (moneyAmount: string, currency: string) => any
}

const MiningInMoneyScreen: React.FC<PropsType> = (props) => {
  const [popupVisible, setPopupVisible] = useState(false as boolean)
  const [selectedCurrency, setSelectedCurrency] = useState("CGC" as string)

  return (
    <>
      <View style={styles.container}>
        <View style={styles.currency_wrap}>
          <Text style={styles.title}>Валюта</Text>
          <View>
            <RadioItem
              selectedCurrency={selectedCurrency}
              value={"CGC"}
              setSelectedCurrency={setSelectedCurrency}
            />
            <RadioItem
              selectedCurrency={selectedCurrency}
              value={"INPH"}
              setSelectedCurrency={setSelectedCurrency}
            />
          </View>
        </View>
        <InputSection
          buttonText="Пополнить"
          valueName="Укажите сумму"
          errorText="Сумма указана неверно"
          isNumberPad
          action={(values: any) => {
            Keyboard.dismiss()
            props
              .addMiningThunkCreator(values.value, selectedCurrency)
              .then(() => setPopupVisible(true))
          }}
          containerStyle={styles.footer_input}
        />
      </View>
      <Popup
        buttonsArray={[
          {
            text: "OK",
            action: () => props.navigation.navigate("FinancesMain"),
          },
        ]}
        title="Спасибо!"
        description="Ваша заявка поступила в обработку"
        containerStyle={{
          width: "90%",
        }}
        popupVisible={popupVisible}
        setPopupVisible={setPopupVisible}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },

  currency_wrap: {
    marginHorizontal: 15,
    flex: 1,
    marginTop: 20,
  },

  title: {
    color: "#9E9E9E",
  },

  footer_input: {
    flex: 1,
  },
})

export default MiningInMoneyScreen
