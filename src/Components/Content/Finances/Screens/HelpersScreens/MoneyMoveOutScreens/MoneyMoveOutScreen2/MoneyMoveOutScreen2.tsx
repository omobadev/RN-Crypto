// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { View, Text, TextInput, StyleSheet, CheckBox } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"

// COMPONENTS IMPORTS //
import FooterInput from "~/Components/Shared/Sections/FooterInputSection/FooterInputSection"
import PopUp from "~/Components/Shared/Components/Popups/PopUp/PopUp"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any

  transferStatusRes: {
    title: string
    text: string
    visible: boolean
    positive: boolean
    link?: string
  }

  deriveMoneyThunkCreator: (
    moneyAmount: number,
    wallet: string,
    password: string
  ) => any
  setTransferStatusResActionCreator: (config: {
    title: string
    text: string
    visible: boolean
    positive: boolean
    link?: string
  }) => void
}

const MoneyMoveOutScreen2: React.FC<PropsType> = (props) => {
  const [isSaveWallet, setIsSaveWallet] = useState(false as boolean)
  const [wallet, setWallet] = useState(null as string | null)

  useEffect(() => {
    props.navigation.addListener("focus", () => {
      const getData = async () => {
        const defaultWallet = await AsyncStorage.getItem("defaultWallet")
        setWallet(JSON.parse(defaultWallet as string))
      }

      getData()
    })
    props.navigation.addListener("blur", () => {
      props.setTransferStatusResActionCreator({
        title: null as any,
        text: null as any,
        visible: false,
        positive: false,
        link: null as any,
      })
    })
  }, [props.navigation])

  const moneyAmount = props.route.params.moneyAmount

  return (
    <>
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
          <View style={styles.checkbox_wrap}>
            <CheckBox
              value={isSaveWallet}
              onChange={() => setIsSaveWallet(!isSaveWallet)}
            />
            <Text>Сохранить текущий адрес</Text>
          </View>
        </View>

        <FooterInput
          buttonText="Вывести"
          action={async (values: { value: string }) => {
            if (isSaveWallet) {
              await AsyncStorage.setItem(
                "defaultWallet",
                JSON.stringify(wallet)
              )
            }
            props.deriveMoneyThunkCreator(
              moneyAmount,
              wallet as string,
              values.value
            )
          }}
          containerStyle={styles.footer_input}
          valueName="Введите пароль"
          errorText="Введите пароль"
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

  checkbox_wrap: {
    flexDirection: "row",
    alignItems: "center",
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
