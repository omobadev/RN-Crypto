// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import * as Linking from "expo-linking"
import { TouchableOpacity } from "react-native-gesture-handler"

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
        Имейте в виду, что комиссия на вывод составляет 5% от сумму вывода
        количества токенов. Время вывода от 1 до 48 часов. Если вам необходимо
        вывести токены INPH, пожалуйста зайдите в web версию по ссылке:
      </Text>
      <View style={styles.text_wrap}>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://cgc.capital/cabinet")}
        >
          <Text>https://cgc.capital/cabinet</Text>
        </TouchableOpacity>
        <Text>И перейдите во вкладку: INPH P2P</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  paragraph: {
    marginVertical: 7,
    color: "#00392D",
  },

  text_wrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: -7,
  },
})

export default Header
