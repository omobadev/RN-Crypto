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
}

const BuyMoneyScreen2: React.FC<PropsType> = (props) => {
  const [popupVisible, setPopupVisible] = useState(false as boolean)

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Для пополнения на сумму{" "}
          <Text style={styles.bold}>{props.route.params.value} рублей</Text> вам
          необходимо совершить перевод в размере:
        </Text>

        <Text style={{ ...styles.paragraph, ...styles.price_paragraph }}>
          <Text style={styles.bold}>111 {props.route.params.currency} </Text>
          на адрес 0x123qeert31
        </Text>
        <Text style={{ ...styles.paragraph, fontSize: 16.5 }}>
          После того как ваша транзакция осуществится ваш баланс автоматически
          пополнится
        </Text>
        <Button
          text="Готово"
          onPress={() => setPopupVisible(true)}
          buttonStyle={{
            marginTop: 50,
            alignSelf: "center",
          }}
        />
      </View>
      <PopUp
        popupVisible={popupVisible}
        setPopupVisible={setPopupVisible}
        title="Спасибо!"
        description="Ваша транзакция поступила в обработку"
        buttonsArray={[
          {
            text: "OK",
            action: () => props.navigation.navigate("FinancesMain"),
          },
        ]}
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
