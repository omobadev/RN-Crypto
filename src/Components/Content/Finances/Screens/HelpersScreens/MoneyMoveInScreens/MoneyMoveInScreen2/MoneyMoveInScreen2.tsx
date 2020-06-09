// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"
import Popup from "~/Components/Shared/Components/PopUp/PopUp"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const MoneyMoveInScreen2: React.FC<PropsType> = (props) => {
  const [popupVisible, setPopupVisible] = useState(false as boolean)

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Внимание!</Text> Вы собираетесь сделать
          перевод средств.
        </Text>
        <Text style={styles.paragraph}>
          Имейте ввиду что перевод средств, как правило, занимает 1-2 часа с
          момента осуществления перевода.
        </Text>
        <Button
          text="Оплатить"
          onPress={() => setPopupVisible(true)}
          buttonStyle={{ alignSelf: "center", marginTop: 15 }}
        />
      </View>
      <Popup
        title="Спасибо!"
        description="Ваш перевод прошёл успешно!"
        containerStyle={{ width: "80%" }}
        buttonsArray={[
          {
            text: "OK",
            action: () => props.navigation.navigate("FinancesMain"),
          },
        ]}
        popupVisible={popupVisible}
        setPopupVisible={setPopupVisible}
      />
    </>
  )
}

const styles = StyleSheet.create({
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
})

export default MoneyMoveInScreen2
