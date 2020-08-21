// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { TextInput } from "react-native-paper"

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
  buyMoneyThunkCreator: (moneyAmount: number, sendingAdress: string) => void
}

const BuyMoneyScreen2: React.FC<PropsType> = (props) => {
  const [sendingAdress, setSendingAdress] = useState(null as string | null)
  const price = props.route.params.price

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Внимание перевод можно делать только с персонального кошелька, не с
          кошелька биржи!
        </Text>

        <Text style={[styles.paragraph, { marginTop: 25 }]}>
          Сделайте перевод на сумму <Text style={styles.bold}>{price} </Text>
          на указанный ETH адрес:
        </Text>
        <Text style={[styles.paragraph, { marginTop: 25 }]}>
          <Text style={styles.bold}>{price} </Text>
        </Text>

        <Text style={styles.paragraph}>
          Укажите здесь с какого адреса вы отправляли ETH
        </Text>
        <TextInput
          value={sendingAdress as string}
          onChangeText={(text: string) => setSendingAdress(text)}
        />
        <Button
          text="Я сделал это"
          onPress={() =>
            props.buyMoneyThunkCreator(price, sendingAdress as string)
          }
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
