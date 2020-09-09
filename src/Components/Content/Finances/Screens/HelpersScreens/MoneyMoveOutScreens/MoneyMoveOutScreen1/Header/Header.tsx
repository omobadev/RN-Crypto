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
