// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"
import PopUp from "~/Components/Shared/Components/Popups/PopUp/PopUp"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any

  wallet: string
  transferStatusRes: {
    title: string
    text: string
    visible: boolean
    positive: boolean
    link?: string
  }

  setTransferStatusResActionCreator: (config: {
    title: string
    text: string
    visible: boolean
    positive: boolean
    link?: string
  }) => void
  buyMoneyThunkCreator: (moneyAmount: number, currency: string) => void
}

const BuyMoneyScreen2: React.FC<PropsType> = (props) => {
  const price = props.route.params.price
  const currency = props.route.params.currency

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Для пополнения на сумму{" "}
          <Text style={styles.bold}>
            {price} {currency}{" "}
          </Text>
          вам необходимо совершить перевод в размере:
          <Text style={styles.bold}> {price} CGC</Text>
        </Text>

        <Text style={[styles.paragraph, { fontSize: 16.5, marginTop: 10 }]}>
          После того как ваша транзакция осуществится ваш баланс автоматически
          пополнится
        </Text>
        <Button
          text="Получить ссылку"
          onPress={() => props.buyMoneyThunkCreator(price, currency)}
          buttonStyle={{
            marginTop: 50,
            alignSelf: "center",
          }}
        />
      </View>
      <PopUp
        title={props.transferStatusRes.title}
        description={props.transferStatusRes.text}
        link={props.transferStatusRes.link}
        buttonsArray={[
          {
            text: "OK",
            action: () => props.navigation.navigate("FinancesMain"),
          },
        ]}
        popupVisible={props.transferStatusRes.visible}
        setPopupVisible={(visibility: boolean) =>
          props.setTransferStatusResActionCreator({
            ...props.transferStatusRes,
            visible: visibility,
          })
        }
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },

  paragraph: {
    color: "#00392D",
    fontSize: 16.7,
    lineHeight: 18,
    letterSpacing: 0.3,
  },

  bold: {
    fontWeight: "bold",
  },

  price_paragraph: {
    marginVertical: 20,
  },
})

export default BuyMoneyScreen2
