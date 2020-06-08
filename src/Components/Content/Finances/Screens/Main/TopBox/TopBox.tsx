// PLUGINS IMPORTS //
import React from "react"
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native"

// COMPONENTS IMPORTS //
import ListItem from "./ListItem/ListItem"

// EXTRA IMPORTS //
import { AntDesign } from "@expo/vector-icons"
import CustomHeader from "~/Components/Shared/CustomHeader/CustomHeader"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const TopBox: React.FC<PropsType> = (props) => {
  return (
    <ImageBackground
      source={require("~/Images/bg-1.png")}
      imageStyle={{ borderBottomRightRadius: 25, borderBottomLeftRadius: 25 }}
      style={styles.container}
    >
      <CustomHeader title="Финансы" />
      <View style={styles.content_wrap}>
        <Text style={{ ...styles.title, marginBottom: 20 }}>
          Текущий баланс
        </Text>
        <View style={styles.list_wrap}>
          <ListItem title="CGC:" firstValue="150" secondValue="15$" />
          <ListItem title="Майнинг CGC:" firstValue="150" secondValue="15$" />
          <ListItem title="Доход в сутки:" firstValue="150" secondValue="15$" />
        </View>
        <Text style={{ ...styles.title, marginBottom: 5, marginTop: 11.5 }}>
          Ваш уникальный адрес:
        </Text>
        <Text style={styles.text}>0x12334324jkldfji21</Text>
        <TouchableOpacity
          style={styles.footer}
          onPress={() => props.navigation.navigate("TransactionsHistory")}
        >
          <AntDesign name="clockcircleo" size={20} color="#F2F2F2" />
          <Text style={styles.text}>Открыть историю транзакций</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },

  content_wrap: {
    marginTop: 10,
    marginHorizontal: 20,
  },

  list_wrap: {
    marginRight: 40,
    marginTop: -7.5,
    marginBottom: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  footer: {
    marginTop: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 275,
  },

  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16.5,
  },

  text: {
    color: "white",
    fontSize: 16.5,
  },
})

export default TopBox
