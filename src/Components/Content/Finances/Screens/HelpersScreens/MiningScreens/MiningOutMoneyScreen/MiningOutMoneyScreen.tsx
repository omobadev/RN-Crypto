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

  deriveMiningThunkCreator: (moneyAmount: string) => any
}

const MiningOutMoneyScreen: React.FC<PropsType> = (props) => {
  const [popupVisible, setPopupVisible] = useState(false as boolean)

  return (
    <>
      <View style={styles.container}>
        <InputSection
          buttonText="Пополнить"
          valueName="Укажите сумму"
          errorText="Сумма указана неверно"
          action={(values: any) => {
            Keyboard.dismiss()
            props
              .deriveMiningThunkCreator(values.value)
              .then(() => setPopupVisible(true))
          }}
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
})

export default MiningOutMoneyScreen
