// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import FooterInput from "~/Components/Shared/Sections/FooterInputSection/FooterInputSection"

import Popup from "~/Components/Shared/Components/Popups/PopUp/PopUp"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any
  transferStatusRes: {
    title: string
    text: string
    visible: boolean
    positive: boolean
  }

  setTransferStatusResActionCreator: (config: {
    title: string
    text: string
    visible: boolean
    positive: boolean
  }) => void
  sendCGCMoneyThunkCreator: (
    selectedUserID: string,
    password: string,
    moneyAmount: number
  ) => any
}

const MoneyMoveInScreen2: React.FC<PropsType> = (props) => {
  const moneyAmount = props.route.params.moneyAmount
  const selectedUserID = props.route.params.selectedUserID

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Внимание! </Text>
          Вы собираетесь сделать перевод средств.
        </Text>
        <Text style={styles.paragraph}>
          Имейте ввиду что перевод средств, как правило, занимает 1-2 часа с
          момента осуществления перевода.
        </Text>

        <FooterInput
          buttonText="Перевести"
          action={(values: { value: string }) =>
            props.sendCGCMoneyThunkCreator(
              selectedUserID,
              values.value,
              moneyAmount
            )
          }
          containerStyle={styles.footer_input}
          valueName="Введите пароль"
          errorText="Введите пароль"
        />
      </View>

      <Popup
        title={props.transferStatusRes.title}
        description={props.transferStatusRes.text}
        containerStyle={styles.popup}
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },

  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
  },

  paragraph: {
    color: "#00392D",
    fontSize: 18,
    marginBottom: 16,
  },

  bold: {
    fontWeight: "bold",
  },

  popup: { width: "80%" },

  footer_input: {
    marginTop: 135,
  },
})

export default MoneyMoveInScreen2
