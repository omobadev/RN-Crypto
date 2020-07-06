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
import CustomHeader from "~/Components/Shared/Components/CustomHeader/CustomHeader"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  userID: string | null
  BudgetInfo: {
    CGC: {
      price: string
      value2: string
    }

    MiningCGC: {
      price: string
      value2: string
    }
    DailyIncome: {
      price: string
      value2: string
    }
  }
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
          <ListItem
            title="CGC:"
            firstValue={props.BudgetInfo.CGC.price}
            secondValue={`${props.BudgetInfo.CGC.value2 || "0"} $`}
          />
          <ListItem
            title="Майнинг CGC:"
            firstValue={props.BudgetInfo.MiningCGC.price}
            secondValue={`${props.BudgetInfo.MiningCGC.value2 || "0"} $`}
          />
          <ListItem
            title="Доход в сутки:"
            firstValue={props.BudgetInfo.DailyIncome.price}
            secondValue={`${props.BudgetInfo.DailyIncome.value2 || "0"} $`}
          />
        </View>
        <Text style={{ ...styles.title, marginBottom: 5, marginTop: 11.5 }}>
          Ваш уникальный адрес:
        </Text>
        <Text style={styles.text}>{props.userID}</Text>
        <TouchableOpacity
          style={styles.footer}
          onPress={() => props.navigation.navigate("TransactionsHistory")}
        >
          <Image
            style={styles.icon}
            source={require("~/Images/Icons/icon-clock.png")}
          />
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
    marginRight: 15,
    marginTop: -7.5,
    marginBottom: 20,
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

  icon: {
    height: 20,
    width: 20,
    resizeMode: "center",
  },
})

export default TopBox
