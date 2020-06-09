// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Header: React.FC<PropsType> = (props) => {
  return (
    <View>
      <Text style={styles.paragraph}>
        Вы собираетесь сделать вывод CGC токенов, обращаем ваше внимание на то,
        что вывод доступен только на созданный вами Ethereum кошелек.
      </Text>
      <Text style={styles.paragraph}>
        Если вы хотите продать CGC токен, то пожалуйста воспользуйтесь данной
        функцией в личном кабинете, которая доступна по адресу:
        https://cgc.capital/
      </Text>
      <Text style={styles.paragraph}>
        Не забывайте выбрать размер комиссии, от этого зависит скорость отправки
        вашей транзакции, среднее время ожидания 60 минут
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  paragraph: {
    marginVertical: 7,
    color: "#00392D",
  },
})

export default Header
