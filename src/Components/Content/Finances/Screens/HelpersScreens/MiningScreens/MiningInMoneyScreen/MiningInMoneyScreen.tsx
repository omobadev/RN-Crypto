// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, Keyboard, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import InputSection from "~/Components/Shared/Sections/FooterInputSection/FooterInputSection"
import Popup from "~/Components/Shared/Components/PopUp/PopUp"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any
}

const MiningInMoneyScreen: React.FC<PropsType> = (props) => {
  const [popupVisible, setPopupVisible] = useState(false as boolean)

  return (
    <>
      <View style={styles.container}>
        <InputSection
          buttonText="Пополнить"
          valueName="Укажите сумму"
          errorText="Сумма указана неверно"
          action={() => {
            Keyboard.dismiss()
            setPopupVisible(true)
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
    marginTop: 130,
    marginLeft: -10,
  },
})

export default MiningInMoneyScreen
