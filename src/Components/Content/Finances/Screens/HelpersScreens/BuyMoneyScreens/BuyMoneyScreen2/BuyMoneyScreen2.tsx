// PLUGINS IMPORTS //
import React, { useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  Clipboard,
  StyleSheet,
} from "react-native"
import { TextInput } from "react-native-paper"

// COMPONENTS IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"
import PopUp from "~/Components/Shared/Components/Popups/PopUp/PopUp"

// EXTRA IMPORTS //
import { FontAwesome5 } from "@expo/vector-icons"

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
  const adress = "MSJKNSKJANSKAMSA"

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

        <View style={[styles.adress_wrap, { marginTop: 25 }]}>
          <Text style={styles.paragraph}>{adress}</Text>
          <TouchableOpacity
            onPress={async () => await Clipboard.setString(adress)}
          >
            <FontAwesome5 name="copy" size={24} color="#00392D" />
          </TouchableOpacity>
        </View>

        <TextInput
          value={sendingAdress as string}
          onChangeText={(text: string) => setSendingAdress(text)}
          theme={{ colors: { primary: "#00392D" } }}
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

  adress_wrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
})

export default BuyMoneyScreen2
